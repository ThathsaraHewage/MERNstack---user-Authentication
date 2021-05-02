import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from  "axios";
import AuthContext from "../../Context/AuthContext";

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");

    const {getLoggedIn} = useState(AuthContext);
    const history = useHistory();

    async function login(e){
        e.preventDefault();

        try{
            const loginData ={
                email,
                password,
            };
            await axios.post("http://localhost:5000/auth/login",loginData);
            await getLoggedIn();
            history.push("/");
        }
        catch(err){
            console.error(err);
        }
    } 
  return (
    <div className="container">
          <br/><br/><h1>Log in</h1><br/><br/>

        <form onSubmit={login} class="row g-3">
        <div class="col-md-6">
            <label for="Email" class="form-label">Email</label>
            <input 
                type="email"
                 class="form-control" 
                 id="email"
                    onChange={(e)=>
                        {setEmail(e.target.value)}
                    } 
                    value={email}
             />

        </div><br/>
        <div class="col-md-6">
            <label for="password" class="form-label">Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="password"
                onChange={(e)=>{
                    setPassword(e.target.value)}
                } 
                value={password}
            />
        </div><br/>
        
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Log in</button>
            <p>Don't have an account? <a href ="/register" class="navbar-brand" >Register</a></p>
        </div>
      
        </form>
        </div>

  );
}

export default Login;
