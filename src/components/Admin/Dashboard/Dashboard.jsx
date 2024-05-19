import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import "./Dashboard.css";
import { FaUserMd, FaUserAlt, FaCalendarPlus, FaStar } from "react-icons/fa";
import AdminAppointmentsComponent from "../Appointments/AppointmentsComponent";
import DoctorsComponent from "../Doctors/DoctorsComponent";
import PatientsComponent from "../Patients/PatientsComponent";
import { useGetDoctorsQuery } from "../../../redux/api/doctorApi";
import { useGetAllPatientsQuery } from "../../../redux/api/patientApi";
import { useGetAllAppointmentsQuery } from "../../../redux/api/appointmentApi";
import { useGetAllReviewsQuery } from "../../../redux/api/reviewsApi";

const AdminDashboard = () => {
  const { data: doctors } = useGetDoctorsQuery();
  const { data: patients } = useGetAllPatientsQuery();
  const { data: appoinments } = useGetAllAppointmentsQuery();
  const { data: reviews } = useGetAllReviewsQuery({});

  return (
    <>
      <AdminLayout>
        <div class="row">
          <div class="col-md-3">
            <div class="card-counter bg-primary">
              <i>
                <FaUserMd />
              </i>
              <span class="count-numbers text-light">
                {doctors?.meta.total || 0}
              </span>
              <span class="count-name text-light">Available Doctors</span>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card-counter bg-success">
              <i>
                <FaUserAlt />
              </i>
              <span class="count-numbers text-white">
                {patients?.length || 0}
              </span>
              <span class="count-name text-light">Patients</span>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card-counter bg-info">
              <i>
                <FaCalendarPlus />
              </i>
              <span class="count-numbers text-white">
                {appoinments?.length || 0}
              </span>
              <span class="count-name text-light">Appoinments</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-counter bg-danger">
              <i>
                <FaStar />
              </i>
              <span class="count-numbers text-white">
                {reviews?.length || 0}
              </span>
              <span class="count-name text-light">Total Reviews</span>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Revenue</h4>
              </div>
              <div className="card-body">
                <div id="morrisArea"></div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Status</h4>
              </div>
              <div className="card-body">
                <div id="morrisLine"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row my-3">
          <div className="col-md-6">
            <DoctorsComponent />
          </div>
          <div className="col-md-6">
            <PatientsComponent />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <AdminAppointmentsComponent />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default AdminDashboard;
