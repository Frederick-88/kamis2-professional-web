import React, {Component} from "react";
import axios from "axios"
import "./style.css"

class NavbarUtama extends Component {
  
  state = {
    name:"",
    email:""
  }

  submit = (event) => {
    event.preventDefault();

    const { name, email } = this.state
    axios.post("http://localhost:3001/Email", {
        
      name: name,
      email: email,
    })
    .then((response) => { 
      console.log(response);
      window.alert("Congratulations. Looking forward to do big things together with you.")
    })

  }

  onChange = (event) => {
    // console.log(event.currentTarget.name);
    this.setState({[event.currentTarget.name] : event.currentTarget.value})
  }

  render(){
  return (
    <div className="footer text-center">
            Mind to Create Great things together with me? <br/>
            Let's start this Great team!
            <div> 
              <form onSubmit={this.submit} className="row mt-4 ">
                <div className="col-6">
                  <label>Name :</label>
                  <input className="ml-4 label-fx" type="text" name="name" placeholder="Your Name"
                      onChange={this.onChange}
                      // value={this.state.name}
                  />
                </div>

                <div className="col-6">
                  <label>Email :</label>
                  <input className="ml-4 label-fx" type="email" name="email" placeholder="Your Email"
                      onChange = {this.onChange}
                  />
                </div>
                <div className="text-center">
                <button type="submit" className="submit-button ">Yes, Let's start this Great Work!</button>
                </div>
              </form>
            </div>
        </div>
  );
  }
};

export default NavbarUtama;