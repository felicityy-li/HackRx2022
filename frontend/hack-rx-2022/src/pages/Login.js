import "../styles/authentication.css";
import give_care_logo from "../pictures/give_care_logo.png";
import { useNavigate } from "react-router-dom";
import Joi from 'joi';
import axios from 'axios';

import { useEffect, useState } from "react";

export default function LoginPage() {

    const navigate = useNavigate();

    const [creds, setCreds] = useState({
        email: "",
        password: "",
        isError: false,
        errors: []
    });

    const signInSchema = Joi.object().keys({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required(),
        isError: Joi.boolean().required(),
        errors: Joi.array()
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            let valid = signInSchema.validate(creds, { abortEarly: false });

            if (valid.error) {
                setCreds((prevState) => ({
                    ...prevState,
                    isError: true,
                    errors: valid.error.details.map(item => item.message)
                }));
            } else {
                const authState = await signin();

                if (authState.status === 200) {
                    navigate("/");
                } else {
                    navigate("signin");
                }
            }
        } catch (error) {
            console.log(error);

            setCreds((prevState) => ({
                ...prevState,
                isError: true,
                errors: [error.message],
            }));
        }
    }


    const signin = async () => {
        const response = await axios.post('http://localhost:8080/api/signin', { email: creds.email, password: creds.password });
        return response;
    }

    const displayErrors = () => {
        return creds.errors.map(item => {
            console.log(item);
            return (<p>{item}</p>);
        })
    }

    return (
        <div className="spiltScreen">
            <div className="imgLeftSide">
                <img src={give_care_logo} alt="" />
            </div>

            <div className="textRightSide">
                <div className="title">Login</div>
                <form marginBottom="10px">
                    <label className="inputSection">
                        <input type="text" name="email" value={creds.email} placeholder="Email" className="input"
                            onChange={(e) => {
                                let newInput = e.target.value;
                                setCreds((prevState) => ({
                                    ...prevState,
                                    email: newInput
                                }
                                ));
                            }} />
                        <input type="password" name="password" value={creds.password} placeholder="Password" className="input"
                            onChange={(e) => {
                                let newInput = e.target.value;
                                setCreds((prevState) => ({
                                    ...prevState,
                                    password: newInput
                                }));
                            }} />
                    </label>
                </form>

                <div className="error-layout">
                    {displayErrors()}
                </div>

                <div className="linksSection">
                    <a class="signUpLink" href="/signup">
                        Don’t have an account?
                    </a>
                </div>

                <a href="/">
                    <button className="buttonAuth" onClick={(e) => onSubmit(e)}>Login</button>
                </a>
            </div>
        </div>
    );
}
