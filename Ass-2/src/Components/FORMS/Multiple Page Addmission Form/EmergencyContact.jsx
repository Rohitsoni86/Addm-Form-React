import React from 'react'

export default function EmergencyContact() {
  return (
      <>
        <div className="p-8 flex items-center justify-center">
        <div>
          <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
           Any Emergency Contact ?
          </h1>
            <div action="#" className="grid grid-rows-3 gap-3">
            <div className="grid grid-row-2 gap-3">
              <div>
                <label
                  for="Relation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-4 "
                >
                 Relation
                </label>
                <input
                  type="text"
                  name="EmergRelation"
                  id="EmergRelation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Relation"
                />
              </div>
              <div>
                <label
                  for="Emerg Contact"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-4 "
                >
                 Phone/Contact
                </label>
                <input
                  type="text"
                  name="EmergContact"
                  id="EmergContact"
                  placeholder="Emergency Contact"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/* BUTTON ROW */}
            <div id="buttonContainer">
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit Data
              </button>
            </div>
            {/* BUTTON ROW */}

          </div>
          </div>
          </div>

      </>
  )
}
