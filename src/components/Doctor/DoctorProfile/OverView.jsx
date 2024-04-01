import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useGetDoctorQuery } from '../../../redux/api/doctorApi';

const OverView = () => {
    const { id } = useParams();
    const { data: doctorData, isLoading, isError } = useGetDoctorQuery(id); // Use the hook to fetch the doctor data
    if (isLoading) return <div>Loading...</div>; // Handle loading state
    if (isError) return <div>Error fetching data</div>; // Handle error state

    // Assuming biography is a field in the doctor data
    const biography = doctorData?.biography;

    return (
        <div className="col-md-12 col-lg-9">
            <div className='mb-3'>
                <h5 className='overview-text'>About Me</h5>
                <p className='text-secondary'>{biography}</p>
            </div>

            <div>
                <h5 className='overview-text'>Education</h5>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date={doctorData.completionYear}
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">{doctorData.college}</h5>
                       {/* <h6 className="text-white">Miami, FL</h6>*/}
                        <p style={{ fontSize: '14px' }}>
                            {doctorData.degree}
                        </p>
                    </VerticalTimelineElement>

                {/*
                   <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="2003 - 2005"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">American Dental Medical University</h5>
                        <h6 className="text-white">Miami, FL</h6>
                        <p style={{ fontSize: '14px' }}>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement> */}

                </VerticalTimeline>

            </div>
            <div className='my-5'>
                <h5 className='overview-text'>Work & Experience</h5>

                <VerticalTimeline>
            {/*
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="2010 - Present (5 years)"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">Glowing Smiles Family Dental Clinic</h5>
                        <h6 className="text-white">Miami, FL</h6>
                        <p style={{ fontSize: '14px' }}>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                */}

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date={`${doctorData.expericenceStart} - ${doctorData.expericenceEnd}`}
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                        position="right"
                    >
                        <h5 className="text-white">{doctorData.experienceHospitalName}</h5>
                        {/*<h6 className="text-white">Miami, FL</h6>*/}
                        <p style={{ fontSize: '14px' }}>
                            {doctorData.designation}
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date={`${doctorData.expericenceEnd} - Present`}
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                        position="left"
                    >
                        <h5 className="text-white">{doctorData.clinicName}</h5>
                        {/*<h6 className="text-white">Miami, FL</h6>*/}
                        <p style={{ fontSize: '14px' }}>{doctorData.clinicAddress}</p>
                    </VerticalTimelineElement>


                  

                </VerticalTimeline>
                
            </div>
            <div >
                <h5 className='overview-text'>Awards</h5>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date={doctorData.awardYear}
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                        position="right"
                    >
                        <h5 className="text-white">{doctorData.award}</h5>
                        {/*<h6 className="text-white">Miami, FL</h6>*/}
                        <p style={{ fontSize: '14px' }}>{`${doctorData.firstName} ${doctorData.lastName}`}</p>
                    </VerticalTimelineElement>
{/*
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="March 2011"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">Certificate for International Volunteer Service</h5>
                        <h6 className="text-white">Miami, FL</h6>
                        <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#00' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="March 2011"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">The Dental Professional of The Year Award</h5>
                        <h6 className="text-white">Miami, FL</h6>
                        <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </VerticalTimelineElement>
*/}
                </VerticalTimeline>
            </div>
            <div>
                <h5 className='overview-text'>Services</h5>
                <ul>
                    <li>{doctorData.services}</li>
                    {/*
                    <li>Root Canal Therapy</li>
                    <li>Implants</li>
                    <li>Composite Bonding</li>
                    <li>Fissure Sealants</li>
                    <li>Surgical Extractions</li>
                    */}
                </ul>
            </div>
            <div>
                <h5 className='overview-text'>Specializations</h5>
                <ul className="clearfix">
                    <li>{doctorData.specialization}</li>
                    {/*
                    <li>Dental Care</li>
                    <li>Oral and Maxillofacial Surgery </li>
                    <li>Orthodontist</li>
                    <li>Periodontist</li>
                    <li>Prosthodontics</li>
                    */}
                </ul>
            </div>
        </div>
    )
}
export default OverView;