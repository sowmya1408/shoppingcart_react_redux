import React from 'react';
import yellowDress from '../images/yellow_dress.jpeg';
import blackDress from '../images/black_dress.jpeg';
import redDress from '../images/red_dress.jpeg';
import whiteDress from '../images/white_dress.jpeg';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';
import {Link} from 'react-router-dom';





const Home = (props) => {
    console.log(props);
    return <div className="container">
        <div className="image">
            <img src={yellowDress} alt="dress"></img>
            <h3>Yellow dress</h3>
            <h3>249Dkk</h3>
            <Link onClick={() => props.addBasket('yellowDress')} to="#" className="addToCart cart1">Add to cart</Link>

        </div>
        <div className="image">
            <img src={blackDress} alt="dress"></img>
            <h3>black dress</h3>
            <h3>249Dkk</h3>
            <Link onClick={() => props.addBasket('blackDress')} to="#" className="addToCart cart2">Add to cart</Link>

        </div>
        <div className="image">
            <img src={redDress} alt="dress"></img>
            <h3>Red dress</h3>
            <h3>249Dkk</h3>
            <Link onClick={() => props.addBasket('redDress')} to="#" className="addToCart cart3">Add to cart</Link>

        </div>
        <div className="image">
            <img src={whiteDress} alt="dress"></img>
            <h3>White dress</h3>
            <h3>249Dkk</h3>
            <Link onClick={() => props.addBasket('whiteDress')} to="#" className="addToCart cart4">Add to cart</Link>
        </div>


    </div>
}

export default connect(null,{ addBasket})(Home)