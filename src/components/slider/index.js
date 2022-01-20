import Carousel from "react-multi-carousel";
import React from "react";
import { route } from "../../routing/route";
import CarouselItem from "../carouselItem";
function Slider(props){
  const { poets } = props;
  const { shaer } = route;
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
        },
      };
    return(
        <Carousel
        ssr
  showDots={false}
  arrows={true}
  responsive={responsive}
  autoPlaySpeed={1000}
  dotListClass="custom-dot-list-style"
  containerClass="carousel-container"
  itemClass="carousel-item"
>


                        {poets.map((poet) => {
                            const { id, name, image } = poet;
                            return (
                              <CarouselItem
                              key={`poet-${name}`}
                              title={name}
                              imageURL={image}
                                    link={`${shaer}/${id}`}
                          />
                            );

                        }
                        )}




</Carousel>
    );
}
export default Slider;