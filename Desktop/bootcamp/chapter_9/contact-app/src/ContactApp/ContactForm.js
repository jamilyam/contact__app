import React, {Component} from 'react'

class ContactForm extends Component {
  state={
    name:"",
    lastName:"",
    number:""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name: this.state.name,
      lastName: this.state.lastName,
      number: this.state.number
    };
    this.props.onSubmit(contact);
    this.setState({
      name: "",
      lastName: "",
      number: ""
    })
  }
  handleInputName = (e) => {
    const text = e.target.value;
    this.setState({
      name: text
    })
  }
  handleInputLast=(e)=>{
    const text = e.target.value;
    this.setState({
      lastName: text
    })
  }
  handleInputNumber = (e) => {
    const text = e.target.value;
    this.setState({
      number: text
    })
  }

  render(){
    return(
      <div>
        <form 
          onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleInputName} 
            value={this.state.name} 
            type="text" required
            placeholder="name"/>
          <input 
            onChange={this.handleInputLast} 
            value={this.state.lastName} 
            type="text" required
            placeholder = "lastName"/>
          <input 
            onChange={this.handleInputNumber} 
            value={this.state.number} 
            type="text" required
            placeholder = "number"/>
          <div>
            <button 
              type = "submit"
            >Submit</button> 
            <button
              type = "reset"
            >Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
export default ContactForm;
