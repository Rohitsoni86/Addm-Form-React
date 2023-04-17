import React, { useState } from "react";


export default function StudentDatilsForm() {

    const [studentdata, setStudentData] = useState({ Student: {} });

    const updateStudentData = (e) => {
        setStudentData({
          ...studentdata,
          Student: { ...studentdata.Student, [e.target.name]: e.target.value },
        });
      };




    return (
    <>
      <div className="p-8 flex items-center justify-center">
        <div>
        <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Enter Your Details</h1>
        < div action="#" className="grid grid-rows-5 gap-6">
            {/* NAME ROW */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  for="FirstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="stFirstName"
                  id="FirstName"
                  onChange={updateStudentData}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  for="Middle Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  name="stMiddleName"
                  id="MiddleName"
                  onChange={updateStudentData}
                  placeholder="Middle Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  for="Last Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="stLastName"
                  id="LastName"
                  onChange={updateStudentData}
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
                      {/* NAME ROW */}
                      {/* DOB ROW */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="stDOB"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Date of Birth
                  </label>
                  <input
                    type="date"
                    name="stDOB"
                    id="stDOB"
                    onChange={updateStudentData}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Date Of Birth"
                  />
                </div>
                <div>
                  <label
                    for="Place Of Birth"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Place Of Birth
                  </label>
                  <input
                    type="text"
                    name="stPlaceOfBirth"
                    id="stPlaceOfBirth"
                    onChange={updateStudentData}
                    placeholder="Middle Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
                      {/* DOB ROW */}
                      {/* Language ROW */}
              <div>
                <label
                  for="stFLanguage"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Language
                </label>
                <input
                  type="text"
                  name="stFLanguage"
                  id="stFLanguage"
                  onChange={updateStudentData}
                  placeholder="Middle Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
                      {/* Language ROW */}
                      {/* Address ROW */}
         
              {/* <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Address :</h1> */}
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label
                    for="stCity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="stCity"
                    id="stCity"
                    onChange={updateStudentData}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label
                    for="stState"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="stState"
                    id="stState"
                    onChange={updateStudentData}
                    placeholder="State"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="stCountry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="stCountry"
                    id="stCountry"
                    onChange={updateStudentData}
                    placeholder="Country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="stCityPincode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="stCityPincode"
                    id="stCityPincode"
                    onChange={updateStudentData}
                    placeholder="Pin Code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
                      {/* Address ROW */}
          </ div>
        </div>
      </div>
    </>
  );
}