import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import PatientsComponent from "./PatientsComponent";

const Patients = () => {
  return (
    <AdminLayout>
      <PatientsComponent />
    </AdminLayout>
  );
};
export default Patients;
