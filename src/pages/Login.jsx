import React, { useState } from "react";
import "../styles/pages/Login.css";
import instance from "../api/instance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [user, setUser] = useState({
		us_username: "",
		us_password: "",
	});

	const navigate = useNavigate()

	function login() {
		instance
			.post("/auth/login", user)
			.then((response) => {
				// console.log(response);
				toast.success(response.data.message);
				navigate("/")
			})
			.catch((error) => {
				// console.log(error.response.data.error);
				toast.error(error.response.data.error);
			});
	}

	return (
		<div className="login_page">
			<div className="form">
				<h2>Se connecter :</h2>

				<div className="input_block">
					<label>Pseudo:</label>
					<input
						type="text"
						defaultValue={user.us_username}
						onChange={(e) => {
							setUser({ ...user, us_username: e.target.value });
						}}
					/>
				</div>
				<div className="input_block">
					<label htmlFor="">Mot de Passe:</label>
					<input
						type="password"
						defaultValue={user.us_password}
						onChange={(e) => setUser({ ...user, us_password: e.target.value })}
					/>
				</div>
				<button
					className="login_button"
					onClick={() => {
						login();
					}}
				>
					Se connecter
				</button>
			</div>
		</div>
	);
};

export default Login;
