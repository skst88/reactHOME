import React from 'react';
import { Carousel } from 'react-bootstrap';

const Section = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zJTIwYW5kJTIwdHJlZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First React homework</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="https://images.squarespace-cdn.com/content/v1/53bc5871e4b095b6a42949b4/1602605460618-C9N9FVEBMI2GQ17526TQ/Untitled+design+%281%29.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                     
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="https://img3.goodfon.com/wallpaper/nbig/b/4c/priroda-vid-uschele-poselok.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Section;