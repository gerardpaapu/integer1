import { Carousel } from 'react-bootstrap'

function HomeImageSlide() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./../home1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./../home2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./../home3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeImageSlide
