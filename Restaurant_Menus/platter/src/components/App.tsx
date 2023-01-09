import React from "react";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import About from "./About";
import imageUrls from "../data/image-sources";
import Container from 'react-bootstrap/Container';//for giving left and right margins
import LoadingIndicator from "./common/LoadingIndicator";
import Rating from "./common/Rating";
import RestaurantsListItem from "./restaurants-list/RestaurantsListItem";
import IRestaurant from '../models/IRestaurant';
import RestaurantsList from "./restaurants-list/RestaurantsList";
import RestaurantDetails from "./restaurant-details/RestaurantDetails";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const restaurant : IRestaurant = {
    "id" : 1,
    "name": "Mad About Pizza",
    "description" : "Delicious Pizza's baked in wood-fired-Oven. We serve Authentic Italian varities, classic American Pizza's, and desi ones too!",
    "cuisines" : [
        "Italian",
        "American",
        "Fusion"
    ],
    "opens" : "11:00",
    "closes": "23:30",
    "rating": 4.1,
    "numRatings": 125,
    "costForTwo": 600,
    "imageUrl": "/images/restaurants/mad-about-pizza//restaurant.jpg",
};

const App = () => {
    return (
        <>
            <NavigationMenu />
            <Container>
                {/*<Home />*/}
                <About />
                {/*<LoadingIndicator size="large" message="The Restaurants are being fetched, Please wait..." />
                <Rating value={3.75} className="me-2" />
                3.75 (120 ratings)
                <RestaurantsListItem restaurant={restaurant} />
                <RestaurantsList />
                <RestaurantDetails />*/}
            </Container>
        </> 
    );
};

export default App;

