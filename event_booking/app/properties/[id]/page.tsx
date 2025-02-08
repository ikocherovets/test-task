import Image from "next/image";
import React from "react";
import Beach from "@/public/beach_1.avif";
import ProfilePicture from "@/public/profile_picture.jpeg";
import ReservationSidebar from "@/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src={Beach}
          alt="Beach house"
          className="object-cover w-full h-full"
          fill
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Left side</h1>

          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src={ProfilePicture}
              alt="The user name"
              className="rounded-full w-[50px] h-[50px]"
              
            />

            <p>
              <strong>Illia Kocherovets </strong>is your host
            </p>
          </div>

          <hr />

          <p className="mt-6 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sit qui nemo odit, quasi voluptatibus? Maxime facere magni
            reiciendis neque.
          </p>
        </div>

       <ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
