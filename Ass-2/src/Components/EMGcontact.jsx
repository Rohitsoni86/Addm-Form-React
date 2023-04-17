import React from "react";

export default function EMGcontact({ updateEmgDetails }) {
  return (
    <>
      <div>
        <h2>Emergency Contact</h2>
        <input
          style={{ margin: "4px" }}
          type="text"
          name="stEmergCRelation"
          onChange={updateEmgDetails}
          placeholder="Relation"
        />
      </div>

      <div>
        <input
          style={{ margin: "4px" }}
          type="number"
          name="stEmergCPhoneNumber"
          onChange={updateEmgDetails}
          placeholder="PhoneNumber"
        />
      </div>
    </>
  );
}
