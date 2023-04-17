import React from "react";

export default function ParentComponent({ Parent }) {
  return (
    <>
      <div>
        <h2>Father Details</h2>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="fatherFN"
          onChange={updateFatherDetails}
          placeholder="Full Name"
        />
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
    </>
  );
}
