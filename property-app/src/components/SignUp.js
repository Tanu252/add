import axios from 'axios'
import { Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import React from 'react'
import { useForm } from "react-hook-form";
export default function SignUp() {
    const {register, handleSubmit, watch, formState: { errors }, } = useForm();
    async function fetchData(data) {
      const Result = await axios.post('http://localhost:3000/posts', data)
     
  }
  const [fetchedData, setFetchedData] = useState("")
    const onSubmit = (data,e) =>{ console.log(data);
      e.preventDefault();
      setFetchedData(data);
     
    fetchData(data);
  }
    // =================================================
    // useEffect(() => {
    //   console.log("helo");
        
    //     fetchData();
    //     console.log("submit");
    //   },[fetchedData]);
  return (
    <>
      <div> 
    <div class="container mx-auto p-2">
      <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
        <div class="text-center mb-8">
          <h1 class=" text-2xl font-bold">Sign UP To Residence</h1>
        </div>
        {/* <form  onSubmit={(e) => signUpData(e)}> */}
        <form  onSubmit={handleSubmit(onSubmit)} >
          <div class="mt-5">
            <label for="username">Username</label>
            <input {...register("username", { required: "This field is required" ,pattern: {value:/^[A-Za-z]+$/i,message: 'Please Use a mix of letters (uppercase and lowercase) note:( numbers, and symbols not allowed)'}})}


              type="text"
              id="username"
              class="block w-full p-2 border rounded border-gray-500"
            />
            <p>{errors.username?.message}</p>
            {/* {errors.username && <span>This field is required</span>} */}
          </div>
          <div class="mt-5">
            <label for="Email">Email</label>
            <input {...register("Email", { required: "email is requerd" })}

              type="email"
              id="email"
              class="block w-full p-2 border rounded border-gray-500"
            />
            {errors.Email?.type === 'required' && "email is required"}
         
          </div>
         
          <div class="mt-5">
            <label for="password">Password</label>
            <input {...register("Password", { required: "Password is requierd" ,minLength:{value:8,message: 'Password length should be at least 4 characters'}})}

              type="password"
              id="password"
              class="block w-full p-2 border rounded border-gray-500"
            />
            <p>{errors.Password?.message}</p>
            
          </div>
          <div class="mt-10">
            <input 

              type="submit"
              value="Login"
              class="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
            />
          </div>
        </form>
        <div className="mt-4 text-center">
                <p className="text-sm">Already have an account <Link to='/login' href="#"
                    className="text-blue-600 hover:underline"> Login</Link></p>
              </div>
      </div>
    </div></div>
    </>
  )
}

