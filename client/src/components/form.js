import React from 'react';
import FormErrors from './form-error';


const axios = require('axios');

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            fileUpload: null,
            responseSuccess: false,
            name: '',
            phone: '+7 ',
            email: '',
            comment: '',
            isCallbackCheckbox: false,
            formErrors: {
                email: '',
                phone: '',
                comment: '',
            },
            emailValid: false,
            phoneValid: false,
            formValid: false

        }
    }

    onFileHandler = (e) => {
        const value = e.target.files[0]
        this.setState({ "fileUpload": value },
        () => { this.validateField("fileUpload", value) }
        )
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let phoneValid = this.state.phoneValid;
      let fileUpload = this.state.fileUpload;
      switch(fieldName) {
            case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              fieldValidationErrors.email = emailValid ? '' : 'Обязательно оставьте почту';
              break;
            case 'phone':
              phoneValid = value.length >= 11;
              fieldValidationErrors.phone = phoneValid ? '': 'Обязательно оставьте телефон';
              break;
            case 'fileUpload':
              console.log(fileUpload["name"].split(".")[1])
              break;
            default:
              break;
      }
      this.setState(
          {formErrors: fieldValidationErrors,
                emailValid: emailValid,
                phoneValid: phoneValid
      }, this.validateForm);
    }

    validateForm() {
      this.setState({
          formValid: this.state.emailValid && this.state.phoneValid
      });
    }

    onFormHandler = (e) => {
            const name = e.target.name
            const value = e.target.value
            this.setState({ [name]: value },
            () => { this.validateField(name, value) }
            )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const file =  this.state.fileUpload
        const form = new FormData();
        form.append('fileUpload', file)
        form.append("name", this.state.name);
        form.append("phone", this.state.phone);
        form.append("email", this.state.email);
        form.append("comment", this.state.comment);
        form.append("isCallbackCheckbox", this.state.isCallbackCheckbox);

        axios({method: "POST",
               url: "http://localhost:3100/contact-form",
               data: form,
              })
            .then((res) => {
                 console.log(res.data.message);

              })
            .catch((err)=> {
                console.log(err);
            });
             this.setState({
                responseSuccess:true
            })
        }

    contactForm() {
        return (
              <div className="contacts-form">
                <div className="">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form method="post" onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder={"email"}
                           name="email"
                           className={`${this.errorClass(this.state.formErrors.email)}`}
                           onChange={this.onFormHandler}
                    />
                    <div className="contacts-phone">
                           <input type="text"
                                  name="phone"
                                  className={`${this.errorClass(this.state.formErrors.phone)}`}
                                  placeholder={"телефон"}
                                  onChange={this.onFormHandler}
                           />

                           <input name="isCallbackCheckbox"
                                  type="checkbox"
                                  className="phone-checkbox"
                                  onChange={this.onFormHandler}
                           />

                            <label htmlFor="isCallbackCheckbox">перезвонить мне</label>
                    </div>
                    <input type="text"
                           name="name"
                           placeholder={"имя"}
                           onChange={this.onFormHandler}
                    />
                    <input type="file"
                           name="fileUpload"
                           placeholder={"Выбирите файл"}
                           onChange={ e => {this.onFileHandler(e)}}

                    />
                    <textarea rows="10"
                              cols="45"
                              name="comment"
                              placeholder={"комментарий"}
                              onChange={this.onFormHandler}
                    />
                    <input type="submit" disabled={!this.state.formValid} className="contact-btn"/>
                </form>
            </div>
            )
    }

    formAnswer() {
        return (
            <div className="contacts-form">
                <h5 className="text-center">Скоро мы свяжемся с вами!</h5>
            </div>
        )
    }

    render() {
        let { responseSuccess } = this.state
        let card

        if (responseSuccess) {
           card = this.formAnswer()
        } else {
           card = this.contactForm()
        }

        return (
            <>
                {card}
            </>
        )
    }

}








