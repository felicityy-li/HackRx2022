import "../styles/authentication.css";
import give_care_logo from "../pictures/give_care_logo.png";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUpPage() {

    const navigate = useNavigate();

    const signUpSchema = Joi.object().keys({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required().min(5),
        confirmNewPassword: Joi.string().required().min(5),
        firstname: Joi.string().required().min(5),
        lastname: Joi.string().required(),
        phonenumber: Joi.string().required(),
        isError: Joi.boolean().required(),
        errors: Joi.array()
    });

    const [creds, setCreds] = useState({
        email: "",
        password: "",
        confirmNewPassword: "",
        firstname: "",
        lastname: "",
        phonenumber: "",
        isError: false,
        errors: []
    });

    const displayErrors = () => {
        if (creds.errors) {
            return creds.errors.map(item => {
                console.log(item);
                return (<p>{item}</p>);
            })
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            let valid = signUpSchema.validate(creds, { abortEarly: false });

            if (valid.error) {
                setCreds((prevState) => ({
                    ...prevState,
                    isError: true,
                    errors: valid.error.details.map(item => item.message)
                }));
            } else {
                const authState = await signup();

                if (authState.status === 200) {
                    navigate("/");
                } else {
                    navigate("signup");
                }
            }
        } catch (error) {
            console.log(error);
            setCreds((prevState) => ({
                ...prevState,
                isError: true,
                errors: error.message,
            }));
        }
    };

    const signup = async () => {
        const response = await axios.post('http://localhost:8080/api/signup',
            {
                email: creds.email,
                password: creds.password,
                firstname: creds.firstname,
                lastname: creds.lastname,
                phonenumber: creds.phonenumber
            });

        return response;
    }

    return (
        <div className="spiltScreen">
            <div className="imgLeftSide">
                <img src={give_care_logo} alt="" className="brandIMG" />
            </div>

            <div className="textRightSide">
                <div className="title">Sign Up</div>
                <form marginBottom="10px">
                    <label className="inputSection">
                        <input type="text" placeholder="Email" name="email" value={creds.email} className="input"
                            onChange={(e) => {
                                let newInput = e.target.value;
                                setCreds((prevState) => ({
                                    ...prevState,
                                    email: newInput
                                }));
                            }} />
                        <input type="text" placeholder="Firstname" value={creds.firstname} className="input" onChange={(e) => {
                            let newInput = e.target.value;
                            setCreds((prevState) => ({
                                ...prevState,
                                firstname: newInput
                            }));
                        }} />
                        <input type="text" placeholder="Lastname" value={creds.lastname} className="input" onChange={(e) => {
                            let newInput = e.target.value;
                            setCreds((prevState) => ({
                                ...prevState,
                                lastname: newInput
                            }));
                        }} />
                        <input type="text" placeholder="Phone Number" value={creds.phonenumber} className="input" onChange={(e) => {
                            let newInput = e.target.value;
                            setCreds((prevState) => ({
                                ...prevState,
                                phonenumber: newInput
                            }));
                        }} />
                        <input type="password" placeholder="Password" value={creds.password} className="input" onChange={(e) => {
                            let newInput = e.target.value;
                            setCreds((prevState) => ({
                                ...prevState,
                                password: newInput
                            }));
                        }} />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input"
                            value={creds.confirmNewPassword}
                            onChange={(e) => {
                                let newInput = e.target.value;
                                setCreds((prevState) => ({
                                    ...prevState,
                                    confirmNewPassword: newInput
                                }));
                            }}
                        />
                    </label>
                </form>

                <div className="error-layout">
                    {displayErrors()}
                </div>

                <div className="linksSection">
                    <a class="signUpLink" href="/signin">
                        Already have an account?
                    </a>
                </div>

                <button className="buttonAuth" onClick={(e) => onSubmit(e)} >Signup</button>
            </div>
        </div>
    );
}
