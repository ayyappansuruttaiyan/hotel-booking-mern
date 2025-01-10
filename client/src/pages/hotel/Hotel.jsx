import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideOpen, setSlideOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setSlideOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  const photos = [
    {
      src: "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1678297270523-8775c817d0b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1678297270523-8775c817d0b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  console.log(photos[0].src);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {slideOpen && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setSlideOpen(false)}
              className="sliderClose"
            />
            <FontAwesomeIcon
              className="arrow"
              icon={faCircleArrowLeft}
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img className="sliderImg" src={photos[slideNumber].src} alt="" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNowBtn">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <span>92, 1st Cross, Richmond Road, Bangalore - 560051</span>
          </div>
          <span className="hotelDistance">
            Excellent locaion - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over <span>&#8377;2899</span> at this property and get a
            free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  key={i}
                  onClick={() => handleOpen(i)}
                  className="hotelImg"
                  src={photo.src}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis eaque deserunt nulla tempora iusto nesciunt incidunt
                totam vel quasi ea? Doloribus ex aliquid nisi voluptatum!
                Excepturi neque alias asperiores quae.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                located in the real heart os krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>&#8377;989</b> (9 night)
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}

export default Hotel;
