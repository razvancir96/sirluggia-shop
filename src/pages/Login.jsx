import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../assets/images/logo.png";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import "./Login.css";
import { loginUser } from "../redux/actions/user";

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
      <div className="login-page">
        <Link to="/">
          <img src={Logo} alt="logo" className="mb-5" />
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data.user,
});

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
