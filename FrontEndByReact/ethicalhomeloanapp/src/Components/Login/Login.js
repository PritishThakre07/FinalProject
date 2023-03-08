
import { useState } from 'react';
import './Login.css';

const Login = () => {

    const [popupStyle, setPopupStyle] = useState('hide');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const popup = () => {
        alert("Hi Here Am");
        setPopupStyle("login-popup");
        setTimeout(() => setPopupStyle('hide'), 3000)
    }

    const inputEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);

    }
    const inputPass = (event) => {
        console.log(event.target.value);
        setPass(event.target.value);
    }

    const DirectTo = () => {

        alert(email === "pritish" && pass === "p12345");

        if(email === "pritish" && pass === "p12345"){

            setPopupStyle("login-popup");
            setTimeout(() => setPopupStyle('hide'), 3000)
        }
        setEmail('')
        setPass('')

    }

    return (

        <div className='all'>

            <form onSubmit={DirectTo}>

                <div className='cover'>
                    <h1>Login</h1>
                    <h6>Please enter your login and password!</h6>
                    <input type={'text'} placeholder={'Username'} required value={email} onChange={inputEmail} />
                    <input type={'password'} placeholder={'Password'} required  value={pass} onChange={inputPass} />

                    <div className='login-btn' onClick={DirectTo}>Login</div> 
                    {/* <button type='submit' className='login-btn' >Login</button> */}
                    <h6>Forgot password?</h6>

                    {/* <p className='text'>Or Login Using </p> */}

                    {/* <div className='alt-login'>
                <div className='facebook'></div>
                <div className='google'></div>
            </div> */}

                    <div className={popupStyle}>
                        <h3>Login Failed</h3>
                        <p>
                            Invalid Credentials!
                        </p>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default Login;