import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getNumber} from '../actions/getAction';
import {Link} from 'react-router-dom'; 



const Navbar = (props) => {
  const {basketProps} = props;
  useEffect(() => {
      getNumber();
  }, [])
    return  <header>
        <nav>
          <h2>Shop</h2>
          <ul className="navList">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="cart">
              <Link to="/cart">
              <ion-icon name="basket-outline"></ion-icon>Cart<span>{basketProps.basketNumbers}</span>
                </Link>
            </li>
          </ul>
        </nav>
       </header>

}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps,{ getNumber})(Navbar)