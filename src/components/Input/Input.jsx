/* eslint-disable react/prop-types */
export default function Input({labelText, name, placeholder, required,type="text",maxLength,max,min,autoComplete }) {


  return (
    <div className="div">
    <label className="label">{labelText}    
    <input placeholder={placeholder} name={name} max={max} type={type} min={min} autoComplete={autoComplete} maxLength={maxLength} required={!!required} />
    </label>
  </div>
  )
}
