import React from "react";

export default function Father({ fatherUpdatesDetails }) {
  return (
    <>
      <div>
        <h2>Father Details</h2>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="fatherFN"
          onChange={fatherUpdatesDetails}
          placeholder="Full Name"
        />
        <input
          style={{ margin: "4px" }}
          type="email"
          name="fatherEmail"
          onChange={fatherUpdatesDetails}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="fatherEducation"
          onChange={fatherUpdatesDetails}
          placeholder="Education"
        />
      </div>

      <div>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="fatherProfession"
          onChange={fatherUpdatesDetails}
          placeholder="Profession"
        />
      </div>

      <div>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="fatherDesignation"
          onChange={fatherUpdatesDetails}
          placeholder="Designation"
        />
      </div>

      <div>
        <input
          style={{ margin: "4px" }}
          type="number"
          name="fatherPhoneN"
          onChange={fatherUpdatesDetails}
          placeholder="Phone Number"
        />
      </div>
    </>
  );
}
