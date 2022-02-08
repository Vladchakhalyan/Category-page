import stateSvg from "../../../Svg/Svg";
import { useState } from "react";
export const ChangeCategory = (props) => {
  let [text, settext] = useState("");
  let [img, setImg] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div
      className={`${!props.changeClass ? "ChangeCategory" : "ChangeCategory2"}`}
    >
      <div className="settingWindowCategory">
        <h3>
          <b>Менят категория</b>
        </h3>
        <div className="productSvg2"></div>
        <input
          type="text"
          className="text"
          placeholder="Категория"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <div className="item-file">
          <input
            type="file"
            onChange={(event) => {
              onImageChange(event);
            }}
          />
          <p>{stateSvg.Svg3}</p>
          <img src={img} />
          <p
            className="ii"
            onClick={() => {
              props.setImg(null);
            }}
          >
            {props.img ? <i className="far fa-times-circle"></i> : ""}
          </p>
          <span>
            загрузить
            <br />
            фото
          </span>
        </div>
        <button
          className="addbtnclass"
          onClick={() => {
            props.setchangecategory(
              (props.changecategory.name = text),
              (props.changecategory.img = img)
            );
            settext("");
            setImg(null);
            props.setchangeClass(false);
          }}
        >
          <b> менят</b>
        </button>
        <button
          className="addbtnclass addbtnclass22"
          onClick={() => {
            props.setcategory(
              props.category.filter((i) => i.id !== props.changecategory.id)
            );
            props.setchangeClass(false);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <p
          className="Ctg-Close"
          onClick={() => {
            props.setchangeClass(false);
          }}
        >
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  );
};
