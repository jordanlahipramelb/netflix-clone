import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

function Header({ login }) {
	const navigate = useNavigate();

	return (
		<Container className="d-flex align-items-center justify-content-between">
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			{/* if login prop, direct to login and render Log In. Otherwise, direct/render signup/Sign Up */}
			<Button onClick={() => navigate(login ? "/login" : "/signup")}>
				{login ? "Log In" : "Sign Up"}
			</Button>

			{/* 	{login ? (
				<button onClick={() => navigate("/login")}>Log In</button>
			) : null} */}
		</Container>
	);
}

const Container = styled.div`
	padding: 0 4rem;

	.logo {
		img {
			height: 5rem;
		}
	}
`;

const Button = styled.div`
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 0.2rem;
	cursor: pointer;
	color: white;
	background-color: #e50914;
	font-weight: bolder;
	font-size: 1.05rem;
`;

export default Header;
