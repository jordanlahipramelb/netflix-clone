import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	/** Updates form field when typing */

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((data) => ({
			...data,
			[name]: value,
		}));
	};

	const handleLogIn = async () => {
		try {
			const { email, password } = formData;

			// Creates a new user account associated with our auth, the specified email address and password.
			await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			console.log(error);
		}
	};

	onAuthStateChanged(firebaseAuth, (currentUser) => {
		if (currentUser) navigate("/");
	});

	return (
		<Container>
			{/* <BackgroundImage /> */}
			<div className="content">
				<Header />
				<div className="body d-flex flex-col align-items-center justify-content-center">
					<div className="title">
						<h3>Sign In</h3>
					</div>

					<div className="form d-flex align-items-center justify-content-center">
						<div className="container d-flex flex-col">
							<input
								type="email"
								placeholder="Email Address"
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>

							<input
								type="password"
								placeholder="Password"
								name="password"
								value={formData.password}
								onChange={handleChange}
							/>

							<button onClick={handleLogIn}>Sign In</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	.content {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 15vh 85vh;

		.body {
			gap: 1rem;
			height: 50vh;

			.form {
				padding: 2rem;

				width: 25vw;
				gap: 2rem;
				color: white;

				.container {
					gap: 2rem;
					input {
						border: 0;
						height: 50px;
						padding: 0.5rem 1rem;
						width: 20rem;
						background: #333333;
						color: white;
						border-radius: 8px;
					}

					button {
						padding: 0.5rem 1rem;
						border: none;
						cursor: pointer;
						color: white;
						background-color: #e50914;
						font-weight: bolder;
						font-size: 1.05rem;
					}
				}

				button {
					padding: 0.5rem 1rem;
					border: none;
					border-radius: 0.2rem;
					cursor: pointer;
					color: white;
					background-color: #e50914;
					font-weight: bolder;
					font-size: 1.05rem;
				}
			}
		}
		background-color: rgba(0, 0, 0, 0.5);
	}
`;
export default Login;
