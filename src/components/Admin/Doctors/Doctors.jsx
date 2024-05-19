import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import DoctorsComponent from "./DoctorsComponent";

const Doctors = () => {
  return (
    <>
      <AdminLayout>
        <div className="row">
          <div className="col-md-12 d-flex">
            <DoctorsComponent />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default Doctors;
