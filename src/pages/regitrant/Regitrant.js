import React, {Component} from 'react';
import classes from './Regitrant.module.css';
import Input from '../../components/UI/input/Input';
import Button from '../../components/UI/button/Button';
import is from 'is_js';

class Regitrant extends Component {
  state = {
    isFormValid: false,
    formControls: {
      displayName: {
        value: '',
        type: 'text',
        label: 'Введите ваше имя:',
        errorMessage: 'Введите корректное имя.',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 2
        }
      },
      email: {
        value: '',
        type: 'email',
        label: 'Введите Email:',
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
        label: 'Создайте пароль:',
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

  registerHandler = () => {
    this.props.regitrant(
      this.state.formControls.displayName.value,
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
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
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

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

        <div className={classes.Regitrant}>
          <div className="container">
            <div className="titleAbout" style={{textAlign: 'center'}}>
              <h1>Регистрация</h1>
            </div>
            <form
              onSubmit={this.submitHandler}
              className={classes.aboutForm}
            >
              { this.renderInputs() }
              <div className={classes.toSubmit}>
                <Button
                  type="btn-primary"
                  onClick={this.registerHandler}
                  disabled={!this.state.isFormValid}
                >
                Зарегистрироваться
                </Button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default Regitrant;
