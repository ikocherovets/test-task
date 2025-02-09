import Image from "next/image";
import React from "react";
import CategoryBeach from "@/public/icn_category_beach.jpg";
import CategoryCabin from "@/public/icn_category_cabin.jpg";
import CategoryPool from "@/public/icn_category_pool.jpg";
import CategoryVilla from "@/public/icn_category_villa.jpg";
import cn from "classnames";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={() => setCategory("beach")}
        className={cn(
          "pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100",
          { "border-gray-800": dataCategory === "beach" },
          { "border-white": dataCategory !== "beach" }
        )}
      >
        <Image
          alt="Category - Beach"
          src={CategoryBeach}
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>
      <div
        onClick={() => setCategory("cabin")}
        className={cn(
          "pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100",
          { "border-gray-800": dataCategory === "cabin" },
          { "border-white": dataCategory !== "cabin" }
        )}
      >
        <Image
          alt="Category - Cabin"
          src={CategoryCabin}
          width={20}
          height={20}
        />

        <span className="text-xs">Cabins</span>
      </div>
      <div
        onClick={() => setCategory("pool")}
        className={cn(
          "pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100",
          { "border-gray-800": dataCategory === "pool" },
          { "border-white": dataCategory !== "pool" }
        )}
      >
        <Image
          alt="Category - Pool"
          src={CategoryPool}
          width={20}
          height={20}
        />

        <span className="text-xs">Pools</span>
      </div>
      <div
        onClick={() => setCategory("villa")}
        className={cn(
          "pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100",
          { "border-gray-800": dataCategory === "villa" },
          { "border-white": dataCategory !== "villa" }
        )}
      >
        <Image
          alt="Category - Villa"
          src={CategoryVilla}
          width={20}
          height={20}
        />

        <span className="text-xs">Villas</span>
      </div>
    </div>
  );
};

export default Categories;
