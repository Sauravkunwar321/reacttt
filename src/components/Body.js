import ResCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";




const Body = () => {

    //state variable

    const[listOfRestaurant,setlistOfRestaurant] = useState([]);

    const[filteredRestaurant, setFilterRestaurant] = useState([]);

    const[searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();

    }, []);

    const fetchData = async() => {
      try{
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0759837&lng=72.8776559&carousel=truethird_party_vendor=1");

        // const data = await fetch("https://novafoodsbackend.herokuapp.com/homepage");

        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }

      const json = await data.json();

      const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    

      console.log(restaurants);

      setlistOfRestaurant(restaurants);
      setFilterRestaurant(restaurants);

      } catch(error){
        console.error("Error fetchning data:", error);
      }
      


    };

    



    
    return listOfRestaurant.length === 0?(
      <Shimmer />) :(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" placeholder="Enter name" value={searchText} onChange={(e) => {
              setSearchText(e.target.value); 
            }} />
            <button onClick={() => {

              

              //filter the restaurant and update the UI

              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilterRestaurant(filteredRestaurant);





            }}>Search</button>
          </div>
            <button className="filter-btn" onClick={() => {

                //filter logic here


              const filterList  = listOfRestaurant.filter((res) => res.info.avgRating > 4 );

               setFilterRestaurant(filterList);


            }}>Top Rated Restaurants</button>

        </div>
  
        <div className="res-container">
          {/* //restaurant-card  */}
  
  {
         filteredRestaurant.map((restaurant) => (
            <ResCard resData={restaurant} key = {restaurant?.info?.id} />
  
          ))}
  
        
        </div>
      </div>
    );
  };

  export default Body;
