import "./featuredProperties.css";
import useFetch from "../hooks/useFetch";
import Spinner from "../../utils/Spinner";
function FeaturedProperties() {
  const {
    data: featuredProperty,
    loading,
    error,
  } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=3&min=1&max=4000"
  );

  return (
    <div className="fp">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {featuredProperty &&
            featuredProperty.map((item) => (
              <div className="fpItem" key={item._id}>
                <img src={item.photos[0]} alt="" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  starting from &#8377;{item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
