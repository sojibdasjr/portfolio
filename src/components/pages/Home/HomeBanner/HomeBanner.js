import React from 'react';
import Typewriter from 'typewriter-effect';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div>
                    <h3 style={{color:'gray'}}>Hey There !</h3>
                    <h1 className='text-uppercase py-3 developer_name'> i am sojib das</h1>
                    
                    <h2 className='text-uppercase ' style={{letterSpacing:'2px', color:'#F559C7'}}>
                    <Typewriter
                            options={{
                                strings: ['MERN-Stack Web Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                    </h2>
                    <p className='text-muted'>Welcome to my portfolio, if you want to create your dream website adn grow your business ? then hire me or message me</p>

                 
                    <button className='button_1'> <span className='fancy_text'>HIRE ME</span></button>
                    <button className='button_2'><span className='fancy_text'><a href="#aboutMe">ABOUT ME</a></span></button>
                 
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <img className='img-fluid' src="https://i.ibb.co/DVCmh52/image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;