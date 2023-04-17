import React, { useState } from "react";

export default function ProjectStudentRegistrationForm() {
  const [studentdata, setStudentData] = useState({ Student: {} });

  const [fatherdetails, setFatherDetails] = useState({ Father: {} });

  const [motherdetails, setMotherDetails] = useState({ Mother: {} });
    
  const [emergDetails, setEmergDetails] = useState({ EmergContacts: {} });

  const updateStudentData = (e) => {
    setStudentData({
      ...studentdata,
      Student: { ...studentdata.Student, [e.target.name]: e.target.value },
    });
  };

  const updateFatherDetails = (e) => {
    setFatherDetails({
      ...fatherdetails,
      Father: { ...fatherdetails.Father, [e.target.name]: e.target.value },
    });
  };

  const updateMotherDetails = (e) => {
    setMotherDetails({
      ...motherdetails,
      Mother: { ...motherdetails.Mother, [e.target.name]: e.target.value },
    });
  };
    
  const updateEmergDetails = (e) => {
    setEmergDetails({
      ...emergDetails,
      EmergContacts: { ...emergDetails.EmergContacts, [e.target.name]: e.target.value },
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(studentdata);
    console.log(fatherdetails);
    console.log(motherdetails);
    console.log(emergDetails);
    e.target.reset();
    return true;
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleForm}>
          <div>
            <h2>Student Details</h2>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stFN"
              placeholder="FirstName"
              onChange={updateStudentData}
            />

            <input
              style={{ margin: "4px" }}
              type="text"
              name="stMN"
              placeholder="MiddleName"
              onChange={updateStudentData}
            />
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stLN"
              placeholder="LastName"
              onChange={updateStudentData}
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="date"
              name="stDOB"
              placeholder="Date Of Birth"
              onChange={updateStudentData}
            />
          </div>
          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stPlaceOfBirth"
              placeholder="Place Of Birth"
              onChange={updateStudentData}
            />
          </div>
          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stFLanguage"
              placeholder="FLanguage"
              onChange={updateStudentData}
            />
          </div>
          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stCity"
              placeholder="City"
              onChange={updateStudentData}
            />
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stState"
              placeholder="State"
              onChange={updateStudentData}
            />
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stCountry"
              placeholder="Country"
              onChange={updateStudentData}
            />
            <input
              style={{ margin: "4px" }}
              type="number"
              name="stCityPincode"
              placeholder="PIN"
              onChange={updateStudentData}
            />
          </div>

          {/* Father Details */}

          <div>
            <h2>Father Details</h2>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="fatherFN"
              onChange={updateFatherDetails}
              placeholder="FirstName"
            />
            <input
              style={{ margin: "4px" }}
              type="text"
              name="fatherMN"
              onChange={updateFatherDetails}
              placeholder="MiddleName"
            />
            <input
              style={{ margin: "4px" }}
              type="text"
              name="fatherLN"
              onChange={updateFatherDetails}
              placeholder="LastName"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="email"
              name="fatherEmail"
              onChange={updateFatherDetails}
              placeholder="Email"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="fatherEducation"
              onChange={updateFatherDetails}
              placeholder="Education"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="fatherProfession"
              onChange={updateFatherDetails}
              placeholder="Profession"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="fatherDesignation"
              onChange={updateFatherDetails}
              placeholder="Designation"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="number"
              name="fatherPhoneN"
              onChange={updateFatherDetails}
              placeholder="Phone Number"
            />
          </div>

          {/* Mother Details */}

          <div>
            <h2>Mother Details</h2>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="motherFN"
              onChange={updateMotherDetails}
              placeholder="FirstName"
            />
            <input
              style={{ margin: "4px" }}
              type="text"
              name="motherMN"
              onChange={updateMotherDetails}
              placeholder="MiddleName"
            />
            <input
              style={{ margin: "4px" }}
              type="text"
              name="motherLN"
              onChange={updateMotherDetails}
              placeholder="LastName"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="email"
              name="motherEmail"
              onChange={updateMotherDetails}
              placeholder="Email"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="motherEducation"
              onChange={updateMotherDetails}
              placeholder="Education"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="motherProfession"
              onChange={updateMotherDetails}
              placeholder="Profession"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="motherDesig"
              onChange={updateMotherDetails}
              placeholder="Designation"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="number"
              name="motherPhoneN"
              onChange={updateMotherDetails}
              placeholder="Phone Number"
            />
          </div>

          {/* Emergency Contact */}

          <div>
            <h2>Emergency Contact</h2>
            <input
              style={{ margin: "4px" }}
              type="text"
              name="stEmergCRelation"
              onChange={updateEmergDetails}
              placeholder="Relation"
            />
          </div>

          <div>
            <input
              style={{ margin: "4px" }}
              type="number"
              name="stEmergCPhoneNumber"
              onChange={updateEmergDetails}
              placeholder="PhoneNumber"
            />
          </div>

          <button type="submit" style={{ margin: "4px", padding: "4px" }}>
            SUBMIT
          </button>
          <button style={{ margin: "4px", padding: "4px" }} type="rest">
            REST
          </button>
        </form>
      </div>
    </>
  );
}
