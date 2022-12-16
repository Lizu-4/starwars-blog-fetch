import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  const findDetail = () => {
    const detail = store[params.detail].find(
      (item) => item._id === params.theid
    );
    setItem(detail);
  };

  useEffect(() => {
    findDetail();
  }, [store.people, store.planets, store.vehicles]);

  console.log(params.theid);

  return (
    <div className="container">
      <span>
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          Back home
        </button>
        <h1>{item?.properties?.name}</h1> 
      </span>
      {params.detail === "people" ? (
        <div className="row">
          <div className="col-5 col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quisquam maiores nemo provident, sunt illum
              consequatur nostrum, tempora dignissimos voluptate quas quae?
              Dicta blanditiis eveniet temporibus laudantium voluptates
              accusantium neque?
            </p>
            <p>
              Gender: {item?.properties?.gender} <br />
              Height: {item?.properties?.height} <br />
              Eye color: {item?.properties?.eye_color} <br />
            </p>
          </div>
        </div>
      ) : null}

      {params.detail === "planets" ? (
        <div className="row">
          <div className="col-5 col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quisquam maiores nemo provident, sunt illum
              consequatur nostrum, tempora dignissimos voluptate quas quae?
              Dicta blanditiis eveniet temporibus laudantium voluptates
              accusantium neque?
            </p>
            <p>
              Diameter: {item?.properties?.diameter} <br />
              Climate: {item?.properties?.climate} <br />
              Terrain: {item?.properties?.terrain} <br />
            </p>
          </div>
        </div>
      ) : null}

      {params.detail === "vehicles" ? (
        <div className="row">
          <div className="col-5 col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-7 col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quisquam maiores nemo provident, sunt illum
              consequatur nostrum, tempora dignissimos voluptate quas quae?
              Dicta blanditiis eveniet temporibus laudantium voluptates
              accusantium neque?
            </p>
            <p>
              Model: {item?.properties?.model} <br />
              Manufacturer: {item?.properties?.manufacturer} <br />
              Vehicle Class: {item?.properties?.vehicle_class} <br />
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
