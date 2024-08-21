import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import watchImage from '../../Images/c2.jpg';
import mobileImage from '../../Images/c3.jpg';
import headphoneImages from '../../Images/carousel2.jpg';
import tshirtImage from '../../Images/c4.jpg';
import groceryImage from '../../Images/c5.jpg';

export default function ControlledCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ marginTop: '80px' }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <a href={`/search?search=mobiles`}><img src={mobileImage} width={"100%"} height={"100%"}></img></a>
        </Carousel.Item>

        <Carousel.Item>
          <a href={`/search?search=watch`}><img src={watchImage} width={"100%"} height={"100%"}></img></a>
        </Carousel.Item>

        <Carousel.Item>
          <a href={`/search?search=tshirt`}><img src={tshirtImage} width={"100%"} height={"100%"}></img></a>
        </Carousel.Item>

        <Carousel.Item>
          <img src={groceryImage} width={"100%"} height={"100%"}></img>
        </Carousel.Item>

        <Carousel.Item>
          <img src={headphoneImages} width={"100%"} height={"100%"}></img>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}