import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {useGetDoctorQuery} from '../../../redux/api/doctorApi';
import { useGetAllTimeSlotQuery } from '../../../redux/api/timeSlotApi';

const Availibility = () => {
    const {id} = useParams();
    const { data: doctorData} = useGetAllTimeSlotQuery();
     const [dayData, setDayData] = useState([]);

useEffect(() => {
        // Ensure doctorData is not undefined and has some data
        if (doctorData && doctorData.length > 0) {
            const filteredData = doctorData.filter(item => item.doctorId === id);
            setDayData(filteredData);
        }
    }, [doctorData]); // Run effect whenever doctorData change
        console.log(dayData); // Log dayData when it changes
    

    return (
    <div className="col-md-6 offset-md-3">
        <div className="widget business-widget">
            <div className="widget-content">
                <div className="listing-hours">
                    {dayData?.map((e, i) => (
                        <div key={i} className="listing-day">
                            <div className="day">{e.day}</div>
                            <div className="time-items">
                            {e.timeSlot.map((t,j)=>(
                                <span key={j} className="time">{t.startTime} - {t.endTime}</span>
                                ))} 
            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
}

export default Availibility