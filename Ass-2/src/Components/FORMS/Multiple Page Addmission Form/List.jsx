import React from 'react'

export default function List(props) {
    console.log(props)
  return (
      <>
          {/* <li>{props.data.Student.stFirstName}</li> */}
      
      
      </>    
  )
}






// ******************************************************************STUDENT DETAILS FORM******************************************************************
// const StudentDatilsForm = () => {

//     const [studentdata, setStudentData] = useState({ Student: {} });
  
//     // const [updatedDataStudent,setupdatedDataStudent] = useState(studentdata)
  
//     const updateStudentData = (e) => {
//         setStudentData({
//           ...studentdata,
//           Student: { ...studentdata.Student, [e.target.name]: e.target.value },
//         });
//       };
  
//       const handleForm = (e) => {
//         e.preventDefault();
//         // console.log(studentdata);
//         // console.log(fatherdetails);
//         // console.log(motherdetails);
//         // console.log(emergDetails);
//         // e.target.reset();
//         // return fa;
//       };
  
    
//       // const parentToChild = () => {
//       //   setData("This is data from Parent Component to the Child Component.");
//       // }
  
//     return (
//       <>
        
//       <div className="p-8 flex items-center justify-center">
//         <div>
//         <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Enter Your Details</h1>
//         <form action="#" onSubmit={handleForm} className="grid grid-rows-5 gap-6">
//             {/* NAME ROW */}
//             <div className="grid grid-cols-3 gap-4">
//               <div>
//                 <label
//                   for="FirstName"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="stFirstName"
//                   id="FirstName"
//                   onChange={updateStudentData}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="First Name"
//                 />
//               </div>
//               <div>
//                 <label
//                   for="Middle Name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Middle Name
//                 </label>
//                 <input
//                   type="text"
//                   name="stMiddleName"
//                   id="MiddleName"
//                   onChange={updateStudentData}
//                   placeholder="Middle Name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   for="Last Name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="stLastName"
//                   id="LastName"
//                   onChange={updateStudentData}
//                   placeholder="Last Name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
//             </div>
//                       {/* NAME ROW */}
//                       {/* DOB ROW */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     for="stDOB"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                    Date of Birth
//                   </label>
//                   <input
//                     type="date"
//                     name="stDOB"
//                     id="stDOB"
//                     onChange={updateStudentData}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Date Of Birth"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="Place Of Birth"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Place Of Birth
//                   </label>
//                   <input
//                     type="text"
//                     name="stPlaceOfBirth"
//                     id="stPlaceOfBirth"
//                     onChange={updateStudentData}
//                     placeholder="Middle Name"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//                       {/* DOB ROW */}
//                       {/* Language ROW */}
//               <div>
//                 <label
//                   for="stFLanguage"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   First Language
//                 </label>
//                 <input
//                   type="text"
//                   name="stFLanguage"
//                   id="stFLanguage"
//                   onChange={updateStudentData}
//                   placeholder="Middle Name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
//                       {/* Language ROW */}
//                       {/* Address ROW */}
         
//               {/* <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Address :</h1> */}
//               <div className="grid grid-cols-4 gap-4">
//                 <div>
//                   <label
//                     for="stCity"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     name="stCity"
//                     id="stCity"
//                     onChange={updateStudentData}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="City"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="stState"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     name="stState"
//                     id="stState"
//                     onChange={updateStudentData}
//                     placeholder="State"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="stCountry"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="stCountry"
//                     id="stCountry"
//                     onChange={updateStudentData}
//                     placeholder="Country"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="stCityPincode"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Pin Code
//                   </label>
//                   <input
//                     type="text"
//                     name="stCityPincode"
//                     id="stCityPincode"
//                     onChange={updateStudentData}
//                     placeholder="Pin Code"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//                       {/* Address ROW */}
//                       {/* BUTTON ROW */}
//             <div id="buttonContainer"> 
//                           <button type="submit"  className="w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>      
//                       </div>  
//          {/* BUTTON ROW */}
//           </form>
//           </div>
//           {/* <div>
//           <List data={studentdata}/>
//           </div> */}
//       </div>
//     </>
//   );
//   }
  
  
//   // ******************************************************************STUDENT DETAILS FORM******************************************************************
  
//   // ******************************************************************FATHER DETAILS FORM******************************************************************
  
//   const FathersDetailsForm = () => {
  
//     const [fatherdetails, setFatherDetails] = useState({ Father: {} });
  
//     const updateFatherDetails = (e) => {
//       setFatherDetails({
//         ...fatherdetails,
//         Father: { ...fatherdetails.Father, [e.target.name]: e.target.value },
//       });
//     };
  
      
  
//     const handleForm = (e) => {
//       e.preventDefault();
//       // console.log(studentdata);
//       console.log(fatherdetails);
//       // console.log(motherdetails);
//       // console.log(emergDetails);
//       // e.target.reset();
//       // return fa;
//     };
  
//     return (
//       <>
//         <div className="p-8 flex items-center justify-center ">
//           <div>
//             <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Enter Your Father Details
//             </h1>
//             <form action="#" className="grid grid-rows-5 gap-6" onSubmit={handleForm}>
//               {/* NAME ROW */}
//               <div className="grid grid-cols-3 gap-4">
//                 <div>
//                   <label
//                     for="FirstName"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fatherFirstName"
//                     id="fatherFirstName"
//                     onChange={updateFatherDetails}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="First Name"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="Middle Name"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Middle Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fatherMiddleName"
//                     id="fatherMiddleName"
//                     onChange={updateFatherDetails}
//                     placeholder="Middle Name"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="Last Name"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fatherLastName"
//                     id="fatherLastName"
//                     onChange={updateFatherDetails}
//                     placeholder="Last Name"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               {/* NAME ROW */}
//               {/* Email & Education Qualification ROW */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     for="fatherEmail"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="fatherEmail"
//                     id="fatherEmail"
//                     onChange={updateFatherDetails}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="Father Education Qualification"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Education Qualification
//                   </label>
//                   <input
//                     type="text"
//                     name="fatherEducationQualification"
//                     id="fatherEducationQualification"
//                     onChange={updateFatherDetails}
//                     placeholder="Education Qualification"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               {/* Email & Education Qualification ROW */}
//               {/* Profession ROW */}
//               <div>
//                 <label
//                   for="Father Profession"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                  Father Profession
//                 </label>
//                 <input
//                   type="text"
//                   name="fatherProfession"
//                   id="fatherProfession"
//                   onChange={updateFatherDetails}
//                   placeholder="Father Profession"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
//               {/* Profession ROW */}
//               {/* Designation & Phone ROW */}
  
//               {/* <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Address :</h1> */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     for="father Designation"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Designation
//                   </label>
//                   <input
//                     type="text"
//                     name="fatherDesignation"
//                     id="fatherDesignation"
//                     onChange={updateFatherDetails}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Designation"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="father Phone"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Phone
//                   </label>
//                   <input
//                     type="text"
//                     name="fatherPhoneNo"
//                     id="fatherPhoneNo"
//                     onChange={updateFatherDetails}
//                     placeholder="Phone"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
               
                
//               </div>
//               {/* Designation & Phone ROW */}
//               {/* BUTTON ROW */}
//               <div id="buttonContainer">
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Next
//                 </button>
//               </div>
//               {/* BUTTON ROW */}
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }
  
  
//   // ******************************************************************FATHER DETAILS FORM******************************************************************
  
  
  
//   // ******************************************************************MOTHER DETAILS FORM******************************************************************
  
  
//   const MothersDetailsForm = () => {
  
  
//     const [motherdetails, setMotherDetails] = useState({ Mother: {} });
  
  
//     const updateMotherDetails = (e) => {
//       setMotherDetails({
//         ...motherdetails,
//         Mother: { ...motherdetails.Mother, [e.target.name]: e.target.value },
//       });
//     };
  
  
//     const handleForm = (e) => {
//       e.preventDefault();
//       // console.log(studentdata);
//       // console.log(fatherdetails);
//       console.log(motherdetails);
//       // console.log(emergDetails);
//       // e.target.reset();
//       // return fa;
//     };
  
  
//     return (
//         <>
//             <div className="p-8 flex items-center justify-center ">
//           <div>
//             <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Enter Your Mother Details
//             </h1>
//             <form action="#" className="grid grid-rows-5 gap-6" onSubmit={handleForm}>
//               {/* NAME ROW */}
//               <div className="grid grid-cols-3 gap-4">
//                 <div>
//                   <label
//                     for="FirstName"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="motherFirstName"
//                     id="motherFirstName"
//                     onChange={updateMotherDetails}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="First Name"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="Middle Name"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Middle Name
//                   </label>
//                   <input
//                     type="text"
//                     name="motherMiddleName"
//                     id="motherMiddleName"
//                     onChange={updateMotherDetails}
//                     placeholder="Middle Name"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="Last Name"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="motherLastName"
//                     id="motherLastName"
//                     onChange={updateMotherDetails}
//                     placeholder="Last Name"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               {/* NAME ROW */}
//               {/* Email & Education Qualification ROW */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     for="motherEmail"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="motherEmail"
//                     id="motherEmail"
//                     onChange={updateMotherDetails}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="mother Education Qualification"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Education Qualification
//                   </label>
//                   <input
//                     type="text"
//                     name="motherEducationQualification"
//                     id="motherEducationQualification"
//                     onChange={updateMotherDetails}
//                     placeholder="Education Qualification"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               {/* Email & Education Qualification ROW */}
//               {/* Profession ROW */}
//               <div>
//                 <label
//                   for="Mother Profession"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                  Mother Profession
//                 </label>
//                 <input
//                   type="text"
//                   name="motherProfession"
//                   id="motherProfession"
//                   onChange={updateMotherDetails}
//                   placeholder="Mother Profession"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//               </div>
//               {/* Profession ROW */}
//               {/* Designation & Phone ROW */}
  
//               {/* <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Address :</h1> */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     for="Mother Designation"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Designation
//                   </label>
//                   <input
//                     type="text"
//                     name="motherDesignation"
//                     id="motherDesignation"
//                     onChange={updateMotherDetails}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Designation"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="mother Phone"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Phone
//                   </label>
//                   <input
//                     type="text"
//                     name="motherPhoneNo"
//                     id="motherPhoneNo"
//                     onChange={updateMotherDetails}
//                     placeholder="Phone"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
               
                
//               </div>
//               {/* Designation & Phone ROW */}
//               {/* BUTTON ROW */}
//               <div id="buttonContainer">
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Next
//                 </button>
//               </div>
//               {/* BUTTON ROW */}
//             </form>
//           </div>
//         </div>
  
//         </>
//     )
//   }
  
  
//   // ******************************************************************MOTHER DETAILS FORM******************************************************************
  
  
  
//   // ******************************************************************EMERGEN DETAILS FORM******************************************************************
  
//   const EmergencyContact = () => {
//     return (
//         <>
//           <div className="p-8 flex items-center justify-center">
//           <div>
//             <h1 className="my-8 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//              Any Emergency Contact ?
//             </h1>
//               <form action="#" className="grid grid-rows-3 gap-3">
//               <div className="grid grid-row-2 gap-3">
//                 <div>
//                   <label
//                     for="Relation"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-4 "
//                   >
//                    Relation
//                   </label>
//                   <input
//                     type="text"
//                     name="EmergRelation"
//                     id="EmergRelation"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Relation"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="Emerg Contact"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-4 "
//                   >
//                    Phone/Contact
//                   </label>
//                   <input
//                     type="text"
//                     name="EmergContact"
//                     id="EmergContact"
//                     placeholder="Emergency Contact"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               {/* BUTTON ROW */}
//               <div id="buttonContainer">
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Submit Data
//                 </button>
//               </div>
//               {/* BUTTON ROW */}
  
//             </form>
//             </div>
//             </div>
  
//         </>
//     )
//   }
  
  
  
//   // ******************************************************************EMERGEN DETAILS FORM******************************************************************