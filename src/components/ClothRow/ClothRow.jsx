/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./ClothRow.css";
import { MdDeleteForever } from "react-icons/md";

export default function ClothRow({ info, setFormInput }) {
  const {
    ClothId,
    ClothName,
    Description,
    Quantity,
    date,
    size,
    terms,
    Price,
    Color,
  } = info;

  const deleteItem = () => setFormInput((prevState)=> prevState.filter((item)=>item.ClothId !==ClothId))


  // console.log(formInput);

  return (
    <>
      <tr className="tb">
        <td className="bn">{ClothId}</td>
        <td>{ClothName}</td>
        <td>{Price}</td>
        <td>{Quantity}</td>
        <td>{Color}</td>
        <td>{size}</td>
        <td>{date}</td>
        <td className="textarea-row"><div className="paddin-5px">{Description}</div></td>
        <td className="icon"
          onClick={deleteItem}
        >
          <MdDeleteForever />
        </td>
      </tr>
    </>
  );
}
