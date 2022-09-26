import React from 'react';
import SignUpBanner from './SignUpBanner';
import "../../styles/Layout.css"
import login_formBox from "../../styles/SignUp.css"
import Input from './Input';
import SignUpForm from './SignUpForm';
import CheckBox from './CheckBox';
import Button from './Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <main className='main subMain'>
            <div className="container">
                <div className="row">
                    <SignUpBanner />
                    <SignUpForm className={`${login_formBox} `} >
                        <Input type="text" placeholder="Enter Name" />
                        <Input type="email" placeholder="Enter Email" />
                        <Input type="password" placeholder="Enter Password" />
                        <Input type="password" placeholder="Confirm Password" />
                        <CheckBox text="I agree to the Terms &amp; Conditions" />
                        <Button>Submit Now</Button>
                        <p>Don't have an account? <Link to="/login">Login</Link> instead.</p>
                    </SignUpForm>
                </div>
            </div>
        </main>
    );
};

export default SignUp;