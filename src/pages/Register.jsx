import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/reducers/userSlice";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [registerFields, setRegisterFields] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        tc: false,  
    });


    const dispatch = useDispatch();


  const handleRegisterField = (e) => {
    if (e.target.name === 'tc') {
        setRegisterFields({...registerFields, [e.target.name]: e.target.checked})
    }else{
        setRegisterFields({...registerFields, [e.target.name]: e.target.value})
    }
  }


  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(registerFields))
    .then(res => {
      if (res.payload.status === 'successful') {
        navigate('/');

      }else{
          setError(res.payload.message)
      }
    })
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={registerFields.name}
           onChange={handleRegisterField}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="email"
          name="email"
          value={registerFields.email}
           onChange={handleRegisterField}
          placeholder="Enter Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={registerFields.password}
           onChange={handleRegisterField}
          placeholder="Enter Password"
        />
        <br />
        <input
          type="password"
          name="cpassword"
          value={registerFields.cpassword}
           onChange={handleRegisterField}
          placeholder="Confirm Password"
        />
        <br />
        <input type="checkbox" name="tc" onChange={handleRegisterField} />
        <label htmlFor="">Agree term & Condition</label>
        <br />
        <button onClick={handleRegister}>Submit</button>
      </form>
      <div>
        <h3> {error}</h3>
      </div>
    </div>
  );
};

export default Register;
