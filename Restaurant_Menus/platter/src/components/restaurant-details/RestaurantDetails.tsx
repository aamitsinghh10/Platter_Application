import React, { useEffect, useState } from "react";
import IRestaurant from '../../models/IRestaurant';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from "../common/LoadingIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../common/Rating";
import { Row, Col, Alert,Badge } from 'react-bootstrap';
import { faClock } from "@fortawesome/free-solid-svg-icons";

type Props = {
 };

const madAboutPizza = {
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

const RestaurantDetails = ( props : Props ) => {
    
    const [ status, setStatus ] = useState<LoadingStatus>('LOADING');
    const [ restaurant, setRestaurant ] = useState<IRestaurant | null>(null);
    const [ error, setError ] = useState<Error | null>(null);

    const fetchRestaurant = () => {
        setTimeout(() =>{
           setRestaurant (madAboutPizza);
           setStatus('LOADED');
        }, 3000);
    };

    useEffect (fetchRestaurant, []);

    let el;

    switch( status ){
        case 'LOADING':
            el = (
                <LoadingIndicator
                    size="large"
                    message="We are fetching details of Restaurants, Please wait..."
                />    
            );
            break;
        case 'LOADED':
            const {
                name,
                description,
                cuisines,
                opens, 
                closes,
                rating,
                numRatings,
                costForTwo,
                imageUrl
            } = restaurant as IRestaurant;
            el = (
                <Row>
                    <Col xs={12} className="my-2">
                        <h1>{name}</h1>
                        <hr />
                    </Col>
                    <Col xs={12} lg={4} className="my-2">
                        <img 
                            src={`${process.env.REACT_APP_API_BASE_URL}${imageUrl}`}
                            alt={name}
                            className="w-100"
                        />
                    </Col>
                    <Col xs={12} lg={8} className="my-2">
                        <div>
                            {
                                cuisines.map(
                                    cuisine =>(
                                        <Badge 
                                            bg="primary me-2" 
                                            key={cuisine}
                                        >
                                            {cuisine}
                                        </Badge>
                                    )
                                )
                            }
                        </div>
                        <div className="fs-5 my-2">{description}</div>
                        <Row xs={3} className="text-sm">
                            <Col>
                                <FontAwesomeIcon icon={faClock} />
                                <span className="ms-2">{opens} - {closes}</span>
                            </Col>
                            <Col>
                                <Rating value={rating} className="me-2" />
                                 {rating} ({numRatings} ratings)
                            </Col>
                            <Col>
                                Cost for Two: Rs. {costForTwo}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            );
            break;
        case 'ERROR_LOADING':
            el = (
                <Alert variant="danger">
                    {error?.message}
                </Alert>
            );
            break;    
    }
    return el;
};

export default RestaurantDetails;
