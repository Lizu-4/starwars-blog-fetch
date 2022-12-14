import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://swapi.tech/api/",
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: [],
    },
    actions: {
      getPeople: async () => {
        const store = getStore();
        if (!store.people.length) {
          try {
            let response = await fetch(`${store.urlBase}/people`);
            let data = await response.json();
            console.log(response.status);
            // if (response.ok) {
            data.results.forEach(async (item) => {
              // let responseTwo = await fetch(`${store.urlBase}/people/${item.uid}`);
              let responseTwo = await fetch(`${item.url}`);
              let dataTwo = await responseTwo.json();
              setStore({
                ...store,
                people: [...store.people, dataTwo.result],
              });
            });

            // }
          } catch (error) {
            console.log(error);
          }
        }
      },

      getPlanets: async () => {
        const store = getStore();
        if (!store.planets.length) {
          try {
            let response = await fetch(`${store.urlBase}/planets`);
            let data = await response.json();
            console.log(response.status);
            // if (response.ok) {
            data.results.forEach(async (item) => {
              // let responseTwo = await fetch(`${store.urlBase}/planets/${item.uid}`);
              let responseTwo = await fetch(`${item.url}`);
              let dataTwo = await responseTwo.json();
              setStore({
                ...store,
                planets: [...store.planets, dataTwo.result],
              });
            });

            // }
          } catch (error) {
            console.log(error);
          }
        }
      },

      getVehicles: async () => {
        const store = getStore();
        if (!store.vehicles.length) {
          try {
            let response = await fetch(`${store.urlBase}/vehicles`);
            let data = await response.json();
            console.log(response.status);
            // if (response.ok) {
            data.results.forEach(async (item) => {
              // let responseTwo = await fetch(`${store.urlBase}/vehicles/${item.uid}`);
              let responseTwo = await fetch(`${item.url}`);
              let dataTwo = await responseTwo.json();
              setStore({
                ...store,
                vehicles: [...store.vehicles, dataTwo.result],
              });
            });

            // }
          } catch (error) {
            console.log(error);
          }
        }
      },

      setFavorite: (name) => {
        const store = getStore();

        setStore({ favorites: [...store.favorites, name] });
      },

      deleteFavorite: (name) => {
        const store = getStore();

        let newFav = store.favorites.filter((index) => index !== name);

        setStore({ favorites: newFav });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
