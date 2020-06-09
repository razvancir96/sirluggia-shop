import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import LogoImg from "../assets/images/logo.png";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import { loginUser } from "../store/user/userActions";

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img.attrs({
  className: "mb-5",
})`
  margin-top: 20vh;
  width: 200px;
`;

const Title = styled.h1.attrs({
  className: "h2",
})``;

const Button = styled.button.attrs({
  className: "btn btn-outline-dark d-flex align-items-center",
})``;

const GoogleIcon = styled(Google).attrs({
  className: "mx-3",
})``;

class Login extends React.Component {
  componentDidUpdate(prevProps) {
    const { user, history } = this.props;

    if (user !== prevProps.user) {
      history.push("/");
    }
  }

  render() {
    const { signInWithGoogle } = this.props;

    return (
      <Container>
        <Link to="/">
          <Logo src={LogoImg} alt="logo" />
        </Link>

        <Title>Login</Title>
        <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

        <Button type="button" onClick={() => signInWithGoogle()}>
          <GoogleIcon />
          Loghează-te cu Google
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
});

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
