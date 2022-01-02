import React from 'react';
import resume from '../../../../images/resume/Sojib Das _Resume.pdf'

const AboutMe = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className='row d-flex align-items-center '>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <img className='img-fluid rounded' src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/130584139_1770408546468652_1429273158065076272_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGuJVsNRTWV1npzKXJqrpw7lxtPg-xXV-CXG0-D7FdX4I2L6IvKVcsERzLK8bKDH7KiWdOlml_DRS02-K2VzF9_&_nc_ohc=zT5RwCK00a0AX-C9rHG&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-7D_yKsqIBVMMgYJrEOQvaiIWVXkl90w9rg_DzCvEeXw&oe=61F724DE" alt="" />
                </div>

                <div className='col-12 col-md-6 col-lg-8'>
                    <h1 id='aboutMe' className='text-center py-2' style={{color:'#514A94'}}>ABOUT ME</h1>
                    <h4>Full Stack Web Application Developer || Web Designer || Wordpress Develper || Woocommerce</h4>
                    <div className='text-muted'>
                    <p>Hi There ! I'm Professional Web Designer and Web Developer Wigh having more than 3 Years of experience I am Expert on Html CSS JavaScript jquery BGootstrap Mysql wordpress. My experience Help me to create Creative & Responsive Web sites with high quality, professional look.</p> <br />
                    <p>A good website makes marketin share well and It's the right wa to show a company details very well. If you want to know more about me ? feel free to message me throguh my contact page.</p>
                    </div>
                    <button className='button_2'> <a href={resume} download>DOWNLOAD CV</a></button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;