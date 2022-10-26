import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Navbar({ isScrolled }) {
	const links = [
		{ name: "Home", link: "/" },
		{ name: "TV Shows", link: "/tv" },
		{ name: "Movies", link: "/movies" },
		{ name: "My List", link: "/mylist" },
	];

	// Show/hide Search
	const [showSearch, setShowSearch] = useState(false);
	const [inputHover, setInputHover] = useState(false);
	return (
		<Container>
			<nav className={`d-flex ${isScrolled ? "scrolled" : ""}`}>
				<div className="left d-flex align-items-center">
					<div className="logo d-flex align-items-center justify-content-center">
						<img src={logo} alt="logo" />
					</div>

					<ul className="links d-flex">
						{links.map(({ name, link }) => {
							return (
								<li key={name}>
									<Link to={link}>{name}</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="right d-flex align-items-center">
					<div className={`search ${showSearch ? "show-search" : ""} `}>
						<button
							onFocus={() => setShowSearch(true)}
							onBlur={() => {
								if (!inputHover) {
									setShowSearch(false);
								}
							}}
						>
							<FaSearch />
						</button>
						<input
							type="text"
							placeholder="Search"
							onMouseEnter={() => setInputHover(true)}
							onMouseLeave={() => setInputHover(false)}
							onBlur={() => {
								setShowSearch(false);
								setInputHover(false);
							}}
						/>
					</div>
					<button onClick={() => signOut(firebaseAuth)}>
						<FaPowerOff />
					</button>
				</div>
			</nav>
		</Container>
	);
}

const Container = styled.div`
	.scrolled {
		background-color: black;
	}

	nav {
		position: sticky;
		top: 0;
		height: 6.5rem;
		width: 100%;
		justify-content: space-between;
		position: fixed;
		z-index: 2;
		padding: 0 4rem;
		align-items: center;
		transition: 0.3s ease-in-out;

		.left {
			gap: 2rem;

			.logo {
				img {
					height: 4rem;
				}
			}

			.links {
				list-style-type: none;
				gap: 2rem;

				li {
					a {
						color: white;
						text-decoration: none;
					}
				}
			}
		}
		.right {
			gap: 1rem;

			button {
				background-color: transparent;
				border: none;
				cursor: pointer;
				&:focus {
					outline: none;
				}
				svg {
					color: #f34242;
					font-size: 1.2rem;
				}
			}

			.search {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.2rem;
				padding-left: 0.5rem;

				button {
					background-color: transparent;

					svg {
						color: white;
					}
				}

				input {
					width: 0;
					opacity: 0;
					visibility: hidden;
					transition: 0.3s ease-in-out;
					background-color: transparent;
					border: none;
					color: white;

					&:focus {
						outline: none;
					}
				}
			}

			.show-search {
				border: 1px white solid;
				background-color: rgba(0, 0, 0, 0.6);

				input {
					width: 100%;
					opacity: 1;
					visibility: visible;
					padding: 0.3rem;
				}
			}
		}
	}
`;

export default Navbar;
