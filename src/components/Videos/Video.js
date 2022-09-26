import React from 'react';
import img from "../../Images/web design.jpg"
import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <>
            <div class="video">
                <Link to="/quize" target="_blank">
                    <img src={img} alt=""/>
                </Link>
            </div>
            <div class="video_content">
                <p class="cnt_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque maiores dolore</p>
                <div class="hedaing">
                    <div><Link to="/quize" target="_blank" rel="noopener noreferrer"><h5>Quiz Now</h5></Link></div>
                    <div><p>$ 55</p></div>
                </div>
            </div>
        </>
    );
};

export default Video;