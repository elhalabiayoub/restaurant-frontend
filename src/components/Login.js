import React, { useState } from "react";
import "./Login.css";
import Email from "@material-ui/icons/EmailOutlined";
import Https from "@material-ui/icons/HttpsOutlined";




function Login(props) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const changeHandler = (field, e) => {
		field === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
	};
	const submitHandler = (e) => {
		console.log(props);
		e.preventDefault();
		console.table({ email, password });
		const inputs = document.querySelectorAll("input");
	
	};

	return (
		<div className="login">
			<div className="login__content">
				<div className="login__welcome">
					<h6>Hello!</h6>
					<p>Sign into your account here.</p>
				</div>
				<form className="login__form" onSubmit={submitHandler}>
					<div>
						<input
							value={email}
							onChange={changeHandler.bind(this, "email")}
							type="text"
							placeholder="Email / Username"
						/>
						<Email className="icon" />
					</div>
					<div>
						<input
							type="password"
							value={password}
							onChange={changeHandler.bind(this, "password")}
							placeholder="Password"
						/>
						<Https className="icon" />
					</div>

					<button type="submit"><a style={{color:"white"}} href="/acceuil">Sign in</a></button>
				</form>
				<hr />
				<div className="login__extraLinks">
					<p>
						Forgot password? <a>Reset</a>
					</p>
					<p>
						Don't have an account?<a href="/signup">Sign up</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
