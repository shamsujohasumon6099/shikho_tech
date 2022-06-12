import React from 'react';
import './TopBar.scss';
import topMobile from '../../../asset/image/navbar/TopMobile.png';
import playStoreIcon from '../../../asset/image/navbar/playStoreIcon.png';

const TopBar = () => {
    return (
        <div className="TopBar">
            <div className="top">
                <img src={topMobile} alt="topMobile" className="topMobile" />
                <h3 className="title">দেশের সেরা লার্নিং এক্সপেরিয়েন্স পেতে আমাদের মোবাইল অ্যাপটি ডাউনলোড করো এখনই!</h3>
                <img src={playStoreIcon} alt="playStoreIcon" className="playStoreIcon" />
            </div>
        </div>
    );
};

export default TopBar;