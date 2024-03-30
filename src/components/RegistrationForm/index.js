// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    input1: 'input-firstName',
    firstName: '',
    input2: 'input-lastName',
    lastName: '',
    clicked: false,
  }

  handleBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({input1: 'input-firstName1'})
    } else {
      this.setState({input1: 'input-firstName'})
    }
  }

  handleBlur1 = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({input2: 'input-lastName1'})
    } else {
      this.setState({input2: 'input-lastName'})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickSubmitButton = event => {
    event.preventDefault()
    const {input1, input2, firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({input1: 'input-firstName1'})
    } else {
      this.setState({firstName: ''})
    }
    if (lastName === '') {
      this.setState({input2: 'input-lastName1'})
    } else {
      this.setState({lastName: ''})
    }

    if (
      input1 === 'input-firstName' &&
      input2 === 'input-lastName' &&
      lastName !== '' &&
      firstName !== ''
    ) {
      this.setState(prevState => ({clicked: !prevState.clicked}))
    }
  }

  onClickSubmitForm = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  getForm = () => {
    const {input1, input2, firstName, lastName} = this.state
    const alert1 =
      input1 === 'input-firstName' ? '' : <p className="message">Required</p>

    const alert2 =
      input2 === 'input-lastName' ? '' : <p className="message1">Required</p>

    return (
      <div className="form-container">
        <form className="login-form" onSubmit={this.onClickSubmitButton}>
          <label className="label-1" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            onBlur={this.handleBlur}
            type="text"
            className={input1}
            id="firstName"
            placeholder="First name"
            value={firstName}
            onChange={this.onChangeFirstName}
          />
          {alert1}
          <label className="label-2" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            onBlur={this.handleBlur1}
            type="text"
            className={input2}
            id="lastName"
            placeholder="Second name"
            value={lastName}
            onChange={this.onChangeLastName}
          />
          {alert2}
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }

  getSubmitForm = () => (
    <div className="submit-form-container">
      <img
        className="success-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="confirmation">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-response-button"
        onClick={this.onClickSubmitForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {clicked} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Registration</h1>
        {clicked ? this.getSubmitForm() : this.getForm()}
      </div>
    )
  }
}

export default RegistrationForm
