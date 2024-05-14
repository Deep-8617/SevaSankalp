import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import "./Doctors.css";
import userImg from "../../../images/avatar.jpg";
import { useGetDoctorsQuery } from "../../../redux/api/doctorApi";

const Doctors = () => {
  const { data, isLoading, isError } = useGetDoctorsQuery({ limit: 4 });
  const doctors = data?.doctors;

  return (
    <>
      <AdminLayout>
        <div className="row">
          <div className="col-md-12 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h4 className="card-title">Doctors List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
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
                              <a>Dr. {item.firstName} {item.lastName}</a>
                            </h2>
                          </td>
                          <td>{item.designation}</td>
                          <td>{item.clinicName}</td>
                          <td>{item.experienceHospitalName}</td>
                          <td>${item.price}</td>
                          <td>{item.city}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default Doctors;
