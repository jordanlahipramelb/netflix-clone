import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";

function BackgroundImage() {
	return (
		<Container>
			<img src={background} alt="background" />
		</Container>
	);
}

const Container = styled.div`
	height: 100%;
	width: 100%;
	/* object-fit: cover; */
	img {
		/* max-width: 100%; */
	}
`;

export default BackgroundImage;
