import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Slider(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
          slidesToSlide: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3,
        },
      };
    return(
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  centerMode={true}

>

</Carousel>
    );
}
export default Slider