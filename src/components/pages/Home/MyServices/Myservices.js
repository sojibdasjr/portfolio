import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptop, faCode, faSearch, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs, faWordpress } from '@fortawesome/free-brands-svg-icons';
import './Myservices.css'


const Myservices = () => {
    return (
        <div className='container' style={{marginTop:'2.5rem'}}>
            <div className='text-center' style={{color:'#514A94'}}>
                 <h1>MY <span className='fancy_text' id='services'>SERVICES</span></h1>
                 <p className='text-muted'>I provide high standard clean website for your business solutions</p>
            </div>
            <div className='row mx-2'>
                <div className='col-12 col-md-6 col-lg-4 border-end border-primary shadow-sm p-3 my-5 bg-body rounded border-2 fancy_text'>
                   <div className='text-center '>
                   <FontAwesomeIcon className='fa-3x ' icon={faLaptop}/>
                   </div>
                    <div className='text-center mt-3'>
                    <h2>Web Design</h2>
                    <p className='text-muted'>I will design attractive, modern and eye catching websites whics catches visitor's Eye...</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 border-2 border-end border-primary shadow-sm p-3 my-5 bg-body rounded fancy_text '>
                   <div className='text-center'>
                   <FontAwesomeIcon className='fa-3x' icon={faCode}/>
                   </div>
                    <div className='text-center mt-3'>
                    <h2>Web Development</h2>
                    <p  className='text-muted' >I also work with backend so i can make web applications for making website functionalities which makes a great experience</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 border-2 border-end border-primary shadow-sm p-3 my-5 bg-body rounded fancy_text '>
                   <div className='text-center'>
                   <FontAwesomeIcon className='fa-3x' icon={faWordpress}/>
                   </div>
                    <div className='text-center mt-3'>
                    <h2>Wordpress</h2>
                    <p className='text-muted'>I'm a Wordpress Customizerr and Develpoer. So I can manage your WP Website Properly</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 border-2 border-end border-primary shadow-sm p-3 my-5 bg-body rounded fancy_text '>
                   <div className='text-center'>
                   <FontAwesomeIcon className='fa-3x' icon={faMobileAlt}/>
                   </div>
                    <div className='text-center mt-3'>
                    <h2>Responsive Design</h2>
                    <p className='text-muted'>I'm design Responsive Websites for that You can use your website in any devices</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 border-2 border-end border-primary shadow-sm p-3 my-5 bg-body rounded fancy_text '>
                   <div className='text-center'>
                   <FontAwesomeIcon className='fa-3x' icon={faNodeJs}/>
                   </div>
                    <div className='text-center mt-3'>
                    <h2>Programming</h2>
                    <p className='text-muted'>I also build programs for making life easier adn fast Using of programs you can manage you daily life</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 border-2 border-end border-primary shadow-sm p-3 my-5 bg-body rounded fancy_text '>
                   <div className='text-center'>
                   <FontAwesomeIcon className='fa-3x' icon={faSearch}/>
                   </div>
                    <div className='text-center mt-3'>
                    <h2>SEO</h2>
                    <p className='text-muted'>I work on SEO which is known as Search Engine Optimization which helps you to rank you website on the top</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myservices;