import React, { Component } from "react";
import RestaurantsListItem from "./RestaurantsListItem";
import IRestaurant from '../../models/IRestaurant';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from "../common/LoadingIndicator";

import { Row, Col, Alert } from 'react-bootstrap';
import { getRestaurants } from '../../services/restaurants';

type Props = { };

type State = {
    status: LoadingStatus,
    restaurants?: IRestaurant[],
    error?: Error
};

class RestaurantsList extends Component<Props, State> {
    state: State = {  
        status : 'LOADING'
    }

    render() {
        let el;
        const { status, restaurants, error } = this.state;

        switch( status ){
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching list of Restaurants, Please wait..."
                    />    
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={1} mds={2} lg={3}>
                        {
                            restaurants?.map(
                                restaurant => (
                                    <Col key={restaurant.id} className="d-flex align-items-stretch my-3">
                                        <RestaurantsListItem
                                            restaurant = {restaurant}
                                        />
                                    </Col>
                                )
                            )
                        }
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
    }
    componentDidMount(){
        this.setState({
            status : "LOADING"
        });
        try{
            const data = await getRestaurants();
            this.setState({
                status : 'LOADED',
                restaurants : data
            });
        } catch( error ){
            this.setState({
                status : "ERROR_LOADING",
                error
            })
        }
    }
};

export default RestaurantsList;
