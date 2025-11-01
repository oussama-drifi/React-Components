import { useState } from 'react';
import './passwordStrengthChecker.css';
import { useEffect } from 'react';

const PasswordStrengthChecker = () => {

    const [password, setPassword] = useState("");

    const [constraints, setConstraints] = useState({
        length: "",
        upper: "",
        lower: "",
        number: "",
        special: "",
    });

    const handleChange = (e) => {
        const password = e.target.value;
        setPassword(prev => password);
        // update constraints state
        setConstraints({
            length: password.length >= 8,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password),
        });
    }
    // set the progrees class
    const progresses = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five"
    }
    let progress = progresses[Object.values(constraints).filter(val => val).length];
    
    return (
        <div className="container">
            <h4>check your password strength</h4>
            <div className="input-box">
                <input onChange={handleChange} value={password} type="text" placeholder="enter your password here" id="password" />
            </div>
            <div className="progress">
                <span className={progress}></span>
            </div>
            <div className="constraints">
                <ul>
                    <li className={constraints.length !== "" ? constraints.length ? "valid" : "invalid" : ""}>
                        <i className={constraints.length !== "" ? constraints.length ? "bi bi-check-circle" : "bi bi-x-circle" : "bi bi-info-circle"}></i>
                        <span>Min length 8</span>
                    </li>
                    <li className={constraints.upper !== "" ? constraints.upper ? "valid" : "invalid" : ""}>
                        <i className={constraints.upper !== "" ? constraints.upper ? "bi bi-check-circle" : "bi bi-x-circle" : "bi bi-info-circle"}></i>
                        <span>One char upper</span>
                    </li>
                    <li className={constraints.lower !== "" ? constraints.lower ? "valid" : "invalid" : ""}>
                        <i className={constraints.lower !== "" ? constraints.lower ? "bi bi-check-circle" : "bi bi-x-circle" : "bi bi-info-circle"}></i>
                        <span>One char lower</span>
                    </li>
                    <li className={constraints.number !== "" ? constraints.number ? "valid" : "invalid" : ""}>
                        <i className={constraints.number !== "" ? constraints.number ? "bi bi-check-circle" : "bi bi-x-circle" : "bi bi-info-circle"}></i>
                        <span>One number</span>
                    </li>
                    <li className={constraints.special !== "" ? constraints.special ? "valid" : "invalid" : ""}>
                        <i className={constraints.special !== "" ? constraints.special ? "bi bi-check-circle" : "bi bi-x-circle" : "bi bi-info-circle"}></i>
                        <span>One special char</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PasswordStrengthChecker