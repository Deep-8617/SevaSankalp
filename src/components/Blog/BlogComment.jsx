import React from 'react';
import userImg from '../../images/avatar.jpg';
import { Button } from 'antd';

const BlogComment = () => {
    return (
        <div className='mx-3' style={{ marginTop: '7rem' }}>
            <h5 className="mb-5" style={{ fontWeight: '900' }}>COMMENTS</h5>

            {
                Array(4).fill(null).map((_item, index) => (
                    <div className='d-flex gap-3 mb-3' key={index + 5}>
                        <div>
                            <img src={userImg} width={80} className='' alt='user imge' />
                        </div>
                        <div>
                            <div className='mb-2'>
                                <h6>Ishita Nandi</h6>
                                <p className='form-text mb-0'>March 2024</p>
                            </div>
                            <p className='form-text'>
                            Thank you for shedding light on such an important aspect of women's health. It's crucial to prioritize our well-being and have open discussions about topics like these. Understanding the unique challenges and needs of women's health is empowering and can lead to better overall care. Looking forward to more insightful content like this!
                            </p>
                        </div>
                    </div>
                ))
            }

            <div className="mx-auto" style={{ marginTop: '7rem', marginBottom: '7rem' }}>

                <div className="card mb-5 p-3 shadow border-0">
                    <form className="row form-row">
                        <div className="col-md-6">
                            <div className="form-group mb-2 card-label">
                                <label>First Name</label>
                                <input placeholder='First Name' className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-2 card-label">
                                <label>Last Name</label>
                                <input placeholder='Last Name' className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group mb-2 card-label">
                                <label>Subject</label>
                                <input placeholder='Subject' className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group mb-2 card-label">
                                <label>Comment</label>
                                <textarea placeholder='Your Comment' className="form-control" rows={5} />
                            </div>
                        </div>

                        <div className='text-center my-3'>
                            <Button htmlType='submit' type="primary" size='large'>
                                Comment
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogComment