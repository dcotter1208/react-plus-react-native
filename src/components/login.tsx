import React from "react";
class Login extends React.Component {
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
    return this.renderInputFields();
  }
}

export default Login;
