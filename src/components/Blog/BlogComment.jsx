import React from 'react';
import userImg from '../../images/avatar.jpg';
import { Button } from 'antd';

const BlogComment = () => {
    return (
        <div className='mx-3' style={{ marginTop: '2rem' }}>
            <h5 className="mb-5" style={{ fontWeight: '900' }}>COMMENTS</h5>

            <div className='d-flex gap-3 mb-3'>
    <div>
        <img src={userImg} width={80} className='' alt='user image' />
    </div>
    <div>
        <div className='mb-2'>
            <h6>SevaSankalp</h6>
        </div>
        <p className='form-text'>
            Thank you for shedding light on such an important aspect. Your insights are truly invaluable. Additionally, a heartfelt thanks to the doctor for their expertise and dedication. Your commitment to sharing knowledge is greatly appreciated. Looking forward to more enlightening content!
        </p>
    </div>
</div>


            <div className="mx-auto" style={{ marginTop: '2rem', marginBottom: '2rem' }}>

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