import React from "react";
import styled from "styled-components";
import { StripeProvider, Elements } from "react-stripe-elements";

import Layout from "../components/Layout";
import CheckoutForm from "../components/CheckoutForm";
import Container from "../utils/style-utils";

const ContentContainer = styled(Container).attrs({
  className: "d-flex justify-content-center align-items-center",
})``;

const ElementsContainer = styled.div.attrs({
  className: "d-flex flex-column",
})``;

const DeliveryMessage = styled.p.attrs({
  className: "mt-5 font-italic",
})``;

const Checkout = () => (
  <StripeProvider apiKey="pk_test_qxuOUztDbFFABADsiHV1oXbi00vzVumGBX">
    <Layout>
      <ContentContainer>
        <Elements>
          <ElementsContainer>
            <CheckoutForm />
            <DeliveryMessage>
              Pentru livrare produsele trebuie ridicate personal de la adresa:
              Tudor Vladimirescu 22, sunând în prealabil la numărul: 0728998166.
            </DeliveryMessage>
          </ElementsContainer>
        </Elements>
      </ContentContainer>
    </Layout>
  </StripeProvider>
);

export default Checkout;
