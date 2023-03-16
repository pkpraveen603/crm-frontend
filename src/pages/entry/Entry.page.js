import React, {useEffect, useState} from "react";

import './entry.style.css'
import {LoginForm} from "../../components/login/login.comp";
import {ResetPassword} from "../../components/reset-password/resetPassword.comp";

export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoad, setFormLoad] = useState('login');

    const handleOnChange = (e) => {
        const {name, value} = e.target

        switch (name) {
            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            default:
                break;
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            return alert("Please enter all the fields in login form!");
        }

        //TODO: call api to submit the form
        console.log(email,password)
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            return alert("Please enter all the fields in login form!");
        }

        //TODO: call api to reset password
        console.log(email)
    }

    const formSwitcher = (formType) => {
        setFormLoad(formType);
    }

    return  (
        <div className="entry-page">
            <div className="jumbotron form-box">
                {formLoad === "login" && (
                    <LoginForm
                        handleOnChange = {handleOnChange}
                        handleOnSubmit = {handleOnSubmit}
                        formSwitcher = {formSwitcher}
                        email = {email}
                        password = {password}
                        >
                    </LoginForm>
                )}

                {formLoad === "reset" && (
                    <ResetPassword
                        handleOnChange = {handleOnChange}
                        handleOnResetSubmit = {handleOnResetSubmit}
                        formSwitcher = {formSwitcher}
                        email = {email}
                        >
                    </ResetPassword>
                )}
            </div>
        </div>
    )
}