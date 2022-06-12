import './Home.scss'
import homeBanner from '../../asset/image/home/home-banner.png'
import ShopRoundedIcon from '@mui/icons-material/ShopRounded';
import Tabs from '../../Components/Tabs/Tabs';
import CourseTab from '../../Components/CourseTab/CourseTab';
import { useContext, useEffect, useState } from 'react';
import { TabContext } from '../../App';
import SolutionCart from '../../Components/SolutionCart/SolutionCart';
import Carousel from '../../Components/Carousel/Carousel';



const Home = () => {
    const [, , FerureResult] = useContext(TabContext);
    const [resultFeture, setResultFeture] = useState([]);


    useEffect(() => {
        setResultFeture(FerureResult);
    }, [FerureResult]);

    return (
        <div className="Home">
            <div className="landing-page">
                <div className="left">
                    <h2 className="title">শেখার নতুন জগতে তোমায় স্বাগতম!</h2>
                    <p className="sub-title">জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড প্রণীত সিলেবাস অনুযায়ী একজন শিক্ষার্থীর বিষয়ভিত্তিক পড়াশোনার স্মার্ট সল্যুশন!</p>
                    <div className="duel-btn">
                        <button className="left-btn">ফ্রি কাউন্সেলিং নাও</button>
                        <button className="right-btn"><ShopRoundedIcon /> অ্যাপ ডাউনলোড করো</button>
                    </div>
                </div>
                <div className="right">
                    <img src={homeBanner} alt="" className="homeBanner" />
                </div>
            </div>


            {/* Tab section ------------------------------- */}
            <Tabs />


            {/* Course tab --------------------------------- */}
            <CourseTab />


            {/* Result Feture ------------------------------ */}
            <h1 className="title">পরীক্ষায় চমৎকার রেজাল্টের জন্য Shikho’র <br />ফিচারগুলো দেখে নাও!</h1>
            <div className="result-Feture">

                {
                    resultFeture.map(rf => <ResultFetureCart data={rf} key={rf.id} />)
                }
            </div>


            {/* Solution Cart ------------------------------- */}
            <div className="solution-card-main">
                <h1 className="title">তোমার প্রয়োজন অনুযায়ী আমাদের আছে<br />দুটি স্মার্ট সল্যুশন</h1>
                <SolutionCart />
            </div>


            {/* Carosul Slider ------------------------------- */}
            <Carousel />

            <div style={{ height: '200px', backgroundColor: '#C1197F' }} ></div>

        </div>
    );
};






const ResultFetureCart = ({ data }) => {
    const { title, img, discription } = data;
    return (
        <div className="result-feture-cart">
            <img className="top" src={img} alt="" />
            <h2 className="title">{title}</h2>
            <p className="discription">{discription}</p>
        </div>
    )
}

export default Home;