import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <main>
            <section className="my-5">
                <header>
                    <h1>
                        <FontAwesomeIcon 
                            icon={faPizzaSlice}
                            rotation={270}
                            className="me-2"
                        />
                        Platter
                    </h1>
                </header>
                <hr />
                <p>
                    Welcome to Platter. You can find Restaurants to your locality and check their Menus.

                    <div className="my-3">
                        <small>
                            <strong>NOTE</strong> : You can even Add an Item - this Item really be an Admin feature, but is Added here to demonstrate handling HTTP POST Requests.
                        </small>
                    </div>
                </p>
            </section>
        </main>
    )
};

export default Home;