import React from 'react';
import {connect} from 'react-redux';
import yellowDress from '../images/yellow_dress.jpeg';
import {productQuantity, clearProduct} from '../actions/productQuantity';



const Cart = ({basketProps, productQuantity, clearProduct}) => {
console.log(basketProps);

const productsCart = [];

Object.keys(basketProps.products).forEach(item => {
    if(basketProps.products[item].inCart){
        productsCart.push(basketProps.products[item])
    }
})
    return (
        <div>
            <h1>This is a cart page</h1>
            <ul className="cart-list">
                <li>PRODUCT-IMAGE</li>
                <li>NAME</li>
                <li>QUANTITY</li>
                <li>PRICE</li>

            </ul>
            <div>
                { productsCart ? productsCart.map((product, i) => {
                  return(
                   <ul key={i} className="cart-list">
                    <li><span><ion-icon onClick={() => clearProduct(product.name)} name="close-circle-outline"></ion-icon></span><img className="cart-image"src={yellowDress} alt="yellow-dress"/></li>
                    <li>{product.name}</li>
                    <li><ion-icon onClick = {() => productQuantity('decrease', product.name)} className="quantity-icons" name="remove-circle-outline"></ion-icon><span>{product.numbers}</span><ion-icon className="quantity-icons" onClick={() => productQuantity('increase',product.name)} name="add-circle-outline"></ion-icon></li>
                    <li>{product.price  * product.numbers}</li>
                    </ul>
                    )  
        
                }) : null}
{     basketProps.cartCost > 0 ? <div className="cart-total">Total: {basketProps.cartCost}</div> : null
}            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
  }) 

export default connect(mapStateToProps, {productQuantity, clearProduct} )(Cart)
