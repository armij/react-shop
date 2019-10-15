import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout-page.styles.scss';

import StripeCheckoutButton from '../../components/stipe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header=block'>
        <span>Product</span>
      </div>
      <div className='header=block'>
        <span>Description</span>
      </div>
      <div className='header=block'>
        <span>Quantity</span>
      </div>
      <div className='header=block'>
        <span>Price</span>
      </div>
      <div className='header=block'>
        <span>Remove</span>
      </div>
    </div>
      {
        cartItems.map((cartItem, idx) =>
          <CheckoutItem key={idx} cartItem={cartItem}/>
        )
      }
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      Card number: 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <br />
    <StripeCheckoutButton price={total}/>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
})


export default connect(mapStateToProps)(CheckoutPage);