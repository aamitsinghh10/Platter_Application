import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import ImageSource from '../models/ImageSource';
import { getImageSources } from '../services/about';

const About = () => {

    const [ imageUrls, setImageUrls ] = useState<ImageSource[]>( [] );

        useEffect (
            () => {
                const fetchImageSources = async() => {
                    try {
                        const data = await getImageSources();
                        setImageUrls( data );
                    } catch (error) {
                        alert( error.message );
                    }
                };
                fetchImageSources();
            },
            [ ]
        );

    return (
       <main>
        <section>
           <header className='my-5'>    
            <h2>
               <FontAwesomeIcon icon={faCode} className="me-2" />
               Tech Stack
            </h2>
            <hr />
            </header>
        <p>
            The frontend app ( this one ) was scaffolded using <a href="https://create-react-app.dev/docs/getting-started">Create React App</a>, and built with <a href="https://reactjs.org">React</a>, <a href="https://reactrouter.com/web/guides/quick-start">React Router</a>, <a href="https://react-bootstrap.github.io/">React Bootstrap</a> (which in turn uses <a href="https://getbootstrap.com/">Bootstrap</a>). <a href="https://www.typscript.org/docs/handbook/intro.html">Typescript</a> is the language of your Choice. The backend is built using <a href="https://github.com/typicode/json-server">Json-Server</a>, The icons used have been courtesy <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web//using-with/react"> Font Awesome</a>.

        </p>
    </section>

           <section>
                <header className="my-5">
                     <h2>
                        <FontAwesomeIcon icon={faLink} className="me-2" />
                        Attributions
                     </h2>
                     <hr />
                </header>
                <p>
                    The Author would like to thank <a href="https://pixlr.com/x/" target="_blank" rel="noreferrer">Pixlr</a> for Providing an Awesome free Photo-editing tool online. The Author also thank the people who shared the Images (for commercial and royalty-free usage) which are used in this site.
                </p>
                <ListGroup>
                    {
                        imageUrls.map(
                            ( imageUrl, idx ) => (
                                <ListGroup.Item key={imageUrl}>
                                    <a href={imageUrl}>{imageUrl}</a>
                                </ListGroup.Item>
                            )
                        )
                    }
                </ListGroup>
           </section>
       </main> 
    );   
};

export default About;

