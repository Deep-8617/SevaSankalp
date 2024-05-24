import React from "react";
import "./Doctors.css";
import { useGetDoctorsQuery } from "../../../redux/api/doctorApi";

const DoctorsComponent = () => {
  const { data, isLoading, isError } = useGetDoctorsQuery();
  const doctors = data?.doctors;

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Doctors List</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover table-center table-responsive">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Speciality</th>
                <th>Clinic</th>
                <th>Hospital</th>
                <th>Visit</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <h2 className="table-avatar">
                      <a className="avatar avatar-sm mr-2">
                        <img
                          className="avatar-img rounded-circle"
                          src={item.img}
                          alt="Profile Image"
                        />
                      </a>
                      <a>
                        Dr. {item.firstName} {item.lastName}
                      </a>
                    </h2>
                  </td>
                  <td>{item.designation}</td>
                  <td>{item.clinicName}</td>
                  <td>{item.experienceHospitalName}</td>
                  <td>₹{item.price}</td>
                  <td>{item.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DoctorsComponent;
