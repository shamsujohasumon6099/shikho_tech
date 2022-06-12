import React, { useContext, useEffect, useState } from 'react';
import './CourseTab.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import { TabContext as TabContexts } from '../../App';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import { Link } from 'react-router-dom';




function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [courses, setCourses] = useState([]);
    const [, CourseTabData] = useContext(TabContexts);

    useEffect(() => {
        setCourses(CourseTabData);
    }, [CourseTabData]);


    return (
        <div className="courseTab">
            <div className="course-tab-body">
                <h1 className='title'>আমাদের লেটেস্ট কোর্সসমূহ </h1>


                <Box sx={{ width: '100%', typography: 'body2' }}>
                    <TabContext value={value}>
                        <Box className="tabhead" sx={{ borderBottom: 1, borderColor: '#d0deef' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab icon={<DashboardCustomizeTwoToneIcon />} label="সকল কোর্স" value="1" />
                                <Tab icon={<MenuBookIcon />} label="অ্যানিমেটেড লেসনস" value="2" />
                                <Tab icon={<GpsNotFixedIcon />} label="অনলাইন কোচিং" value="3" />
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            <div className="tab-body-main">
                                {
                                    courses.map(course => {
                                        if (course.category === 'course') {
                                            return <CourseTabDetails data={course} key={course.id} />
                                        }
                                    })
                                }
                            </div>
                        </TabPanel>

                        <TabPanel value="2">
                            <div className="tab-body-main">
                                {
                                    courses.map(course => {
                                        if (course.category === 'course') {
                                            return <CourseTabDetails data={course} key={course.id} />
                                        }
                                    })
                                }
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div className="tab-body-main">
                                {
                                    courses.map(course => {
                                        if (course.category === 'online') {
                                            return <CourseTabDetails data={course} key={course.id} />
                                        }
                                    })
                                }
                            </div>
                        </TabPanel>
                    </TabContext >
                </Box >
                <button className="tab-btn">
                    সকল কোর্স দেখো <DoubleArrowRoundedIcon />
                </button>
            </div>

        </div>
    );
}


export const CourseTabDetails = ({ data }) => {
    const { title, img, discription, oldPrice, currentPrice,id } = data;
    return (
        <div className="course-tab-card">
            <img className="card-top" src={img} alt="" />

            <div className="card-middle">
                <h2 className="title">{title}</h2>
                <p className="description">
                    {discription}
                </p>
            </div>

            <div className="card-bottom">
                <div className="price-tab">
                    <p className="current-price">মাত্র <span>৳{currentPrice}</span></p>
                    <p><span className="old-price">৳{oldPrice}</span></p>
                </div>
                <Link style={{textDecoration: 'none' }} to={`/course/${id}`}><button className="tab-btn">
                    বিস্তারিত দেখো
                </button></Link>
            </div>
        </div>
    )
}


export default LabTabs;