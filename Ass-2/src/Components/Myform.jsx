import React, { useState } from "react";
// import ParentComponent from "./FORMS/ParentComponent";
import EMGcontact from "./EMGcontact";
import Father from "./FORMS/Father";
import Mother from "./FORMS/Mother";
import DataTable from "./FORMS/DataTable";

export default function Myform() {
  const [studentdata, setStudentData] = useState({ Student: {} });

  const [fatherdetails, setFatherDetails] = useState({ Father: {} });

  const [motherdetails, setMotherDetails] = useState({ Mother: {} });

  const [emergDetails, setEmergDetails] = useState({ EmergContacts: {} });

  const [submitteddata, setSubmittedData] = useState([]);

  const [tablevariable, setTableVariable] = useState(false);

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
      EmergContacts: {
        ...emergDetails.EmergContacts,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(studentdata);
    // console.log(fatherdetails);
    // console.log(motherdetails);
    // console.log(emergDetails);

    // showTable = true;
    setSubmittedData([
      { ...studentdata.Student },
      { ...fatherdetails.Father },
      { ...motherdetails.Mother },
      { ...emergDetails.EmergContacts },
    ]);
    setTableVariable(true);
    e.target.reset();
    return true;
  };

  return (
    <>
      <div className="container formContainer">
        <form action="#" onSubmit={submitForm}>
          <h2>Student Details</h2>

          {/* STUDENT DETAILS FORM */}

          <div className="studentForm">
            <div>
              <label
                style={{ margin: "4px" }}
                htmlFor="first_name"
                className="form-label"
              >
                First Name
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stFN"
                onChange={updateStudentData}
                placeholder="FirstName"
              />
              <label
                style={{ margin: "4px" }}
                htmlFor="middle_name"
                className="form-label"
              >
                Middle Name
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stMN"
                onChange={updateStudentData}
                placeholder="MiddleName"
              />

              <label
                style={{ margin: "4px" }}
                htmlFor="last_name"
                className="form-label"
              >
                Last Name
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stLN"
                onChange={updateStudentData}
                placeholder="LastName"
              />
            </div>

            <div>
              <label style={{ margin: "4px" }} htmlFor="DOB">
                Date of Brith
              </label>
              <input
                style={{ margin: "4px" }}
                type="date"
                name="stDOB"
                onChange={updateStudentData}
                placeholder="Date Of Birth"
              />
            </div>
            <div>
              <label style={{ margin: "4px" }} htmlFor="stPlaceOfBirth">
                Place of Brith
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stPlaceOfBirth"
                onChange={updateStudentData}
                placeholder="Place Of Birth"
              />
            </div>
            <div>
              <label style={{ margin: "4px" }} htmlFor="stFLanguage">
                FLanguage
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stFLanguage"
                onChange={updateStudentData}
                placeholder="FLanguage"
              />
            </div>
            <div>
              <label style={{ margin: "4px" }} htmlFor="city">
                City
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stCity"
                onChange={updateStudentData}
                placeholder="City"
              />
              <label style={{ margin: "4px" }} htmlFor="state">
                State
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stState"
                onChange={updateStudentData}
                placeholder="State"
              />
              <label style={{ margin: "4px" }} htmlFor="country">
                Country
              </label>
              <input
                style={{ margin: "4px" }}
                type="text"
                name="stCountry"
                onChange={updateStudentData}
                placeholder="Country"
              />
              <label style={{ margin: "4px" }} htmlFor="pin">
                Pin
              </label>
              <input
                style={{ margin: "4px" }}
                type="number"
                name="stCityPincode"
                onChange={updateStudentData}
                placeholder="PIN"
              />
            </div>
          </div>

          {/* STUDENT DETAILS FORM */}

          {/* PARENT DETAILS FORM */}

          <div className="ParentsFormrow d-flex flex-row ">
            {/* FATHER DETAILS FORM */}
            <div className="parentContainerF">
              <Father fatherUpdatesDetails={updateFatherDetails} />
            </div>

            {/* FATHER DETAILS FORM */}
            {/* MOTHER DETAILS FORM */}
            <div className="parentContainerM">
              <Mother motherDetailsUpdate={updateMotherDetails} />
            </div>

            {/* MOTHER DETAILS FORM */}
          </div>

          {/* PARENT DETAILS FORM */}

          {/* Emerg Contact DETAILS FORM */}
          <EMGcontact updateEmgDetails={updateEmergDetails} />
          {/* Emerg Contact DETAILS FORM */}
          <div className="row">
            <div className="col-12">
              <button className="w-100 btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="tableContainer">
        {tablevariable ? <DataTable subData={submitteddata} /> : ""}
      </div>
    </>
  );
}
