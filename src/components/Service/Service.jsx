import React from 'react';
import SubHeader from '../Shared/SubHeader';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Link } from 'react-router-dom';
import doctorBg from '../../images/img/doctors-bg.jpg';

// Import your images
import img1 from '../../images/features/baby.png';
import img2 from '../../images/features/baby.png';
import img3 from '../../images/features/baby.png';
import img4 from '../../images/features/baby.png';
import img5 from '../../images/features/baby.png';
import img6 from '../../images/features/baby.png';

const Service = () => {
  const imagesData = [
    { img: img1, text: "Text 1", heading: "Heading 1" },
    { img: img2, text: "Text 2", heading: "Heading 2" },
    { img: img3, text: "Text 3", heading: "Heading 3" },
    { img: img4, text: "Text 4", heading: "Heading 4" },
    { img: img5, text: "Text 5", heading: "Heading 5" },
    { img: img6, text: "Text 6", heading: "Heading 6" }
  ];

  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`, // Fixed syntax here
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  };

  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing." />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {imagesData.map((data, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <div className="card shadow border-0 mb-5">
                <img src={data.img} alt="" className="img-fluid rounded" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                <div className="p-2">
                  <h4 className="mt-4 mb-2">{data.heading}</h4>
                  <p className="mb-4">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the</h2>
                  <p className='form-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
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