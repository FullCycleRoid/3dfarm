import React from 'react';
const fs = require("fs");


export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            uploadFile: {},
            firstCard: true,
            isSelected: false
        };
        this.changeCard = this.changeCard.bind(this)
        this.toggleFile = this.toggleFile.bind(this)
    }

    changeCard() {
        const formData = new FormData();

		formData.append('File', this.file);

		fetch(
			'http://localhost:3100/upload',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
        });

        this.setState({
            firstCard: false
        })
    }

    toggleFile(e) {
        this.setState({
            uploadFile: e.target.files[0],
            isSelected: true
        })
	};

    fileCard() {
        return (
            <div className="first-card">
                <label>файл => туть</label>
                <input type="file" placeholder="Выбирите файл" onChange={this.toggleFile} className="upload-file"/>
                <input type="submit" placeholder="Рассчитать" onClick={this.changeCard} className="first-card-calculator-btn"/>
            </div>
        )
    }

    secondCard() {
        return (
            <div className="second-card">
                <ul className="file-settings">
                    <li>размер</li>
                    <li>масса</li>
                    <li>настройки</li>
                    <li>настройки</li>
                </ul>
                <ul className="price-list">
                    <li>fdm 30000</li>
                    <li>fdm 30000</li>
                    <li>fdm 30000</li>
                    <li>fdm 30000</li>
                    <li>fdm 30000</li>
                </ul>
                <input
                    type="submit"
                    placeholder="Заказать"
                    className="second-card-calculator-btn"
                />
            </div>
        )
    }

    render() {
      let card;
      const firstCard = this.state.firstCard
      if (firstCard) {
          card = this.fileCard()
      } else {
          card = this.secondCard()
      }
      return (
        <div className="card">
            {card}
        </div>
      );
    }
}