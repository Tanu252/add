import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
export default function PropertyList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRentalHouse();
  }, []);

  const getRentalHouse = async () => {
    const response = await axios.get("http://localhost:3000/rental-houses");

    setData(response.data);
  };
  return (
    <>
      <div class="flex flex-wrap  mb-8 mt-8   justify-center">
        {data.map((RentalDetails) => {
          return (
            <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <Link
               
                  to={`/PropertyDetail/${RentalDetails.id}`}
                  class="no-underline"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    class="rounded-t-lg w-full"
                    src={RentalDetails.url}
                    alt=""
                  />
                  <div class="p-6 ">
                    <p class="text-gray-900 text-xl font-medium mb-2 ">
                      {RentalDetails.propertyType}
                    </p>
                    <p class="text-gray-700 text-base mb-4">
                      Address:{RentalDetails.address}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
