import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/CardPeople.jsx"
import { CardPlanets } from "../component/CardPlanets.jsx"
import { CardVehicles } from "../component/CardVehicles.jsx"
import "../../styles/home.css";



export const Home = () => {

	const { store, actions } = useContext(Context);
	const { urlBase, people, vehicles, planets } = store;


	return(

		<div className="container">

			<h1>Characters</h1>

			<div className="container">
				<div className="scrollmenu">
					<div className="row">
					{people.map((item) => {
						return <CardPeople key={item.id} item={item}/>
					})}
					</div>
				</div>
			</div>

			<h1>Planets</h1>
			<div className="container">
				<div className="scrollmenu">
					<div className="row">
					{planets.map((item) => {
						return <CardPlanets key={item.id} item={item}/>
					})}
					</div>
				</div>
			</div>

			<h1>Vehicles</h1>
			<div className="container">
			<div className="scrollmenu">
					<div className="row">
					{vehicles.map((item) => {
						return <CardVehicles key={item.id} item={item}/>
					})}
					</div>
				</div>
			</div>
		</div>
	)
};

