import "./App.css";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./ProductPage";
import Child from "./Child";
import { useState } from "react";
import ArrayMethod from "./component/ArrayMethod";
import Reference from "./component/Reference";

function App() {
	const [heading , setHeading] =useState("")
	return (
		<div className='App'>
			<Child 
			setHeading={setHeading}
			/>
			<h1>Coming from Child : {heading}</h1>
			<hr/>
			<ArrayMethod/>
			<hr/>
			<Reference/>
			<hr/>
			
			<h2>Dynamic Routing Of Products</h2>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/product/:title' element={<ProductPage />} />
			</Routes>
			
		</div>
	);
}

export default App;
