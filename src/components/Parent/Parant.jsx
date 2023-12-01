/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ClothTable from "../ClothTable/ClothTable";
import FormData from "../Formdata/FormData";
import "./Parant.css";
import getDataLocalStorage from "../Utilitis/GetData";

export default function Parant() {


  const [formInput, setFormInput] = useState(getDataLocalStorage('formInput'));

  useEffect(() => {
    localStorage.setItem("formInput", JSON.stringify(formInput));
  }, [formInput]);

  return (
    <div className="body-sec">
      <FormData formInput={formInput} setFormInput={setFormInput} />
      <ClothTable formInput={formInput} setFormInput={setFormInput} />
    </div>
  );
}
