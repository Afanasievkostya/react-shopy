import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './About.module.css';
import Input from '../../components/UI/input/Input';
import Button from '../../components/UI/button/Button';
import is from 'is_js'

class About extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Ваш Email:',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль:',
        errorMessage: 'Введите корректный пароль.',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }


  loginHandler = () => {
    this.props.about(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    )
  }

  submitHandler = event => {
    event.preventDefault()
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls } // копия state
    const control = { ...formControls[controlName] } // копия control

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
        <div className={classes.About}>
          <div className="container">
            <div className="titleAbout" style={{textAlign: 'center'}}>
              <h1>Авторизация</h1>
            </div>
            <form
             onSubmit={this.submitHandler}
             className={classes.aboutForm}
            >
              { this.renderInputs() }

              <div className={classes.toSubmit}>
                <Button
                  type="btn-success"
                  onClick={this.loginHandler}
                  disabled={!this.state.isFormValid}
                >
                Войти
                </Button>

                <Link
                  to="/regitrant"
                  className={classes.registrat}
                >
                Регистрация
                </Link>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default About;
