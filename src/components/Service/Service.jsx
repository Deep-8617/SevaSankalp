import React from 'react';
import SubHeader from '../Shared/SubHeader';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Link } from 'react-router-dom';
import doctorBg from '../../images/img/doctors-bg3.jpg'; // Changed image import

// Import your images
import img1 from '../../images/features/baby6.jpg';
import img2 from '../../images/features/baby7.jpg';
import img3 from '../../images/features/baby2.jpg'; // Assuming this is correct, but you might want to check
import img4 from '../../images/features/baby3.jpg';
import img5 from '../../images/features/baby4.jpg';
import img6 from '../../images/features/baby5.jpg';

const Service = () => {
  const imagesData = [
    { img: img1, heading: "Telemedicine Consultation", text: "Access medical advice and treatment remotely, anytime, anywhere. Receive care conveniently, no matter your location." },
    { img: img2, heading: "Diet Consultation", text: "Receive personalized dietary guidance for healthy recovery from chronic diseases and overall well-being." },
    { img: img3, heading: "Cancer Care", text: "Benefit from expert advice and treatment suggestions from renowned oncologists worldwide for comprehensive cancer care." },
    { img: img4, heading: "Women's Health Services", text: "Access specialized care and support for women's health issues, including gynecological concerns, prenatal care, and family planning." },
    { img: img5, heading: "Mental Health Counseling", text: "Receive professional support and guidance for mental health concerns from licensed therapists." },
    { img: img6, heading: "Pediatric Care", text: "Access specialized care and advice for infants, children, and adolescents from experienced pediatricians." }
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '200px',
    marginBottom: '100px'
  };

  const cardStyle = {
    flexBasis: 'calc(33.33% - 20px)', // Adjust this value as needed
    marginBottom: '20px',
    borderRadius: '10px',
    overflow: 'hidden', // This ensures the rounded corners
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a shadow for depth
    transition: 'transform 0.3s ease-in-out' // Smooth transition for the hover effect
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)' // Slightly enlarge the card on hover
  };

  const imageStyle = {
    width: '100%',
    height: '250px', // Adjust this value as needed
    objectFit: 'cover', // This maintains the aspect ratio
    borderTopLeftRadius: '10px', // Round only the top corners
    borderTopRightRadius: '10px' // Round only the top corners
  };

  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="Your Health, Our Priority: Comprehensive Care Services." />

      <div className="container" style={containerStyle}>
        {imagesData.map((data, index) => (
          <div
            className="card shadow border-0 mb-5"
            style={cardStyle}
            key={index}
            onMouseEnter={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            <img src={data.img} alt="" className="img-fluid rounded" style={imageStyle} />
            <div className="p-2">
              <h4 className="mt-4 mb-2">{data.heading}</h4>
              <p className="mb-4">{data.text}</p>
            </div>
          </div>
        ))}
      </div>

      <section style={{ backgroundColor: "antiquewhite", height: "60vh", background: `url(${doctorBg}) no-repeat`, backgroundPosition: 'center center', backgroundSize: 'cover', padding: "10px", position: "relative", marginTop: 200, marginBottom: 100 }}>
        <div className="container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
              <div className="mb-4 section-title text-center">
                <h2 className='text-uppercase' style={{ color: 'white' }}>Welcome to a World of Service Excellence: Discover Our Offerings!</h2>
                <p className='form-text' style={{ color: 'white' }}>Trust SevaSankalp for Reliable Appointments</p>
                <Link to={'/doctors'} className="btn-get-started scrollto" style={{ color: 'white' }}>Get Started</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Service;
