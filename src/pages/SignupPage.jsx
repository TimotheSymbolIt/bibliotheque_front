import React, { useState } from "react";
import "../styles/pages/SignupPage.css";
import instance from "../api/instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
	const navigate = useNavigate();
	const [newUser, setNewUser] = useState({
		us_username: "",
		us_email: "",
		us_password: "",
	});

	function signup() {
		instance
			.post("/auth/signup", newUser)
			.then((response) => {
				console.log(response);
				toast.success(response.data.message);
				navigate("/login");
			})
			.catch((error) => {
				toast.error(error.response.data.error);
			});
	}

	return (
		<div className="signup_page">
			<div className="form">
				<h2>S'inscrire :</h2>
				<div className="input_block">
					<label>Pseudo:</label>
					<input
						type="text"
						defaultValue={newUser.us_username}
						onChange={(e) =>
							setNewUser({ ...newUser, us_username: e.target.value })
						}
					/>
				</div>
				<div className="input_block">
					<label>Email:</label>
					<input
						type="email"
						defaultValue={newUser.us_email}
						onChange={(e) =>
							setNewUser({ ...newUser, us_email: e.target.value })
						}
					/>
				</div>
				<div className="input_block">
					<label htmlFor="">Mot de Passe:</label>
					<input
						type="password"
						defaultValue={newUser.us_password}
						onChange={(e) =>
							setNewUser({ ...newUser, us_password: e.target.value })
						}
					/>
				</div>
				<button className="signup_button"
					onClick={() => {
						signup();
					}}
				>
					S'inscrire
				</button>
			</div>
		</div>
	);
};

export default SignupPage;
