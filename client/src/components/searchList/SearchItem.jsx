import { Link } from "react-router-dom";
import "./searchItem.css";

function SearchItem({ item }) {
  console.log(item);
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}mtrs from center</span>
        <span className="siTaxiOption">Free airport taxi</span>
        <span className="siSubTitle">
          Studio apartment with airconditiioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubTitle">
          You can cancel later, so lock in great this price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>{item.rating >= 4 ? "Excellent" : "Good"}</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">&#8377;{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees*</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckBtn">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
