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

const Title = styled.p.attrs({
  className: "h4 font-weight-bold mb-5 text-center",
})``;

const ContentContainer = styled.div.attrs({
  className: "d-flex flex-column justify-content-center align-items-center",
})``;

const InputGroup = styled.div.attrs({
  className: "mb-3",
})``;

const Label = styled.div.attrs({
  className: "mb-1",
})``;

const ButtonContainer = styled.div.attrs({
  className: "d-flex justify-content-center",
})``;

const Button = styled.button.attrs({
  className: "btn btn-dark",
})``;

const ErrorMessage = styled.p.attrs({
  className: "text-danger text-center mt-3",
})``;

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
      <form onSubmit={(event) => this.handleFormSubmission(event)}>
        <Title>Plătește cu cardul:</Title>

        <ContentContainer>
          <InputGroup>
            <Label>Număr card:</Label>
            <StyledCardNumberElement />
          </InputGroup>
          <InputGroup>
            <Label>Dată expirare:</Label>
            <StyledCardExpiryElement />
          </InputGroup>
          <InputGroup>
            <Label>CVC:</Label>
            <StyledCardCvcElement />
          </InputGroup>
        </ContentContainer>

        <ButtonContainer>
          <Button type="submit">Plătește</Button>
        </ButtonContainer>
        {error && (
          <ErrorMessage>
            Plata cu cardul este in probe. Puteți plăti cash la sediu.
          </ErrorMessage>
        )}
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
