import React from "react";
import { useGetAllAppointmentsQuery } from "../../../redux/api/appointmentApi";
import "./Appointments.css";

const AdminAppointmentsComponent = () => {
  const { data, isLoading, isError } = useGetAllAppointmentsQuery();

  return (
    <div className="card">
      <div className="card-body">
        <div className="table-responsive">
          <table className="datatable table table-hover table-center mb-0 table-responsive">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Speciality</th>
                <th>Patient Name</th>
                <th>Patient Contact</th>
                <th>Apointment Time</th>
                <th>Status</th>
                <th>Payment Status</th>
                <th>Tracking ID</th>
                <th>Booking Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr>
                  <td>
                    <p>
                      Dr. {item.doctor.firstName} {item.doctor.lastName}
                    </p>
                  </td>
                  <td>{item.doctor.specialization}</td>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.phone}</td>
                  <td>
                    {new Date(item.scheduleDate).toDateString()}{" "}
                    <span className="text-primary d-block">
                      {item.scheduleTime}
                    </span>
                  </td>
                  <td>
                    {/* <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                                checked
                              />
                              <label for="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div> */}
                    {item.status}
                  </td>
                  <td>{item.paymentStatus}</td>
                  <td>{item.trackingId}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminAppointmentsComponent;
