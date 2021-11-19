import React from "react";

class CheckoutForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            creditCard: '',
            zipCode: '',
        }
    }
    //flag an alert if the credit card number or zip is not exactly  16 or 5
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.firstName === '' || this.state.lastName === '' || this.state.email === '') {
            alert('Input is not valid')
        }
        if (this.state.creditCard.length !== 16) {
            alert('Credit card number is not valid')
        }
        if (this.state.zipCode.length !== 5) {
            alert('Zip code is not valid')
        } else {
            alert(`Purchase complete ${this.props.total}`)
        }
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }
    render() {
        console.log(this.props.total)
        return (
            <form id='checkout' onSubmit={this.handleSubmit}>
                <h2>Checkout</h2>
                <label htmlFor='firstName'>First Name
                    <input
                        type='text'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleOnChange}
                    />
                </label>

                <label htmlFor='lastName'>Last Name
                    <input
                        type='text'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleOnChange}
                    />
                </label>

                <label htmlFor='email'>Email
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                </label>

                <label htmlFor='creditCard'>Credit Card
                    <input
                        type='text'
                        name='creditCard'
                        value={this.state.creditCard}
                        onChange={this.handleOnChange}
                        id='checkout'
                    />
                </label>

                <label htmlFor='zipCode'>Zip Code
                    <input
                        type='text'
                        id='zipCode'
                        name='zipCode'
                        value={this.state.zipCode}
                        onChange={this.handleOnChange}
                    />
                </label>
                <button type='submit'>Buy Now</button>
            </form>

        )
    }
}

export default CheckoutForm