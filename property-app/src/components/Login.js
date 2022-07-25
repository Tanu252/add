import axios from "axios";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // ----------------------------------------------
  let fetchData = async () => {
    const Result = await axios.get("http://localhost:3000/posts");
    const UserData = Result.data;
    console.log(UserData);
    const person = UserData.find((element) => {
      if (
        element.email == fetchedData.email &&
        element.Password == fetchedData.Password
      ) {
        return true;
      }

      return false;
    });

    if (person) {
      nav("/");
      console.log("found");
    } else {
      console.log("not found");
    }
  };
  // ---------------------------------------------------------------
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [fetchedData, setFetchedData] = useState({});
  const onSubmit = (data, e) => {
    e.preventDefault();
    setFetchedData(data);
    fetchData();
  };
  // =================================================

  return (
    <>
      <div>
        {/* <!-- Login Form --> */}
        <div class="container mx-auto p-2">
          <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
            <div class="text-center mb-8">
              <h1 class="font-bold text-2xl ">Login To Residence</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mt-5">
                <label for="Email">Email</label>
                <input
                  {...register("Email", { required: true })}
                  type="email"
                  id="Email"
                  class="block w-full p-2 border rounded border-gray-500"
                />
                {errors.Email && <span>This field is required</span>}
              </div>
              <div class="mt-5">
                <label for="password">Password</label>
                <input
                  {...register("Password", { required: true })}
                  type="password"
                  id="password"
                  class="block w-full p-2 border rounded border-gray-500"
                />
                {errors.Email && <span>This field is required</span>}
              </div>
              <div class="mt-10">
                <input
                  type="submit"
                  value="Login"
                  class="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
