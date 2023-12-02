/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./FormData.css";
import Input from "../Input/Input";


export default function FormData({ formInput, setFormInput }) {

  const [date, setDate] = useState(getCurrentFormattedDate())
  const handelSubmit = (event) => {
    event.preventDefault();
    const inptElements = [...event.target.elements];
    const product = {};


    inptElements.forEach((element) => {
      // console.log(`${element.name}: ${element.value}`);
      if(element.type === 'radio' && !element.checked){
        return
      }else{
        // element.checked=''
      }
      product[element.name] = element.value;
      // element.value=''
     
    });

    for (const item of formInput) {
      if (item.ClothId === product.ClothId) {
        return alert("This ID alredy exist");
      }
    }
    
    setFormInput([...formInput, product]);       
  };

  function getCurrentFormattedDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }




  return (
    <>
      <div className="form-container">
        <form className="product-form" action="Submit" onSubmit={handelSubmit}>
          <Input
            name="ClothId"
            type="number"
            autoComplete='off'
            min='1'           
            max='9999'
            required
            labelText="Cloth Id"
            placeholder="please give a number"
          />
          <Input
            name="ClothName"
            maxLength="15"
            autoComplete='off'
            required
            labelText="Cloth Name"
            placeholder="Cloth Name"
          />
          <Input
            name="Price"
            min="0"
            max='9999'
            autoComplete='off'
            required
            type="number"
            labelText="Price"
            placeholder="please give a number"
          />
          <Input
            name="Quantity"
            type="number"
            min='1'
            max='99'
            autoComplete='off'
            required
            labelText="Quantity"
            placeholder="please give a number"
          />
            <label className="texarea">
              Discription
            <textarea name="Description"cols="37" rows="10" placeholder="Optional" >
              
              </textarea>
            </label>
          <div className="div lastRow">
            <select name="Color" id="select" required>
              <option value={""}>Color</option>
              <option value={"Red"}>Red</option>
              <option value={"Blue"}>Blue</option>
              <option value={"Yallow"}>Yallow</option>
            </select>
            <div className="redio">
              <label>               
                Size:
                <div className="m">
                  <label>
                    <input type="radio" required name="size" value="M" />M
                  </label>
                </div>
                <div className="xl">
                  <label>
                    <input type="radio" required name="size" value="XL" />
                    XL
                  </label>
                </div>
                <div className="xxl">
                  <label>
                    <input type="radio" required name="size" value="XXL" />
                    XXL
                  </label>
                </div>
              </label>
            </div>
          </div>
          <div className="terms-date">
            <div className="terms">
              <input required type="checkbox" id="terms" name="terms" value="terms" />
              <label htmlFor="terms">Terms And Condition</label>
            </div>
            <div className="date">
              <label htmlFor="date">Date: </label>
              <input required type="date" id="date" onChange={(e)=>setDate(e.target.value)} value={date} name="date" />
            </div>
          </div>

          <input type="submit" className="submit" value="Submit" required />
        </form>
      </div>
    </>
  );
}
