import { Component } from "react";
import { signUp } from "../../../utilities/users-service";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;

      const user = await signUp(formData);
      this.props.setUser(user);

    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="container mt-4">
        <div className="card p-4">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm</label>
              <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required className="form-control"/>
            </div>
            <button type="submit" disabled={disable} className="btn btn-primary">SIGN UP</button>
          </form>
        </div>
        {this.state.error && <div className="alert alert-danger mt-3" role="alert">{this.state.error}</div>}
      </div>
    );
  }
}