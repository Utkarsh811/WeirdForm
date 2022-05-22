import React from "react";
import { useState } from "react";
import Calculation from "../Mainform/Calculation";
import "../../src/Mainform/form.css";
const Form = () => {
  const [val, setval] = useState({
    username: "",
    password: "",
  });

  const handleinput = (e) => {
    
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);
 
    setval({
      ...val,

      [name]: value,
    });
  };

  const output = (e) => {
    e.preventDefault();
    let storedata={...val};
    console.log(storedata)
    let result = Calculation({...storedata})
    console.log("result=",result)
    alert(` The minimum no of Planes required are-:    ${result}`)
  };
  return (
    <>
      <form action="" onSubmit={output} className="form">
        <div>
          <label htmlFor="username">SIZE OF ARRAY:</label>
          <input
            name="username"
            type="text"
            value={val.username}
            onChange={handleinput}
            id="username"
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="password">ENTER THE ARRAY:</label>
          <input
            name="password"
            type="text"
            value={val.password}
            onChange={handleinput}
            id="password"
            autoComplete="off"
            placeholder="Format-:3,4,5,2,3,5"
          />
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
};
export default Form;
