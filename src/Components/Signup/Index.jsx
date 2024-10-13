import React , {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setFullnameContext, setUsernameContext, setEmailContext, setIdContext } from "../../User/user.js"

const Form = () => {
  

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [success, setSuccess] = useState(false);
    const [id, setid] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        if(password !== confirmPassword){
            throw Error("Password should be same")
        }

        const user = {
            username: username,
            email: email,
            password: password,
            fullname: fullname
        }

        try{
            const response = await axios.post("http://localhost:8000/api/v1/users/register",user);
            console.log(response);
            if(response.data.data._id !== ""){
                setid(response.data.data._id)
                setSuccess(true);
            }


        }
        catch(err){
            console.log(err);
        }
        
    }

    if(success){
        dispatch(setUsernameContext(username));
        dispatch(setEmailContext(email));
        dispatch(setFullnameContext(fullname));
        dispatch(setIdContext(id));
        return <Navigate to="/" />

    }
    


  return (
    <StyledWrapper className="w-full h-screen flex justify-center items-center">
      <div className="container">
        <div className="heading">Sign Up</div>
        <form action="" className="form">

        <input
            required
            className="input"
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Fullname"
            onChange={(e) =>setFullname(e.target.value)}
          />
        
        <input
            required
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) =>setUsername(e.target.value)}
          />
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) =>setEmail(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) =>setPassword(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) =>setConfirmPassword(e.target.value)}
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <button className="login-button" onClick={handleSubmit}>Sign Up</button>
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[10px]">
            Already a Member ?{" "}
             <a href="#">Sign Up</a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
  max-width: 350px;
  background: #F8F9FD;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
  margin: 20px;
}

.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: rgb(16, 137, 211);
}

.form {
  margin-top: 20px;
}

.form .input {
  width: 100%;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}

.form .input::-moz-placeholder {
  color: rgb(170, 170, 170);
}

.form .input::placeholder {
  color: rgb(170, 170, 170);
}

.form .input:focus {
  outline: none;
  border-inline: 2px solid #12B1D1;
}

.form .forgot-password {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}

.form .forgot-password a {
  font-size: 11px;
  color: #0099ff;
  text-decoration: none;
}

.form .login-button {
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
  transform: scale(1.03);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
}

.form .login-button:active {
  transform: scale(0.95);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
}

.social-account-container {
  margin-top: 25px;
}

.social-account-container .title {
  display: block;
  text-align: center;
  font-size: 10px;
  color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;
}

.social-account-container .social-accounts .social-button {
  background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
  border: 5px solid white;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
  transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
  fill: white;
  margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
  transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
  transform: scale(0.9);
}

.agreement {
  display: block;
  text-align: center;
  margin-top: 15px;
}

.agreement a {
  text-decoration: none;
  color: #0099ff;
  font-size: 9px;
}
`;

export default Form;
