import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getNumber} from '../actions/getAction';



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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="cart">
              <a href="#">
              <ion-icon name="basket-outline"></ion-icon>Cart<span>{basketProps.basketNumbers}</span>
                </a>
            </li>
          </ul>
        </nav>
       </header>

}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps,{ getNumber})(Navbar)