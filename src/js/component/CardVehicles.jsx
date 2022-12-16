import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicles = ({ item }) => {
  const { store, actions } = useContext(Context);
  const { urlBase, people, vehicles, planets, favorites } = store;
  return (
    <div className="col-3 md-5">
      <div className="card">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.properties.name}</h5>
          <p className="card-text">Class: {item.properties.vehicle_class}</p>
          <Link to={"/vehicles/" + item._id}>
            <button className="btn btn-primary">Learn more!</button>
          </Link>
          {store.favorites.includes(item.properties.name) ? 
            <button
              onClick={() => actions.deleteFavorite(item.properties.name)}
              className="btn btn-primary float-end"
            >
             <i className="fa-solid fa-heart"></i>
            </button>
           : 
            <button
              onClick={() => actions.setFavorite(item.properties.name)}
              className="btn btn-primary float-end"
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          } 
        </div>
      </div>
    </div>
  );
};

export default CardVehicles;
