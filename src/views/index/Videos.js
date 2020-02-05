import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";

import {Carousel} from "react-responsive-carousel"
// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

function Videos() {
  return (
    <Container>
        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
            <div className="yt-video-container">
                <iframe title="2019" src="https://www.youtube.com/embed/68TUBKxxVug"
                  allowfullscreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen" 
                  msallowfullscreen="msallowfullscreen" 
                  oallowfullscreen="oallowfullscreen" 
                  webkitallowfullscreen="webkitallowfullscreen" />
            </div>
            <div className="yt-video-container">
                <iframe title="2018" src="https://www.youtube.com/embed/GsRB5R4m8qA"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen" />
            </div>
        </Carousel>
    </Container>
  );
}

export default Videos;