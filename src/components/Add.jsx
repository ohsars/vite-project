import React, { useState } from "react";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age,
      c = address;

    Employees.push({ id: uniqueId, Name: a, Age: b, Address: c });

    history("/");
  };

  return (
    <>
      <form>
        <div className="center mx-16 pt-10 pb-12">
          <div className="container flex justify-evenly w-auto space-x-1 mb-2 m-auto text-sm">
            <input
              type="text"
              name="Name"
              id="formName"
              autoComplete="MarvelUs"
              className="block border-2 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded mb-0 w-1/2"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              name="Age"
              id="formAge"
              autoComplete="24"
              className="block border-2 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded w-1/2"
              placeholder="Enter Age"
              required
              maxLength={1}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <textarea
            id="formAddress"
            name="address"
            rows={2}
            className="container w-full flex-2 justify-center mx-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 pl-1.5 flex m-auto text-sm"
            defaultValue={''}
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          /> <br />

           <button 
           className="bg-green-500 text-white text-sm p-1 w-full mx-auto rounded" onClick={(e) => handleSubmit(e)}>Create</button>
        </div>
      </form>
    </>
  );
}

export default Add;
