import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import "./Patients.css";
import { useGetAllPatientsQuery } from "../../../redux/api/patientApi";
import userImg from "../../../images/avatar.jpg";

const Patients = () => {
  const { data, isLoading, isError } = useGetAllPatientsQuery();
  const patients = data;
  console.log(patients);

  return (
    <AdminLayout>
      <div className="card  card-table flex-fill">
        <div className="card-header">
          <h4 className="card-title">Patients List</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Patient Name</th>
                  <th>Blood Group</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {patients?.map((patient, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <h2 className="table-avatar">
                        <a className="avatar avatar-sm mr-2">
                          <img
                            className="avatar-img rounded-circle"
                            src={patient.img}
                            alt="Avatar"
                          />
                        </a>
                        <a>
                          {patient.firstName} {patient.lastName}
                        </a>
                      </h2>
                    </td>
                    <td>{patient.bloodGroup}</td>
                    <td>{patient.mobile}</td>
                    <td>{new Date(patient.dateOfBirth).toDateString()}</td>
                    <td>
                      {patient.address}, {patient.city}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default Patients;
