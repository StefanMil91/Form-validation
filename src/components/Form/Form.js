import React, { Component } from 'react'

import Input from "../Input/Input";
import Button from "../Button/Button";
import  Validate  from "../FormValidator/FormValidator";

class Form extends Component {

    state = {
        form: {
            name: {
                elementType: 'input',
                config: {
                    type: 'text',
                    name: 'name',
                    placeholder: 'Your Name'
                },
                value: '',
                valid: false,
                errMsg: 'The first letter must be uppercase and d\'not must contain numbers!',
                touched: false
            },
            email: {
                elementType: 'input',
                config: {
                    type: 'text',
                    name: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                valid: false,
                errMsg: 'Please enter the correct e-mail adress!',
                touched: false
            },
            phone: {
                elementType: 'input',
                config: {
                    type: 'text',
                    name: 'phone',
                    placeholder: 'Your Phone Number'
                },
                value: '',
                valid: false,
                errMsg: 'Phone number must have minimum 9 digits',
                touched: false
            },
            city: {
                elementType: 'input',
                config: {
                    type: 'text',
                    name: 'city',
                    placeholder: 'City'
                },
                value: '',
                valid: false,
                errMsg: 'This input is required!',
                touched: false
            },
            messages: {
                elementType: 'textarea',
                config: {
                    type: 'text',
                    name: 'messages',
                    placeholder: 'Your Messages'
                },
                value: '',
                valid: true,
                errMsg: '',
                touched: true
            }
        },
        formValid: false,
        btnConfig: {
            type: 'submit'
        }
    }

    inputHendler = (e, identifier) => {
        // get value from input element
        let copyOfForm = { ...this.state.form };
        let id = e.target.name;
        copyOfForm[identifier].value = e.target.value;
        copyOfForm[identifier].touched = true;

        // Form Validation
        if (id !== 'messages') {
            copyOfForm[identifier].valid = Validate[id](copyOfForm[id].value)
            //console.log(copyOfForm[identifier]);
        }
         
        // set state
        this.setState({
            form: copyOfForm
        })
        
    }

    formHendler = (e) => {
        e.preventDefault();
        let formData = {};
        for (let key in this.state.form) {
            formData[key] = this.state.form[key].value;
        }
        // send data to server...
        console.log(formData);
        
    }

    render() {
        
        let dataForInputs = [];
        for (let key in this.state.form) {
            dataForInputs.push({
                id: key,
                config: this.state.form[key].config,
                elemetType: this.state.form[key].elementType,
                validError: this.state.form[key].errMsg,
                value: this.state.form[key].value,
                valid: this.state.form[key].valid,
                touched: this.state.form[key].touched
            })
        }
        //console.log(dataForInputs);
        
        const allInputs = dataForInputs.map(curr => {
            return (
                <Input
                    key={curr.id}
                    config={curr.config}
                    value={curr.value}
                    elementType={curr.elemetType}
                    inputHendler={(e) => this.inputHendler(e, curr.id)}
                    validError={curr.validError}
                    valid={curr.valid}
                    touched={curr.touched}
                />
            )
        } )

        return (
            <div className="col-9">
                <form onSubmit={this.formHendler} >
                    <h1 className="text-center text-primary py-5">Contact Form</h1>
                    {allInputs}
                    <Button config={this.state.btnConfig} name="Submit Form" />
                </form>
            </div>

        )
    }


}

export default Form;
