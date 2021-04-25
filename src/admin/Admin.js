import React, {Component} from 'react'
import classes from './Admin.module.css'
import Input from '../components/UI/input/Input'
import Button from '../components/UI/button/Button'
import Select from '../components/UI/select/Select'
import {createControl, validate, validateForm} from '../form/formFramework'


function createFormControls() {
  return {
    title: createControl({
      id: 1,
      value: '',
      type: 'text',
      label: 'Название товара:',
      errorMessage: 'Вы не указали название товара.',
      valid: false,
      touched: false
      }, {required: true}
    ),
    price: createControl({
      id: 2,
      value: '',
      type: 'text',
      label: 'Цена товара:',
      errorMessage: 'Вы не указали цену.',
      valid: false,
      touched: false
    }, {required: true}
    ),
    connect: createControl({
      id: 3,
      value: '',
      type: 'text',
      label: 'Краткое описание и связь:',
      errorMessage: 'Вы не описали товар.',
      valid: false,
      touched: false
    }, {required: true}
  )

  }
}


class Admin extends Component {

  constructor(props) {
      super(props);
      this.loginHandler = this.loginHandler.bind(this);
      this.fileInput = React.createRef()
    }

  state = {
    user: [],
    isFormValid: false,
    rightAnswer: 'обувь',
    formControls: createFormControls()
  }

  loginHandler = event => {
    event.preventDefault()

    const user = this.state.user.concat()

    const {title, price, connect} = this.state.formControls

     const questionItem = {
      answers: [
        {image: this.fileInput.current.files[0].name},
        {name: 'Боря'},
        {text: title.value},
        {text: price.value},
        {text: connect.value},
        {rightAnswer: this.state.rightAnswer}
      ]
     }

     console.log(questionItem.answers)

    this.setState({
        user,
        isFormValid: false,
        rightAnswer: 'обувь',
        formControls: createFormControls()
    })

    try {
       this.setState({
         user: [],
         isFormValid: false,
         rightAnswer: 'обувь',
         formControls: createFormControls()
       })
    } catch(e) {
       console.log(e)
     }

  }


  changeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls } // копия state
    const control = { ...formControls[controlName] } // копия control

    control.value = event.target.value
    control.touched = true
    control.valid = validate(control.value, control.validation)

    formControls[controlName] = control

    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
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
          onChange={event => this.changeHandler(event, controlName)}
        />
      )
    })
  }

  selectChangeHandler = event => {
    this.setState({
      rightAnswer: event.target.value
    })
  }


  render() {
    const inputType = this.type || 'file'
    const htmlFor = `${inputType}-${Math.random()}`

    const select = <Select
      label="Выберите категорию товара:"
      value={this.state.rightAnswer}
      onChange={this.selectChangeHandler}
      options={[
        {text: 'Обувь', value: 'Обувь'},
        {text: 'Одежда', value: 'Одежда'},
        {text: 'Акксесуары', value: 'Акксесуары'}
      ]}
    />

    return (
        <div className={classes.Admin}>
          <div className="container">
            <div className={classes.titleAdmin} style={{textAlign: 'center'}}>
              <h1>Личный кабинет</h1>
              <p>Добро пожаловать <span>{this.props.name}</span></p>
            </div>
            <form
             onSubmit={this.submitHandler}
             className={classes.adminForm}
            >
              <div className={classes.fileInput}>
                <label htmlFor={htmlFor}>Фото товара:</label>
                <input
                className="form-control"
                id={htmlFor}
                type="file"
                ref={this.fileInput}
                />
              </div>
              <div className={classes.name}>
                <label htmlFor={htmlFor}>Ваше имя:</label>
                <input
                className="form-control"
                id={htmlFor}
                type="text"
                placeholder='Боря'
                />
              </div>
              { this.renderInputs() }
              {select}
              <Button
              type="btn-success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
              >
              Опубликовать
              </Button>
            </form>
          </div>
        </div>
    )
  }
}

export default Admin
