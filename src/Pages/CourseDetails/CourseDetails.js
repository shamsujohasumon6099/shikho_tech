import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TabContext } from '../../App';
import ShopRoundedIcon from '@mui/icons-material/ShopRounded';
import './CourseDetails.scss'

const CourseDetails = () => {
    const [courseDetails, setCoureDetails] = useState([]);
    const [, CourseTabData] = useContext(TabContext);
    const { courseId } = useParams();
    useEffect(() => {
        setCoureDetails(CourseTabData.find(course => course.id === Number(courseId)));
    }, [CourseTabData, courseId]);
    return (
        <div className="course-details-main">
            <div className="landing-page">
                <div className="left">
                    <h2 className="title">{courseDetails.title}</h2>
                    <p className="sub-title">{courseDetails.discription}</p>
                    <div className="duel-btn">
                        <button className="left-btn">পুরাতন মূল্য : 
                             {courseDetails.oldPrice} ৳</button>
                        <button className="right-btn"><ShopRoundedIcon /> বর্তমান মূল্য : {courseDetails.currentPrice} ৳</button>
                    </div>
                </div>
                <div className="right">
                    <img src={courseDetails.img} alt="" className="homeBanner" />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;