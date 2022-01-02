import React from 'react';
import Navigation from '../share/Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import HomeBanner from './HomeBanner/HomeBanner';
import HomePoster from './HomePoster/HomePoster';
import Myservices from './MyServices/Myservices';
import PhotosSwiper from './Swiper/PhotosSwiper';

const Home = () => {
    return (
        <div id='home'>
            <Navigation/>
            <HomeBanner/>
            <HomePoster/>
            <AboutMe/>
            <Myservices/>
            <PhotosSwiper/>

        </div>
    );
};

export default Home;