import React from 'react'
import img from '../../../images/chair.png'
import { useParams } from 'react-router-dom';
import {useGetDoctorQuery} from '../../../redux/api/doctorApi';
import {useGetAppointmentTimeQuery} from '../../../redux/api/timeSlotApi';

const Location = () => {
    const { id } = useParams();
    const { data: doctorData} = useGetDoctorQuery(id);

    return (
        <div className="location-list">
            <div className='card shadow p-3 border-0 mb-3'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="clinic-content">
                            <h4 className="clinic-name"><a href="#">{doctorData.clinicName}</a></h4>
                            <p className="doc-speciality">{doctorData.clinicAddress}</p>
                            <div className="clinic-details mb-0">
                                <h5 className="clinic-direction"> <i className="fas fa-map-marker-alt"></i>{`${doctorData.city}, ${doctorData.postalCode}, ${doctorData.state}, ${doctorData.country}`}<br /><a>Get Directions</a></h5>
                                <ul>
                                    {Array(4).fill(null).map((_item, index) => (
                                        <li key={index + 2}>
                                            <a>
                                                <img src={img} alt="Feature Image" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="clinic-timing">
                            <div>
                                <p className="timings-days">
                                    <span></span>
                                </p>
                                <p className="timings-times">
                                    <span></span>
                                    <span></span>
                                </p>
                            </div>
                            <div>
                                <p className="timings-days">
                                    <span></span>
                                </p>
                                <p className="timings-times">
                                    <span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="consult-price">
                            {doctorData.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
