import React, { useContext, useEffect, useState } from 'react';
import { TabContext } from '../../App';
import { CourseTabDetails } from '../../Components/CourseTab/CourseTab';
import ShopRoundedIcon from '@mui/icons-material/ShopRounded';
import courseBanner from '../../asset/image/navbar/course-list-banner.png'
import './Course.scss';

const Course = () => {
    const [, CourseTabData] = useContext(TabContext);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(CourseTabData);
    }, [CourseTabData]);
    return (
        <div className='course'>
            <div className="landing-page">
                <div className="left">
                    <h2 className="title">শেখার নতুন জগতে তোমায় স্বাগতম!</h2>
                    <p className="sub-title">এক্সপার্ট মেন্টরদের তৈরি অ্যানিমেটেড ভিডিও লেসনস ও ইন্টারঅ্যাকটিভ অনলাইন কোচিংয়ে বিষয়ভিত্তিক পড়াশোনা এবং পরীক্ষা প্রস্তুতির কমপ্লিট সল্যুশন!</p>
                    <div className="duel-btn">
                        <button className="left-btn">ফ্রি কাউন্সেলিং নাও</button>
                        <button className="right-btn"><ShopRoundedIcon /> অ্যাপ ডাউনলোড করো</button>
                    </div>
                </div>
                <div className="right">
                    <img src={courseBanner} alt="" className="homeBanner" />
                </div>
            </div>
            <div className="tab-body-main">
                <h2 className="title-course">
                অ্যানিমেটেড লেসনস
                </h2>
                <div className="tab-body">
                {
                    courses.map(course => <CourseTabDetails data={course} key={course.id} />)
                }
                </div>
            </div>
        </div>
    );
};

export default Course;