import Spinner from "../../utils/Spinner";
import useFetch from "../hooks/useFetch";
import "./propertyList.css";

function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/count/countByType"
  );
  console.log(data, loading, error);

  const images = [
    "https://shorturl.at/A0ccL",
    "https://www.omgproperties.in/wp-content/uploads/2023/07/Lifespace-Villas-Kochi-Banner-2-scaled.jpg",
    "https://www.omgproperties.in/wp-content/uploads/2023/07/Lifespace-Villas-Kochi-Banner-2-scaled.jpg",
    "https://www.omgproperties.in/wp-content/uploads/2023/07/Lifespace-Villas-Kochi-Banner-2-scaled.jpg",
    "https://www.omgproperties.in/wp-content/uploads/2023/07/Lifespace-Villas-Kochi-Banner-2-scaled.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {data.length > 0 &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
