import React, {useState,useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios"


function FreeBooks() {
  const [book,setBook]= useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
      const res  = await axios.get("https://bookstore-gr4z.onrender.com/book")
      console.log(res.data)
      setBook(res.data.filter((data) => data.category === "Free"))
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-lg pb-2">Free Books</h1>
          <p>
            A place to pick a book, get comfy, and start reading. No rules, no
            fees—just stories waiting for you.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item)=>(
              <div className="h-full">
                <Cards item ={item} key={item.id}/> 
              </div>
               
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBooks;
