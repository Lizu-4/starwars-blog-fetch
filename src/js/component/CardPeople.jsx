import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPeople = ({ item }) => {
	const {actions} = useContext(Context)
	return (
		
		<div className="col-3 md-5">
			<div className="card">
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
			<h5 className="card-title">{item.name}</h5>
			<p className="card-text">
			{item.mass}
			</p>
			<Link to={"/details/" + item.id}>
				<button className="btn btn-primary">Learn more!</button>
			</Link>
            <a href="#" className="btn btn-primary float-end"><i class="fa-regular fa-heart"></i></a>
			
			</div>
		</div>
	  </div>

)};

export default CardPeople;