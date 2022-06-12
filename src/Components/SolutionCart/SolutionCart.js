import React, { useContext, useEffect, useState } from 'react';
import { TabContext } from '../../App';
import './SolutionCart.scss';
import StarPurple500TwoToneIcon from '@mui/icons-material/StarPurple500TwoTone';

const SolutionCart = () => {
    const [cartSolution, setcartSolution] = useState([]);
    const [, , , SolutionCart] = useContext(TabContext);
    useEffect(() => {
        setcartSolution(SolutionCart)
    }, [SolutionCart]);
    return (
        <div className="solutionCart">
            {
                cartSolution.map(cs => <SolutionCartDetails data={cs} key={cs.id} />)
            }
        </div>
    );
};




const SolutionCartDetails = ({ data }) => {
    const { title, img, points } = data;
    return (
        <div className="solution-cart-details">
            <div className="cart-Top">
                <h1 className="title">{title}</h1>
            </div>
            <div className="cart-bottom">
                <img src={img} alt="" className="cart-image" />
                <div className="cart-middle">
                    {
                        points.map(pt =>
                            <h3 className="point">
                                <StarPurple500TwoToneIcon />
                                <span>{pt}</span>
                            </h3>)
                    }
                </div>
                <button className="cart-buttom">বিস্তারিত দেখো</button>
            </div>
        </div>
    )
}



export default SolutionCart;