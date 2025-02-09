import React from "react";
export type Property = {
  id: string;
  price_per_night: number;
};

interface ReservationSidebarProps {
  property: Property;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
}) => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">${property.price_per_night}</h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-2xl">
        <label className="mb-2 block font-bold text-xs">Guests</label>

        <select className="w-full -ml-1 text-xm">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="w-full mb-6 py-6 text-center text-white bg-livio hover:bg-livio_dark rounded-xl cursor-pointer">
        Book
      </div>

      <div className="mb-4 flex justify-between align-center">
        <p>$200 * 3 nights</p>
        <p>$600</p>
      </div>

      <div className="mb-4 flex justify-between align-center">
        <p>Livio fee</p>
        <p>$40</p>
      </div>

      <hr />

      <div className="mt-4 flex justify-between align-center font-bold">
        <p>Total</p>
        <p>$640</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
