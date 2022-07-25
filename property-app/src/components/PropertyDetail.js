import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
let PropertyDetail = () => {
  const { id } = useParams();

  console.log(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    getHouseDetail();
  }, []);
  // ===================== get data=================================
  const getHouseDetail = async () => {
    const response = await axios.get(
      `http://localhost:3000/rental-houses/${id}`
    );

    setData(response.data);
    console.log(response.data);
  };
  // =====================================================
  return (
    <>
      <h5 class="mb-2 text-2xl font-bold tracking-tight  text-center text-gray-900 dark:text-white bg-slate-300">
        House Details
      </h5>
      <div class="flex m-8 ">
        <img class="rounded-t-lg w-1/2" src={data.url} alt="" />
        <div class="flex flex-col justify-between p-4  leading-normal">
          <div class="mb-3 text-2xl text-gray-700 dark:text-gray-400">
            <span class="font-bold">Address:-</span>
            <span>{data.address}</span>
          </div>
          <div class="mb-3 text-2xl text-gray-700 dark:text-gray-400">
            <span class="font-bold">city:-</span>
            <span>{data.city}</span>
          </div>
          <div class=" text-2xl text-gray-700 dark:text-gray-400">
            <span class="font-bold">propertyType:-</span>
            <span>{data.propertyType}</span>
          </div>
          <div class="mb-3 text-2xl text-gray-700 dark:text-gray-400">
            <span class="font-bold">squareFootage:-</span>
            <span>{data.squareFootage}</span>
          </div>
          <div class="mb-3 text-2xl text-gray-700 dark:text-gray-400">
            <span class="font-bold">Price:-</span>
            <span>{data.price}</span>
          </div>
          <div class="mb-3 text-2xl text-gray-700 dark:text-gray-400">
            <span class="font-bold">bedrooms:-</span>
            <span>{data.bedrooms}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
