import React, { useState } from 'react';
import "./Register.css"

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const registerHandle =()=>{
    console.log(name,email,password)
  }
    return (
        <div>
          <h3>Please Register</h3>
          <div className='from'>
            <label htmlFor=''>Name</label>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/><br/>
            <label htmlFor=''>Email</label>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} required></input><br/>
            <label htmlFor=''>Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} required></input><br/>
            <button onClick={registerHandle} className='button'>Regiser</button>
          </div>  
        </div>
    );
};

export default Register;