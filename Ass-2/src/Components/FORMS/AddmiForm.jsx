import React, { useState } from "react";

export default function AddmiForm() {

   const [studentdata, setStudentData] = useState(
      { student : {
         stFN: "Rohit",
         stMN: "Rajesh",
         stLN: "Soni",
         stDOB: "#####",
         stPlaceOfBirth: "Jhalawar",
         stFLang: "Hindi",
         Address: {
            stCity: "Jhalawar",
            stState: "Rajasthan",
            stCountry: "India",
            stPinCode: 326001
         }
      }
      }
   )

   // const [result, setResult] = useState(studentdata)
   


   const handleForm = (e) => {
      e.preventDefault()
      // setResult(studentdata)
      console.log(studentdata.student.stFN)
      console.log(studentdata.student.stMN)
      console.log(studentdata.student.stLN)
      console.log(studentdata.student.stDOB)
      console.log(studentdata.student.stPlaceOfBirth)
      console.log(studentdata.student.stFLang)
      return true
    }

  return (
      <>
     <div className="container"> 
      <form onSubmit={handleForm}>
        
        <div>
        <h2>Student Details</h2>
                 <input style={{ margin: "4px" }} type="text" onChange={
                    (e) => {
                       setStudentData({ ...studentdata, student: { ...studentdata.student, stFN: e.target.value } })
                    }} name="SFN" placeholder="FirstName" />
                 
                 <input style={{ margin: "4px" }} type="text" name="SMN" placeholder="MiddleName"
                    onChange={(e) => {
                    setStudentData({...studentdata,student:{...studentdata.student,stMN: e.target.value}})
                 }}
                 />
                 <input style={{ margin: "4px" }} type="text" name="SLN" placeholder="LastName"
                  onChange={(e) => {
                     setStudentData({...studentdata,student:{...studentdata.student,stLN: e.target.value}})
                  }}
                 />
    
        </div>
  
        <div>
         <input style={ {margin: "4px"} } type="date" placeholder="Date Of Birth" 
         onChange={
                    (e) => {
                       setStudentData({ ...studentdata, student: { ...studentdata.student, stDOB: e.target.value } })
                    }}
         /> 
        </div>
        <div>
         <input style={ {margin: "4px"} } type="text" placeholder="Place Of Birth" 
         onChange={
                    (e) => {
                       setStudentData({ ...studentdata, student: { ...studentdata.student, stPlaceOfBirth: e.target.value } })
                    }}
         />
        </div>
        <div>
          <input style={ {margin: "4px"} } type="text" placeholder="FLanguage" 
          onChange={
                    (e) => {
                       setStudentData({ ...studentdata, student: { ...studentdata.student, stFLang: e.target.value } })
                    }}
          />
        </div>
        <div>
           <input style={ {margin: "4px"} } type="text" placeholder="City" />
           <input style={ {margin: "4px"} } type="text" placeholder="State" />
           <input style={ {margin: "4px"} } type="text" placeholder="Country" />
           <input style={ {margin: "4px"} } type="number" placeholder="PIN" />
        </div>
          <button type="submit" style={{ margin: "4px",padding:"4px"} }>SUBMIT</button>
          <button style={ {margin: "4px",padding:"4px"} } type="rest">REST</button>                              
          </form>
          </div>
    </>
  );
}




//  {/* Father Details */}
   
//  <div>
//  <h2>Father Details</h2>
// <input style={ {margin: "4px"} } type="text" placeholder="FirstName" />
// <input style={ {margin: "4px"} } type="text" placeholder="MiddleName" />
// <input style={ {margin: "4px"} } type="text" placeholder="LastName" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="email" placeholder="Email" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="text" placeholder="Education" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="text" placeholder="Profession" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="text" placeholder="Designation" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="number" placeholder="Phone Number" />

// </div>
// {/* Mother Details */}

// <div>
//  <h2>Mother Details</h2>
// <input style={ {margin: "4px"} } type="text" placeholder="FirstName" />
// <input style={ {margin: "4px"} } type="text" placeholder="MiddleName" />
// <input style={ {margin: "4px"} } type="text" placeholder="LastName" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="email" placeholder="Email" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="text" placeholder="Education" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="text" placeholder="Profession" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="text" placeholder="Designation" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="number" placeholder="Phone Number" />

// </div>
// {/* Emergency Contact */}

// <div>
//  <h2>Emergency Contact</h2>
// <input style={ {margin: "4px"} } type="text" placeholder="Designation" />

// </div>

// <div>
// <input style={ {margin: "4px"} } type="number" placeholder="Phone Number" />

// </div>