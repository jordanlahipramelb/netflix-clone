import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Netflix from "./pages/Netflix";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Netflix />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
