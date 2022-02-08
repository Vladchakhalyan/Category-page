import { useState } from "react";

export const ChangeSubCategory = (props) => {
  let [text, settext] = useState("");
  console.log(props.changesubcategory);

  return (
    <div className={`${props.schange ? 'changeSubCategory' : 'changeSubCategory2'}`}>
      <div className="cont-window">
        <h3> менят подкатегория</h3>
        <input
          type="text"
          placeholder="подкатегория"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <button
          className="changesubcategorybtn"
          onClick={() => {
            props.setchangesubcategory((props.changesubcategory.text = text));
            props.setschange(false)
            settext('')
          }}
        >
          <b>менят</b>{" "}
        </button>
        
        <p className="contWindowClose" onClick={() => {
           props.setschange(false)
        }}>
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  );
};
