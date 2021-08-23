import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Carouselmenu() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="container mt-3">
            <Carousel
                centerMode={true}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}

                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}

                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>  <a rel="noopener noreferrer" href="https://trendyol.com" className="text-decoration" target="_blank"> <img src="https://cdn.picodi.com/tr/slide/original/image_673_001_1.png" alt="" /></a></div>
                <div> <a rel="noopener noreferrer" href="https://mavi.com" className="text-decoration" target="_blank"><img src="https://cdn.picodi.com/tr/slide/original/image_717_001_1.png" alt="" /> </a></div>
                <div><a rel="noopener noreferrer" href="https://shop.huawei.com/tr/index.html" className="text-decoration" target="_blank"> <img src="https://cdn.picodi.com/tr/slide/original/image_670_001_1.png" alt="" /></a></div>

              
               
              
                
            </Carousel>

        </div>
    )
}

export default Carouselmenu
