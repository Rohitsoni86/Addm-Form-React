import React from "react";

export default function Mother({ motherDetailsUpdate }) {
  return (
    <>
      <div>
        <h2>Mother Details</h2>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="motherFN"
          onChange={motherDetailsUpdate}
          placeholder="Full Name"
        />
        <input
          style={{ margin: "4px" }}
          type="email"
          name="motherEmail"
          onChange={motherDetailsUpdate}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="motherEducation"
          onChange={motherDetailsUpdate}
          placeholder="Education"
        />
      </div>

      <div>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="motherProfession"
          onChange={motherDetailsUpdate}
          placeholder="Profession"
        />
      </div>

      <div>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="motherDesignation"
          onChange={motherDetailsUpdate}
          placeholder="Designation"
        />
      </div>

      <div>
        <input
          style={{ margin: "4px" }}
          type="number"
          name="motherPhoneN"
          onChange={motherDetailsUpdate}
          placeholder="Phone Number"
        />
      </div>
    </>
  );
}
