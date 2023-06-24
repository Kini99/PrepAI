import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBCol,
  MDBRow
}
from 'mdb-react-ui-kit';
import {FcGoogle} from "react-icons/fc";
import {BsGithub} from "react-icons/bs";
import {tw} from "twind";
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const token=localStorage.getItem("loginToken")

  const navigate=useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };

    axios.post(`${process.env.REACT_APP_SERVER}/login`, payload)
      .then((res) =>{
        if(res.data.token){
          localStorage.setItem("logintoken",res.data.token)
          navigate("/dashboard")
         }
         alert(res.data.msg);
}
        )
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  const handleSignup = () => {
    const payload = {
      name,
      email,
      password,
    };

    axios.post(`${process.env.REACT_APP_SERVER}/signup`, payload)
      .then((res) =>{
          navigate("/login")
         alert(res.data.message);
        })
      .catch((err) => alert(err.response.data.message));

    setEmail("");
    setPassword("");
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
             
              <MDBBtn color='none' className='m-1' style={{ color: '#1266f1' }}>
                <Link to={`http://localhost:1111/auth/google`}><FcGoogle size={"30px"} /></Link>
              </MDBBtn>

              <MDBBtn color='none' className='m-1' style={{ color: '#1266f1' }}>
                <BsGithub style={{color:"black"}} size={"30px"} />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>
          <p className="text-center">Not a member? <span onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}className={tw `cursor-pointer`}>Register</span></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>

            <MDBBtn color='none' className='m-1' style={{ color: '#1266f1' }}>
                <Link to={`http://localhost:1111/auth/google`}><FcGoogle size={"30px"} /></Link>
              </MDBBtn>

              <MDBBtn color='none' className='m-1' style={{ color: '#1266f1' }}>
                <BsGithub style={{color:"black"}} size={"30px"} />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' value={name} onChange={(e)=>setName(e.target.value)} required />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleSignup}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
  );
}

export default Login;