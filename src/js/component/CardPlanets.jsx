import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = ({ item }) => {
  const { store, actions } = useContext(Context);
  const { urlBase, people, vehicles, planets, favorites } = store;
  return (
    <div className="col-3 md-5">
      <div className="card">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-inline-block">
          <h5 className="card-title">{item.properties.name}</h5>
          <p className="card-text">
            Population: {item.properties.population} <br />
            Terrain: {item.properties.terrain}
          </p>
          <Link to={"/planets/" + item._id}>
            <button className="btn btn-primary">Learn more!</button>
          </Link>
          {store.favorites.includes(item.properties.name) ? 
            <button
              onClick={() => actions.deleteFavorite(item.properties.name)}
              className="btn btn-primary"
            >
             <i className="fa-solid fa-heart"></i>
            </button>
           : 
            <button
              onClick={() => actions.setFavorite(item.properties.name)}
              className="btn btn-primary"
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          } 
        </div>
      </div>
    </div>
  );
};

export default CardPlanets;
