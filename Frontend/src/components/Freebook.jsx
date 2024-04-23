import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
import Cards from './Cards';
export default function Freebook() {
    const filterData = list.filter((data)=>data.category==="Free");
    
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl containermx-auto md:px-20 px-4'>
        <div>
            <h1 className='font-semibold text-xl pd-2'>Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam itaque neque, maiores dolores consequuntur omnis excepturi 
            beatae maxime aliquam. Ut beatae nam atque dolorem vero eius reprehenderit
            ducimus perferendis iusto!</p>
        </div>
      <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
     </div>
    </>
  )
}
