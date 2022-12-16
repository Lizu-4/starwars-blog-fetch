import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { urlBase, people, vehicles, planets, favorites } = store;

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <img
        src="https://cdn-icons-png.flaticon.com/128/2363/2363876.png"
        className="navbar-brand" id="logo"
        alt="..."
      />
      <div className="ml-auto">
        {/* <Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link> */}

        <div class="btn-group dropstart">
          <div className="dropdown mx-5">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favs {store.favorites.length}
            </button>
            <ul className="dropdown-menu text-center">
              {store.favorites.length == 0
                ? "Empty! :c"
                : favorites.map((item) => {
                    return (
                      <li>
                        <a className="dropdown-item" href="#">
                          {item}
                        </a>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
