from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import Property
from .forms import PropertyForm
from .serializers import PropertiesListSerializer

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)
    
    return JsonResponse({"data": serializer.data}, safe=False)

@api_view(['POST'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)
    
    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()
        
        return JsonResponse({'success': True})
    else:
        print({'error': form.errors, 'non_field_errors': form.non_field_errors()})
        return JsonResponse({'error': form.errors}, status=400)
