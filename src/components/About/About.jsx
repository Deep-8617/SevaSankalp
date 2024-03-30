import React from 'react';
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/doc/doctor 5.jpg';
import img from '../../images/logo.png';
import SubHeader from '../Shared/SubHeader';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';

// Moved Upayan image imports to the top
import firstach1 from '../../images/firstach1.png';
import secondach1 from '../../images/secondach1.png';
import thirdach1 from '../../images/thirdach1.png';
import forthach1 from '../../images/forthach1.png';
import fifthach1 from '../../images/fifthach1.png';
import sixthach1 from '../../images/sixthach1.png';

const About = () => {
    const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = null;
    if (!DoctorIsLoading && doctorIsError) doctorContent = <div>Something Went Wrong !</div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length === 0) doctorContent = <div><Empty /></div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length > 0) doctorContent =
        <>
            {doctors && doctors.map((item, id) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={id + item.id}>
                    <div className="card shadow border-0 mb-5 mb-lg-0">
                        {item.img && <img src={item.img} class="img-fluid w-100" alt="" />}
                        <div className="p-2">
                            <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{item?.firstName + ' ' + item?.lastName}</a></h4>
                            <p>{item?.designation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>

    let content = null;
    if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
    if (!isLoading && !isError && blogData?.length === 0) content = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) content =
        <>
            {
                blogData && blogData?.map((item, id) => (
                    <div className="col-lg-3 col-md-6" key={id + item.id}>
                        <div className="card shadow border-0 mb-5 mb-lg-0">
                            <img src={item?.img} alt="blog Image" width={300} height={200} className="w-100  rounded-top image-hover" style={{ objectFit: 'contain' }} />

                            <div className='p-2'>
                                <Link to={`/blog/${item?.id}`}>
                                    <h6 className="text-start mb-1 text-capitalize" style={{ color: '#223a66' }}>{truncate(item?.title, 40)}</h6>
                                </Link>
                                <div className="px-2">
                                    <p className="form-text text-start text-capitalize">{truncate(item?.description, 80)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    return (
        <>
            <Header />
            <SubHeader title="about us" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing." />
            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Doctors Acheivement</h2>
                            <p className='form-text m-0'>Celebrating our doctors' achievements, paving the way for healthier tomorrows.</p>
                        </div>
                        <p className='mt-3'>Dr. Patel's relentless pursuit of excellence in neurology has culminated in groundbreaking discoveries, earning her the esteemed title of Neurologist of the Year. Her compassionate patient care and innovative research initiatives have redefined standards in neurology, offering hope and healing to countless individuals facing neurological challenges.</p>
                    </div>

                    <div className="col-lg-8">

                        <img src={ImageHeading} alt="" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row">
                    {content}
                </div>
            </div>

            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Acheivement</h2>
                            <p className='form-text m-0'>We are honored to be certified by both India and West Bengal, showcasing our dedication to meeting stringent standards and regulations. Here, we offer a glimpse of our journey toward excellence and compliance in both regional and national contexts</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {
                                Array(6).fill(null).map((_, id) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={id + 3}>
                                        <div className="award-img">
                                            {/* Use different doctor achievement images */}
                                            {id === 0 && <img src={firstach1} alt="" className="img-fluid" />}
                                            {id === 1 && <img src={secondach1} alt="" className="img-fluid" />}
                                            {id === 2 && <img src={thirdach1} alt="" className="img-fluid" />}
                                            {id === 3 && <img src={forthach1} alt="" className="img-fluid" />}
                                            {id === 4 && <img src={fifthach1} alt="" className="img-fluid" />}
                                            {id === 5 && <img src={sixthach1} alt="" className="img-fluid" />}
                                              {/* Add more conditions for other doctor achievement images */}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>Meet Our Specialists</h2>
                            <p className='form-text m-0'>Discover the expertise that drives our team's success.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {doctorContent}

                </div>
            </div>

            <div className="container say-about" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>What Doctor's Say</h2>
                            <p className='form-text m-0'>Acclaimed by top-leading professionals as the epitome of trust and innovation in healthcare.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className='my-0'>Amazing service!</h4>
                            <span>Suvendu Adhikari</span>
                        </div>
                        <p className='form-text'>
                            Mediseva has truly revolutionized the healthcare landscape, providing unmatched convenience and trustworthy services. I wholeheartedly recommend it to anyone in need of superior healthcare solutions.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About