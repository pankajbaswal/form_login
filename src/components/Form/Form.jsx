// import "./Form.css";
import isValidEmail from "../../helper/validateEmail";
import isValidPassword from "../../helper/validatePassword";
import { useState } from "react";


function Form() {
    const [formValues ,setFormValues] =useState({
        email:"",
        password:""
    });
    
    const handleValidatePassword = () =>{
        const password = formValues.password;
        if(!isValidPassword(password)){
            console.log("password is not up to mark");
        }
    }

    const handleValidateEmail = () =>{
        const email = formValues.email;
        if(!isValidEmail(email)){
            console.log("email is not up to mark");
        }
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        handleValidateEmail();
        handleValidatePassword();
        console.log(formValues);
    }
  return (
    <div>
        New Form
      <form onSubmit={handleFormSubmit}>
        <div className="wrapper email-input-wrapper">
          <input 
               type="email" 
               value={formValues.email}
               onChange={(event) =>setFormValues({...formValues , email : event.target.value})}
          />
        </div>
        <div className="wrapper Password-input-wrapper">
          <input 
              type="password" 
              value={formValues.password}
              onChange={(event) =>setFormValues({...formValues , password : event.target.value})}
          />
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Form;
