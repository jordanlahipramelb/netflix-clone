import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

function SignUp() {
	const [showPassword, setShowPassword] = useState(false);
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

	const handleSignUp = async () => {
		try {
			const { email, password } = formData;

			// Creates a new user account associated with our auth, the specified email address and password.
			await createUserWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			console.log(error);
		}
	};

	onAuthStateChanged(firebaseAuth, (currentUser) => {
		if (currentUser) navigate("/");
	});

	return (
		<Container showPassword={showPassword}>
			<BackgroundImage />
			<div className="content">
				<Header login />
				<div className="body d-flex flex-col align-items-center justify-content-center">
					<div className="text flex-col">
						<h1>Unlimited movies, TV shows and more</h1>
						<h4>Watch anywhere. Cancel anytime.</h4>
						<h6>
							Ready to watch? Enter your email to create or restart membership
						</h6>
					</div>

					<div className="form">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
						{showPassword && (
							<input
								type="password"
								placeholder="Password"
								name="password"
								value={formData.password}
								onChange={handleChange}
							/>
						)}

						{/* if showPassword is false, render Get Started button.
						When button is pressed, showPassword is true and renders above input*/}
						{!showPassword && (
							<button onClick={() => setShowPassword(true)}>Get Started</button>
						)}
					</div>
					<button onClick={handleSignUp}>Sign Up</button>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	position: relative;

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
			.text {
				gap: 1rem;
				text-align: center;
				font-size: 2rem;
				h1 {
					margin: 0 18rem;
				}
			}

			.form {
				display: grid;
				grid-template-columns: ${({ showPassword }) =>
					showPassword ? "1fr 1fr" : "2fr 1fr"};
				width: 60%;
				input {
					color: black;
					border: none;
					padding: 1.5rem;
					font-size: 1.2rem;
					border: 1px solid black;
					&:focus {
						outline: none;
					}
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
`;

export default SignUp;
