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

const Logo = styled.img`
  margin-top: 20vh;
  width: 200px;
`;

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
          <Logo src={LogoImg} alt="logo" className="mb-5" />
        </Link>

        <h1 className="h2">Login</h1>
        <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

        <button
          type="button"
          className="btn btn-outline-dark d-flex align-items-center"
          onClick={() => signInWithGoogle()}
        >
          <Google className="w-50 mr-3" />
          <span className="text-nowrap">Loghează-te cu Google</span>
        </button>
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
