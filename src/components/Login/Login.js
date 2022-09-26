import React from 'react';
import "../../styles/Layout.css";
import login_formBox from "../../styles/SignUp.css";
import Button from '../SignUp/Button';
import Input from '../SignUp/Input';
import LoginBanner from './LoginBanner';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main className='main subMain'>
            <div className="container">
                <div className="row">
                    <LoginBanner />
                    <LoginForm className={`${login_formBox} `}>
                        <Input type="email" placeholder="Enter Email" />
                        <Input type="password" placeholder="Enter Password" />
                        <Button>Submit Now</Button>
                        <p>Don't have an account? <Link to="/signup">SignUp</Link> instead.</p>
                    </LoginForm>
                </div>
            </div>
        </main>
    );
};

export default Login;