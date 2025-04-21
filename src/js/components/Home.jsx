import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Hero from "./Hero";
import Cardrow from "./CardRow";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<>
			<div>
				<Navbar/>
			</div>

			<div className="container">
				<Hero/>
				<Card/>				
			</div>

			<div>
			<Footer className="container"/>
			</div>
		</>
		
	);
};

export default Home;