import React from 'react'

export default function MothersDetailsForm() {
  return (
      <>
          <div className="p-8 flex items-center justify-center ">
        <div>
          <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Enter Your Mother Details
          </h1>
          <form action="#" className="grid grid-rows-5 gap-6">
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
                  name="motherFirstName"
                  id="motherFirstName"
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
                  name="motherMiddleName"
                  id="motherMiddleName"
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
                  name="motherLastName"
                  id="motherLastName"
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
                  for="motherEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="motherEmail"
                  id="motherEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  for="mother Education Qualification"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Education Qualification
                </label>
                <input
                  type="text"
                  name="motherEducationQualification"
                  id="motherEducationQualification"
                  placeholder="Education Qualification"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/* Email & Education Qualification ROW */}
            {/* Profession ROW */}
            <div>
              <label
                for="Mother Profession"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Mother Profession
              </label>
              <input
                type="text"
                name="motherProfession"
                id="motherProfession"
                placeholder="Mother Profession"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* Profession ROW */}
            {/* Designation & Phone ROW */}

            {/* <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Address :</h1> */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="Mother Designation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Designation
                </label>
                <input
                  type="text"
                  name="motherDesignation"
                  id="motherDesignation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Designation"
                />
              </div>
              <div>
                <label
                  for="mother Phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="motherPhoneNo"
                  id="motherPhoneNo"
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
          </form>
        </div>
      </div>
      </>
  )
}
