import Image from "next/image";
import React from "react";
import Beach from "@/public/beach_2.webp";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Reservations</h1>

      <div className="mb-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">

          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src={Beach}
                alt="Profile"
                className="hover:scale-110 object-cover transitin h-full w-full"
                fill
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>

            <p><strong>Check in date:</strong> 05/02/2024</p>
            <p><strong>Check out date:</strong> 10/02/2024</p>
            <p><strong>Number of nights:</strong> 5</p>
            <p><strong>Total price</strong> $640</p>
            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-livio hover:bg-livio_dark text-white rounded-xl">Go to property</div>

          </div>
        </div>      
      </div>
      <div className="mb-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">

          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src={Beach}
                alt="Profile"
                className="hover:scale-110 object-cover transitin h-full w-full"
                fill
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>

            <p><strong>Check in date:</strong> 05/02/2024</p>
            <p><strong>Check out date:</strong> 10/02/2024</p>
            <p><strong>Number of nights:</strong> 5</p>
            <p className="mb-5"><strong>Total price</strong> $640</p>
            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-livio hover:bg-livio_dark text-white rounded-xl">Go properties</div>

          </div>
        </div>      
      </div>
      <div className="mb-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">

          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src={Beach}
                alt="Profile"
                className="hover:scale-110 object-cover transitin h-full w-full"
                fill
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>

            <p><strong>Check in date:</strong> 05/02/2024</p>
            <p><strong>Check out date:</strong> 10/02/2024</p>
            <p><strong>Number of nights:</strong> 5</p>
            <p className="mb-5"><strong>Total price</strong> $640</p>
            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-livio hover:bg-livio_dark text-white rounded-xl">Go properties</div>

          </div>
        </div>      
      </div>

      
    </main>
  );
};

export default MyReservationsPage;
