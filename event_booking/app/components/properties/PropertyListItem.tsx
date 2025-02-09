import Image from "next/image";
import React from "react";
import { PropertyType } from "./PropertyList";
import { useRouter } from "next/navigation";

interface PropertyProps {
  property: PropertyType;
}

const PropertyListItem: React.FC<PropertyProps> = ({ property }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`properties/${property.id}`)} className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          src={property.image_url}
          alt="Beach house"
          className="hover:scale-110 object-cover transition h-full w-full"
          sizes="(max-width: 768px) 768px, (max-width: 1280px): 768px, 768px"
          fill
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>{property.price_per_night}</strong> per night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
