import React from 'react'

import "./login.css"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
  
    const Navigate = useNavigate();
  
    const handleLogin = () => {
      // Hardcoded login for demo purposes
      if (username === 'demo' && password === 'password') {
        alert(" successfully logged in")
      }
      if (username === '' || password === '') {
        alert("all fields are mandatory")
      }
       if (username !== 'demo' || password !== 'password') {
        alert("invalid input")
      }
      else{
        Navigate("/dashboard");
      }
    };

  return (
   <>


<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Credentials" value={username} onChange={(e) => setUsername(e.target.value)}/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button class="button login__submit" onClick={handleLogin}>
					<span class="button__text">Log In Now</span>
                    
					<i class="button__icon fas fa-chevron-right"></i>
                    
				</button>				
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

</>
  
  )
}

export default  Login;
