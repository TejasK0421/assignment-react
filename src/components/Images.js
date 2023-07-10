import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import { SetImages, addtoTable, removefromTable } from "../actions/index";
import { geAllData } from "../features/ImagesSlice";
// import { useSelector } from 'react-redux'
import "../App.css";
export default function Images() {
  // let [buttonVal, setbuttonVal] = useState('Compare')

  // const data = useSelector()
  const dispatch = useDispatch();
  // fetches data
  const fetchData = (e) => {
    api
      .getData()
      .then((response) => {
        // setResponseData(response.data)
        // console.log("temp",responseData)
        dispatch(SetImages(response.data));
        // console.log(response)
        // console.log(responseData)
      })
      .catch((error) => {
        // console.log(error)
      });
  };
  const ImagesFetchList = useSelector(
    (state) => state.toDoReducer.ImagesFetchList
  );
  const selectedImages = useSelector((state) => state.toDoReducer.tableAdd);
  // console.log("selectedImages", selectedImages)
  useEffect(() => {
    // fetchData()
    // geAllData
    dispatch(geAllData());
  }, []);

  const isinCompareList = (id) => {
    let result = false;
    // console.log("temp",selectedImages)
    const item = selectedImages?.findIndex((image) => image?.id === id);
    // console.log("from isin compare list", item)
    if (item > -1) {
      result = true;
    }
    return result;
  };
  return (
    <div>
      <div className="product-container">
        {ImagesFetchList &&
          ImagesFetchList.map((item, index) => (
            <div key={item.id} className="product-item">
              <img src={item.thumbnailUrl} alt="" />
              <br />
              <div>{item.name}</div>
              <br />
              <div>{item.title}</div>
              <br />
              <div>{item.id}</div>
              <br />
              <div>{item.url}</div>
              <br />
              <div>
                <button
                  className="temp"
                  onClick={() => {
                    !isinCompareList(item.id)
                      ? dispatch(addtoTable(item))
                      : dispatch(removefromTable(item.id));
                  }}
                >
                  {isinCompareList(item.id) ? "Remove" : "Compare"}
                </button>
              </div>
            </div>
          ))}
      </div>
      {selectedImages.length > 0 && (
        <table>
          <tr>
            <th>PHOTO</th>
            <th>ID</th>
            <th>URL</th>
            <th>TITLE</th>
          </tr>
          {selectedImages.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.thumbnailUrl} alt="" />
              </td>
              <td>{item.id}</td>
              <td>{item.url}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
