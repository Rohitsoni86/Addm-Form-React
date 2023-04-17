import React from "react";
import "./Tablestyle.css";
import TableRow from "./TableRow";

export default function DataTable({ subData }) {
  let studentDetails = subData[0];
  let fatherDetails = subData[1];
  let motherDetails = subData[2];
  let emergencyDetails = subData[3];

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Student Details</th>
              <th>Father Details</th>
              <th>Mother Details</th>
              <th>Address</th>
              <th>Emergency Contact </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>FullName: </strong>
                  {`${studentDetails.stFN} ${studentDetails.stMN} + ${studentDetails.stLN}`}
                </p>
                <p>
                  <strong>DOB:</strong> {`${studentDetails.stDOB}`}
                </p>
                <p>
                  <strong>Place of Birth:</strong>{" "}
                  {`${studentDetails.stPlaceOfBirth}`}
                </p>
                <p>
                  <strong>Language:</strong> {`${studentDetails.stFLanguage}`}
                </p>
              </td>
              <td>
                <p>
                  <strong>FullName: </strong>
                  {`${fatherDetails.fatherFN}`}
                </p>
                <p>
                  <strong>Email:</strong>
                  {`${fatherDetails.fatherEmail}`}
                </p>
                <p>
                  <strong>Education Qualification: </strong>
                  {`${fatherDetails.fatherEducation}`}
                </p>
                <p>
                  <strong>Profession: </strong>
                  {`${fatherDetails.fatherProfession}`}
                </p>
                <p>
                  <strong>Designation:</strong>
                  {`${fatherDetails.fatherDesignation}`}
                </p>
                <p>
                  <strong>Phone:</strong>
                  {`${fatherDetails.fatherPhoneN}`}
                </p>
              </td>
              <td>
                <p>
                  <strong>FullName: </strong>
                  {`${motherDetails.motherFN}`}
                </p>
                <p>
                  <strong>Email: </strong>
                  {`${motherDetails.motherEmail}`}
                </p>
                <p>
                  <strong>Education Qualification:</strong>
                  {`${motherDetails.motherEducation}`}
                </p>
                <p>
                  <strong>Profession:</strong>
                  {`${motherDetails.motherProfession}`}
                </p>
                <p>
                  <strong>Designation:</strong>
                  {`${motherDetails.motherDesignation}`}
                </p>
                <p>
                  <strong>Phone: </strong>
                  {`${motherDetails.motherPhoneN}`}
                </p>
              </td>
              <td>
                <p>
                  <strong>City: </strong>
                  {`${studentDetails.stCity}`}
                </p>
                <p>
                  <strong>State: </strong>
                  {`${studentDetails.stState}`}
                </p>
                <p>
                  <strong>Country:</strong> {`${studentDetails.stCountry}`}
                </p>
                <p>
                  <strong>Pin: </strong>
                  {`${studentDetails.stCityPincode}`}
                </p>
              </td>
              <td>
                <p>
                  <strong>
                    Relation :{`${emergencyDetails.stEmergCRelation}`}
                  </strong>
                </p>
                <p>
                  <strong>
                    Number:{`${emergencyDetails.stEmergCPhoneNumber}`}
                  </strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
