import React from "react";
import styled, { css } from "styled-components";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe,
} from "react-stripe-elements";

const StripeInput = css`
  width: 300px;
  height: 40px;
  padding: 10px 12px;
  color: #32325d;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 4px;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  transition: box-shadow 150ms ease;
`;

const StyledCardNumberElement = styled(CardNumberElement)`
  ${StripeInput}
`;

const StyledCardExpiryElement = styled(CardExpiryElement)`
  ${StripeInput}
`;

const StyledCardCvcElement = styled(CardCvcElement)`
  ${StripeInput}
`;

class CheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  handleFormSubmission(event) {
    const { stripe, elements } = this.props;

    event.preventDefault();

    try {
      stripe.confirmCardPayment(
        "TODO: RECEIVE PAYMENT_INTENT_CLIENT_SECRET FROM SERVER",
        {
          payment_method: {
            card: elements.getElement("cardNumber"),
          },
        }
      );
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { error } = this.state;

    return (
      <form
        onSubmit={(event) => this.handleFormSubmission(event)}
        className="checkout-form"
      >
        <p className="h4 font-weight-bold mb-5 text-center">
          Plătește cu cardul:
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="mb-3">
            <p className="mb-1">Număr card:</p>
            <StyledCardNumberElement className="card-number-element" />
          </div>
          <div className="mb-3">
            <p className="mb-1">Dată expirare:</p>
            <StyledCardExpiryElement className="card-expiry-element" />
          </div>
          <div className="mb-3">
            <p className="mb-1">CVC:</p>
            <StyledCardCvcElement className="card-cvc-element" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark">
            Plătește
          </button>
        </div>
        {error ? (
          <div>
            <p className="text-danger text-center mt-3">
              Plata cu cardul este in probe. Puteți plăti cash la sediu.
            </p>
          </div>
        ) : null}
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
