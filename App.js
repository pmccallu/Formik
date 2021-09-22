import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'
import styles from "./index.css";


function App() {
  const formik = useFormik({       // TODO: add a const called formik assigned to useFormik()
    initialValues: {
      emailField: '',
      password: '',
    },
    onSubmit: values =>{
      alert('Login Successful');
      console.log('form', values);
  },
 
  validate: values => {
    let errors = {};
    if(!values.email){
      errors.email = 'Field required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = 'Invalid email address';
    }
    if(!values.password) errors.password = 'Field required';
    return errors;
  },
});

  return (
    <div>
      <p>
        Hi welcome to Peter's first React app and log-in. Username and password are required, username must be in email format.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input id="emailField" type = "text" name = "email" onChange={formik.handleChange}
        value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input id="pswField" type = "text" name="password" onChange={formik.handleChange}
        value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
