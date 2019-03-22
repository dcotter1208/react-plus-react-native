import React from "react";
import { firebaseSignUp } from "../networking/api";
class Login extends React.Component {
  private signUpWithFirebase() {
    firebaseSignUp("donovan.cotter@detroitlabs.com", "test1234!");
  }

  private renderInputFields() {
    return (
      <div className="login-content-container">
        <div>
          <input
            className="credential-input"
            type="input"
            placeholder="email"
          />
          <input
            className="credential-input"
            type="input"
            placeholder="password"
          />
        </div>
      </div>
    );
  }

  render() {
    this.signUpWithFirebase();
    return this.renderInputFields();
  }
}

export default Login;
