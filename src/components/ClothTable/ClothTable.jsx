/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ClothRow from "../ClothRow/ClothRow";
import "./ClothTable.css";

export default function ClothTable({ formInput, setFormInput }) {
  const removeAll = () => {
    setFormInput([]);
  };

  return (
    <>
      {formInput.length < 1 ? (
        <div className="blank-container">
          <h1>Product List is Empty</h1>
          <img src="https://icons.veryicon.com/png/o/transport/sphere/case-12.png" alt="" />
        </div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead className="thead">
              <tr className="tr">
                <th>Id</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty </th>
                <th>Colore</th>
                <th>Size</th>
                <th>Date</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="body">
              {formInput.map((info) => (
                <ClothRow
                  info={info}
                  key={info.ClothId}
                  setFormInput={setFormInput}
                />
              ))}
            </tbody>
          </table>
          <div className="btn-div">
            <button onClick={removeAll} className="remove-btn">
              Remove All
            </button>
          </div>
        </div>
      )}
    </>
  );
}
