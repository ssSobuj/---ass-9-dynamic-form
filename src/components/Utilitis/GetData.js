const getDataLocalStorage =(getData)=>{
    return JSON.parse(localStorage.getItem(getData)) || [];
 }
 
 export default getDataLocalStorage