import React from 'react';
import clip from "../images/clip.png"
import FormErrors from './form-error';

const axios = require('axios');


export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formSent: false,
            uploadFile: null,
            switchCard: false,
            uploadFirstFormValid: false,
            formWasSendSuccessful: false,
            viewer: null,
            status: null,
            stlFileData: null,
            filename: "Выберите STL файл",
            emailValid: false,
            phoneValid: false,
            phone: '+7 ',
            email: '',
            formValid: false,
            formErrors: {
                email: '',
                phone: '',
            },

        };

        this.sendUploadFile = this.sendUploadFile.bind(this)
        this.toggleFile = this.toggleFile.bind(this)
    }

    sendUploadFile() {
        const formData = new FormData();
		formData.append('uploadFile', this.state.uploadFile);
		fetch(
			'http://localhost:3100/calculator',
			{
				method: 'POST',
				body: formData,
			}
		)
        .then((result) => {
            this.setState({
                status: result.status
            })
            return result.json()
        })
        .then( data => {
           this.setState({
               stlFileData: data,
               uploadFirstFormValid: true
           })
        })
        .catch((error) => {
            // console.error('Error:', error);
            this.setState({
                status: 500
            })
        });

        this.setState({
            switchCard: true
        })
    }


    handleSecondCardForm = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('fileUpload', this.state.uploadFile)
        form.append('stlFileData', JSON.stringify(this.state.stlFileData))
        form.append("phone", this.state.phone);
        form.append("email", this.state.email);

        axios({method: "POST",
               url: "http://localhost:3100/calculator-form",
               data: form,
              })
            .then((res) => {
                 // console.log(res.data.message);
                 this.setState({
                 formWasSendSuccessful: true
                 })

              })
            .catch((err)=> {
                // console.log(err);

            });

    }


    extValidator(filename) {
      const ext = filename.split(".").pop()
      if (ext === "stl") this.setState( {uploadFirstFormValid: true})
    }


    toggleFile(e) {
        this.setState({
            uploadFile: e.target.files[0],
            filename: e.target.files[0]["name"]
        })

        this.extValidator(e.target.files[0]["name"])
	};

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid
      let phoneValid = this.state.phoneValid
      switch(fieldName) {
            case 'email':
              // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              emailValid = true;
              fieldValidationErrors.email = emailValid ? '' : 'Обязательно оставьте почту';
              break;
            case 'phone':
              phoneValid = value.length >= 10;
              fieldValidationErrors.phone = phoneValid ? '': 'Обязательно оставьте телефон';
              break;
      }
      this.setState(
          {formErrors: fieldValidationErrors,
                emailValid: emailValid,
                phoneValid: phoneValid
      }, this.isFormValid);

    }

    isFormValid() {

      this.setState({
          formValid: this.state.emailValid && this.state.phoneValid
      });

    }

    onFormHandler = event => {
            this.setState({ [event.target.name]: event.target.value },
            () => { this.validateField(event.target.name, event.target.value) }
            )
    }


    firstCard(status) {
        let warning;
        if (status === 500) warning = "Неверное расширение файла. Выбирите stl файл"
        return (
            <div className="first-card">
                <p>{warning}</p>
                <label className="common-label" htmlFor="upload-stl">
                    <input id="upload-stl" type="file" name="calculator-file" onChange={this.toggleFile} className="upload-file"/>
                    {this.state.filename}
                    <img src={clip} alt=""/>
                </label>
                <input type="submit" placeholder="Рассчитать" disabled={!this.state.uploadFirstFormValid} onClick={this.sendUploadFile} className="first-card-calculator-btn"/>
            </div>
        )
    }

    thirdCard() {
        return (
                <div className="form-sent">
                    <h4>Спасибо!! Заявка принята</h4>
                </div>
                )
    }

    secondCard(fileData) {
        return (
            <div className="second-card">
                <div className="second-card-block">
                    <p className="calculator-info">
                        Калькулятор позволяет быстро оценить размеры модели и приблизительную стоимость печати.
                        Однако зачастую требуется разрезать, отредактировать модель,
                        провести оптимизацию под конкретные требования технологии печати и т д. Конечная стоимость печати может отличаться.
                        Оформите заказ, мы свяжемся в Вами и обсудим все детали проекта.
                    </p>
                    <ul className="file-settings">
                        <li>Параметры модели</li>
                        <li>Обьем: {fileData["volume"]} см<sup>3</sup></li>
                        <li>Размеры: ширина {fileData["x"]} мм</li>
                        <li>высота {fileData["y"]} мм</li>
                        <li>глубина {fileData["z"]} мм</li>
                    </ul>
                    <ul className="price-list">
                        <li>Стоимость</li>
                        <li>PLA и ABS: {fileData["basicFdm"]} рублей</li>
                        <li>Нейлон: {fileData["nylon"]} рублей</li>
                        <li>FormaX: {fileData["forMax"]} рублей</li>
                        <li>Фотополимер: {fileData["basicPhoto"]} рублей</li>
                        <li>Выжигаемый фотополимер: {fileData["burnPhoto"]} рублей</li>
                        <li>* указаны только некоторые материалы</li>
                    </ul>

                    <div className="form-block">
                        <form method="post"
                              onSubmit={this.handleSecondCardForm}
                              className="calculator-form"
                        >
                            <input type="text"
                               placeholder={"email"}
                               name="email"
                               className={`${this.errorClass(this.state.formErrors.email)}`}
                               onChange={this.onFormHandler}
                            />
                           <input type="text"
                                  name="phone"
                                  className={`${this.errorClass(this.state.formErrors.phone)}`}
                                  placeholder={"телефон"}
                                  onChange={this.onFormHandler}
                           />
                           <input
                                type="submit"
                                placeholder="Заказать"

                                className="second-card-calculator-btn"
                            />
                        </form>
                        <div className="calculator-formErrors">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                    </div>
                </div>


            </div>
        )
    }



    render() {
      let renderCard

      const {switchCard, status, stlFileData, formValid} = this.state
      if (!switchCard ) {
          renderCard = this.firstCard()
      }  else if (switchCard && status === 200 && formValid) {
          renderCard = this.thirdCard()
      } else {
          if (stlFileData === null) {
              renderCard =  "loading..."
          } else {
              renderCard = this.secondCard(stlFileData)
          }
      }


      return (
            <div className="card">
                {renderCard}
            </div>
      )

    }
}