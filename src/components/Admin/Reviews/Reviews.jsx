import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import "./Reviews.css";
import { useGetAllReviewsQuery } from "../../../redux/api/reviewsApi";

const AdminReviews = () => {
  const { data } = useGetAllReviewsQuery();
  console.log(data);

  return (
    <AdminLayout>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">All Reviews</h4>
          </div>
          <div className="card-body">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Doctor Name</th>
                  <th>Stars</th>
                  <th>Comment</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((review, index) => (
                  <tr key={index}>
                    <td>
                      {review?.patient.firstName} {review?.patient.lastName}
                    </td>
                    <td>
                      {review?.doctor.firstName} {review?.doctor.lastName}
                    </td>
                    <td>{review?.star}</td>
                    <td>{review?.description}</td>
                    <td>{new Date(review?.createdAt).toLocaleDateString()}</td>
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

export default AdminReviews;
