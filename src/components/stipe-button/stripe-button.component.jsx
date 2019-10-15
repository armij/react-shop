import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_G4gIZa4XzT3vlQaI8TBzC9ag00z5FKxgcz';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='Be You Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://cdn.icon-icons.com/icons2/376/PNG/256/Vans_Checkerboard_Dirty_White_37330.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;