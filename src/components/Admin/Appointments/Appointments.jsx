import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import AdminAppointmentsComponent from "./AppointmentsComponent";

const AdminAppointments = () => {
  return (
    <>
      <AdminLayout>
        <div className="row">
          <div className="col-md-12">
            <AdminAppointmentsComponent />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default AdminAppointments;
