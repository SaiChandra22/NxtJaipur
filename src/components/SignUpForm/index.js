import { Component } from "react";
import "./index.css";

class SignUpForm extends Component {
  state = {
    fullName: "",
    phone: "",
    email: "",
    password: "",
    showFullNameError: false,
    showPhoneError: false,
    showEmailError: false,
    showPasswordError: false,
  };

  onBlurFullName = () => {
    const { fullName } = this.state;
    const isValidFullName = fullName !== "";
    this.setState({ showFullNameError: !isValidFullName });
  };

  onChangeFullName = (event) => {
    this.setState({ fullName: event.target.value });
  };

  onBlurPhone = () => {
    const { phone } = this.state;
    const isValidPhone = phone !== "";
    this.setState({ showPhoneError: !isValidPhone });
  };

  onChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  onBlurEmail = () => {
    const { email } = this.state;
    const isValidEmail = email !== "";
    this.setState({ showEmailError: !isValidEmail });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onBlurPassword = () => {
    const { password } = this.state;
    const isValidPassword = password !== "";
    this.setState({ showPasswordError: !isValidPassword });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { fullName, phone, email, password } = this.state;
    const isValidFullName = fullName !== "";
    const isValidPhone = phone !== "";
    const isValidEmail = email !== "";
    const isValidPassword = password !== "";

    if (isValidFullName && isValidPhone && isValidEmail && isValidPassword) {
      localStorage.setItem("fullName", fullName);
      const { history } = this.props;
      history.replace("/home");
    } else {
      this.setState({
        showFullNameError: !isValidFullName,
        showPhoneError: !isValidPhone,
        showEmailError: !isValidEmail,
        showPasswordError: !isValidPassword,
      });
    }
  };

  render() {
    const {
      fullName,
      phone,
      email,
      password,
      showFullNameError,
      showPhoneError,
      showEmailError,
      showPasswordError,
    } = this.state;
    return (
      <div className="sign-up-form-container">
        <h1 className="mobile-heading">Create Account</h1>
        <img
          src="https://lionadz.com/wp-content/uploads/2023/10/Untitled-design-34.png"
          className="sign-up-image"
          alt="website sign-up"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <h1 className="desktop-heading">Create Account</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              value={fullName}
              placeholder="Full Name"
              onChange={this.onChangeFullName}
              onBlur={this.onBlurFullName}
            />
            {showFullNameError && <p className="error-message">*Required</p>}
            <input
              type="text"
              className="input-field"
              value={phone}
              placeholder="Phone"
              onChange={this.onChangePhone}
              onBlur={this.onBlurPhone}
            />
            {showPhoneError && <p className="error-message">*Required</p>}
            <input
              type="email"
              className="input-field"
              value={email}
              placeholder="Email"
              onChange={this.onChangeEmail}
              onBlur={this.onBlurEmail}
            />
            {showEmailError && <p className="error-message">*Required</p>}
            <input
              type="password"
              className="input-field"
              value={password}
              placeholder="Password"
              onChange={this.onChangePassword}
              onBlur={this.onBlurPassword}
            />
            {showPasswordError && <p className="error-message">*Required</p>}
          </div>
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
