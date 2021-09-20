import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {
    const history = useHistory();
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const PostData = () =>{
        //const emailRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
       if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
       {          
            M.toast({html:"Invalid email address",classes:"#c62828 red darken-3"})
            return false;
       }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    name:name,
                    email:email,
                    password:password
                }
            )
        }).then(res=>res.json()).then(data=>{
           // console.log(data);
           if(data.error){
               M.toast({html:data.error,classes:"#c62828 red darken-3"})
           }else{
               M.toast({html:data.message,classes:"#ba68c8 purple lighten-2"})
               //M.toast({html:data.message,classes:"#c6ff00 lime accent-3"})
               history.push("/login");
           }
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <div className="mycard">
            <div className="card auth-card">
                <h3>Social Networking</h3>
                <input type="text" 
                placeholder="Enter your name"
                value={name} 
                onChange={(e)=>{
                    setName(e.target.value)
                    }} />
                <input type="text" 
                placeholder="Enter your email address"
                value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                    }}/>
                <input type="password" 
                placeholder="Enter your password"
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value)
                    }} />
                <button type="submit" 
                onClick={() => {
                    PostData()
                    }}
                    className="btn waves-effect waves-light #ff5252 red accent-2"><i className="material-icons right">person_add</i>Signup</button>
                <h6><Link to={`/login`}>&nbsp;&nbsp;Already have an account?</Link></h6>
            </div>
        </div>
    );
}
export default Signup;