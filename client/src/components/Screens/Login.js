import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"Invalid email address",classes:"#c62828 red darken-3"})
            return false;
        }
        fetch("/signin",{     // Note: Here the path should be same as defined in route on server side i.e. /signin
            method:"post",    // Also here the full path is not taken as http://localhost:5000/signin 
            headers:{         // as http://localhost:5000   is defined as proxy in package.json as cors module is not installed  
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    email:email,
                    password:password 
                }
            )
        }).then(res=>res.json()).then(data=>{
                console.log(data);
                if(data.error){
                    M.toast({html:data.error,classes:"#c62828 red darken-3"})
                }else{
                    M.toast({html:data.message,classes:"#ba68c8 purple lighten-2"})
                    history.push("/");
                }
        }).catch(err=>{
            console.log(err);
        })
    }
        
    return (
        <div className="mycard">            
            <div className="card auth-card">
               <h3>Social Networking</h3>
               <input 
               type="text" 
               placeholder="Enter email address"
               value={email} 
               onChange={(e)=>{
                   setEmail(e.target.value)
                   }} />
               <input 
               type="password" 
               placeholder="Enter your password"
               value={password} 
               onChange={(e)=>{
                   setPassword(e.target.value)
                   }} />
               <button type="submit" 
               onClick={() =>{
                       PostData()
                       }}
               className="btn waves-effect waves-light #ff5252 red accent-2"><i className="material-icons right"
               >send</i>Login</button>               
               <h6><Link to="/signup">&nbsp;&nbsp;Don't have an account? Click here</Link></h6>
            </div>
        </div>
    );
}
export default Login;
