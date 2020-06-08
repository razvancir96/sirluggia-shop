import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";

import Layout from "../components/Layout";
import CheckoutForm from "../components/CheckoutForm";
import Container from "../utils/style-utils";

const Checkout = () => (
  <StripeProvider apiKey="pk_test_qxuOUztDbFFABADsiHV1oXbi00vzVumGBX">
    <Layout>
      <Container className="checkout-page d-flex justify-content-center align-items-center">
        <Elements>
          <div className="d-flex flex-column">
            <CheckoutForm />
            <p className="mt-5 font-italic">
              Pentru livrare produsele trebuie ridicate personal de la adresa:
              Tudor Vladimirescu 22, sunând în prealabil la numărul: 0728998166.
            </p>
          </div>
        </Elements>
      </Container>
    </Layout>
  </StripeProvider>
);

export default Checkout;
