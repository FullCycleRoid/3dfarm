import React from 'react';

export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            uploadFile: null,
            switchCard: false,
            viewer: null
        };
        this.changeCard = this.changeCard.bind(this)
        this.toggleFile = this.toggleFile.bind(this)
    }


    changeCard() {

        const formData = new FormData();
		formData.append('calculatorFile', this.state.uploadFile);
		fetch(
			'http://localhost:3100/calculator',
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
            switchCard: true
        })
    }

    toggleFile(e) {
        this.setState({
            uploadFile: e.target.files[0]
        })
	};

    firstCard() {
        return (
            <div className="first-card">
                <label>=></label>
                <input type="file" name="calculator-file" placeholder="Выбирите файл" onChange={this.toggleFile} className="upload-file"/>
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
      const switchCard = this.state.switchCard
      if (switchCard) {
          card = this.secondCard()
      } else {
          card = this.firstCard()
      }
      return (
        <div className="card">
            {card}
        </div>
      );
    }
}