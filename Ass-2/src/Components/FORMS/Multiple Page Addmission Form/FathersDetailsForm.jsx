import React from "react";

export default function FathersDetailsForm() {
  return (
    <>
      <div className="p-8 flex items-center justify-center ">
        <div>
          <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Enter Your Father Details
          </h1>
          < div action="#" className="grid grid-rows-4 gap-6">
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
                  name="fatherFirstName"
                  id="fatherFirstName"
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
                  name="fatherMiddleName"
                  id="fatherMiddleName"
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
                  name="fatherLastName"
                  id="fatherLastName"
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/* NAME ROW */}
            {/* Email & Education Qualification ROW */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="fatherEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="fatherEmail"
                  id="fatherEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  for="Father Education Qualification"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Education Qualification
                </label>
                <input
                  type="text"
                  name="fatherEducationQualification"
                  id="fatherEducationQualification"
                  placeholder="Education Qualification"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/* Email & Education Qualification ROW */}
            {/* Profession ROW */}
            <div>
              <label
                for="Father Profession"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Father Profession
              </label>
              <input
                type="text"
                name="fatherProfession"
                id="fatherProfession"
                placeholder="Father Profession"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* Profession ROW */}
            {/* Designation & Phone ROW */}

            {/* <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Address :</h1> */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="father Designation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Designation
                </label>
                <input
                  type="text"
                  name="fatherDesignation"
                  id="fatherDesignation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Designation"
                />
              </div>
              <div>
                <label
                  for="father Phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="fatherPhoneNo"
                  id="fatherPhoneNo"
                  placeholder="Phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
             
              
            </div>
            {/* Designation & Phone ROW */}
            {/* BUTTON ROW */}
            <div id="buttonContainer">
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Next
              </button>
            </div>
            {/* BUTTON ROW */}
          </ div>
        </div>
      </div>
    </>
  );
}
