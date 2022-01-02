import React from 'react';
import { faAward, faClipboardList, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomePoster.css'

const HomePoster = () => {
    return (
        <div className='container'>
                <div className='row '>
                    <div className='col-12 col-md-6 col-lg-3'>
                    <div className="card mb-3" style={{maxWidth: '540px'}}>
                        <div className="row g-0 d-flex align-items-center">
                            <div className="  col-md-5  my-2 ps-2">
                            <FontAwesomeIcon className='fa-5x'  icon={faClock}/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body">
                                <h1 className="card-title fw-bold"style={{color:'#514A94'}}>155+</h1>
                                <p className="card-text text-muted">Working Hours</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                    <div className="card mb-3" style={{maxWidth: '540px'}}>
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-md-5  my-2 ps-2">
                            <FontAwesomeIcon className='fa-5x' icon={faClipboardList}/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body">
                                <h1 className="card-title fw-bold" style={{color:'#514A94'}}>40+</h1>
                                <p className="card-text text-muted">Project</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                    <div className="card mb-3" style={{maxWidth: '540px'}}>
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-md-5  my-2 ps-2">
                            <FontAwesomeIcon className='fa-5x'  icon={faUsers}/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body">
                                <h1 className="card-title fw-bold" style={{color:'#514A94'}}>55+</h1>
                                <p className="card-text text-muted">Happy Clients</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                    <div className="card mb-3" style={{maxWidth: '540px'}}>
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-md-5  my-2 ps-2">
                            <FontAwesomeIcon className='fa-5x'  icon={faAward}/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body">
                                <h1 className="card-title fw-bold" style={{color:'#514A94'}}>24+</h1>
                                <p className="card-text text-muted">Awards Received</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default HomePoster;