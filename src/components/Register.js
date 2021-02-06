import React, { useState } from "react";
import "./Register.css";
import Email from "@material-ui/icons/EmailOutlined";
import Https from "@material-ui/icons/HttpsOutlined";
import Done from "@material-ui/icons/Done";
import User from "@material-ui/icons/AccountCircleOutlined";
import { Redirect } from "react-router-dom";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const [checked, setChecked] = useState(false);
	const [redirect, setRedirect] = useState(false);
	

	const changeHandler = (field, e) => {
		switch (field) {
			case "email":
				setEmail(e.target.value);

				break;
			case "password":
				setPassword(e.target.value);

				break;
			case "fullName":
				setFullName(e.target.value);
				break;
		}
	};
	const submitHandler = (e) => {
		e.preventDefault();
		console.table({ email, password, fullName, checked });
		const inputs = document.querySelectorAll("input");
		if (email && password && fullName && checked) {
			console.log("i am here");
			inputs.forEach((input) => {
				input.parentNode.style.borderColor = "";
				input.nextSibling.style.color = "";
			});
			
			setPassword("");
			setFullName("");
			setEmail("");
			setChecked(false);
			setRedirect(true);
		} else {
			inputs.forEach((input) => {
				console.log(input);
				if (!input.value) {
					input.parentNode.style.borderColor = "#e63946";
					input.nextSibling.style.color = "#e63946";
				} else {
					input.parentNode.style.borderColor = "";
					input.nextSibling.style.color = "";
				}
			});
		}
	};
	const clickHandler = () => {
		setChecked(!checked);
	};
	const redirection = () => {
		if (redirect) {
			return <Redirect to="/" />;
		}
	};
	return (
		<div className="register" post="/">
			<div className="register__content">
				<div className="register__joinUs">
					<h6>Join Us</h6>
					<p>Sign up to be part of our family.</p>
				</div>
				<form className="register__form" onSubmit={submitHandler.bind(this)}>
					<div className="register__field">
						<input
							value={fullName}
							onChange={changeHandler.bind(this, "fullName")}
							type="text"
							placeholder="Full Name"
						/>
						<User className="icon" />
					</div>
					<div className="register__field">
						<input
							value={email}
							onChange={changeHandler.bind(this, "email")}
							type="text"
							placeholder="Email"
						/>
						<Email className="icon" />
					</div>
					<div className="register__field">
						<input
							type="password"
							value={password}
							onChange={changeHandler.bind(this, "password")}
							placeholder="Password"
						/>
						<Https className="icon" />
					</div>

					<label className="register__formCheckBox register__field">
						I agree to your<a>Terms and Conditions </a> and{" "}
						<a>Privacy Policy</a>
						<input
							type="checkbox"
							onClick={clickHandler}
							checked={checked}
							value={checked}
						/>
						<span className="checkmark">
							<Done className="checkIcon" />
						</span>
					</label>

					<button type="submit">Create your free Account</button>
				</form>
				<hr />
				<div className="register__extraLinks">
					<p>
						Already registered?
						<a href="/">Sign in</a>
					</p>
				</div>
				{redirection()}
			</div>
		</div>
	);
}

export default Register;
