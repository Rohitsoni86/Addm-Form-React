import React, { Component } from "react";

import "../StudentIdCard.css";

export default class StudentsData extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      students: [
        {
          ID: 5579,
          FirstName: "Rohit",
          LastName: "Soni",
          DOB: "17/08/2000",
          userImage: "https://randomuser.me/api/portraits/men/75.jpg",
          C_Name: "Parul University",
          C_CollegeAddress: "Vadodara,Gujarat",
          C_CollegeLogo:
            "https://img.collegedekhocdn.com/media/img/institute/logo/WhatsApp_Image_2023-03-06_at_11.16.15_AM_MFoyM10.jpeg",
        },
        {
          ID: 5579222,
          FirstName: "Rahul",
          LastName: "Soni",
          DOB: "17/08/2000",
          userImage: "https://randomuser.me/api/portraits/men/74.jpg",
          C_Name: "Parul University",
          C_CollegeAddress: "Vadodara,Gujarat",
          C_CollegeLogo:
            "https://img.collegedekhocdn.com/media/img/institute/logo/WhatsApp_Image_2023-03-06_at_11.16.15_AM_MFoyM10.jpeg",
        },
        {
          ID: 55793333,
          FirstName: "Jay",
          LastName: "Soni",
          DOB: "17/08/2000",
          userImage: "https://randomuser.me/api/portraits/men/78.jpg",
          C_Name: "Parul University",
          C_CollegeAddress: "Vadodara,Gujarat",
          C_CollegeLogo:
            "https://img.collegedekhocdn.com/media/img/institute/logo/WhatsApp_Image_2023-03-06_at_11.16.15_AM_MFoyM10.jpeg",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="container d-flex justify-content-between align-content-center flex-wrap p-3">
          {this.state.students.map((elem, index) => {
            return (
              <div className="card" key={index}>
                <div className="Section_1">
                  <div className="image_Container">
                    <img
                      src={elem.userImage}
                      alt="Employee/Student Image"
                      id="emp_image"
                    />
                  </div>
                  <div className="info_Container">
                    <p>
                      <strong>Student Id :</strong>
                      {elem.ID}
                    </p>
                    <p>
                      <strong>Name :</strong>
                      {`${elem.FirstName} ${elem.LastName}`}
                    </p>
                    <p>
                      <strong>Date Of Birth :</strong>
                      {elem.DOB}
                    </p>
                  </div>
                </div>
                <div className="Section_2">
                  <div className="info_Container">
                    <p>
                      <strong>College Name :</strong>
                      {elem.C_Name}
                    </p>
                    <p>
                      <strong>College Address :</strong>
                      {elem.C_CollegeAddress}
                    </p>
                  </div>
                  <div id="logo_Container">
                    <img
                      src={elem.C_CollegeLogo}
                      alt="Employee/Student Image"
                      id="logo_Css"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
