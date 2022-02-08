import "./addCategory.css";
import stateSvg from "../../../Svg/Svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {addCategoryAC} from '../../../Redux/actions/categoryAction'


export const AddCategory = props => {
     useEffect(() => {
    props.setstate([...props.state2]);
   }, [props.state2]);

  const dispatch = useDispatch()

  const adds = () => {
    if (props.newcategory !== "") {

      dispatch(addCategoryAC({
        id: Math.random(),
        name: 'TYTYUT'
      }))

      props.setcategory([
        ...props.category,
        {
          id: Math.random(),
          img: props.img,
          name: props.newcategory,
          data: [],
        },
      ]);
      props.setImg(null);
    }
  };
  const adds2 = () => {
    if (props.newcategory !== "") {
      props.setcategory2([
        ...props.category2,
        {
          id: Math.random(),
          img: props.img,
          name: props.newcategory,
          data: [],
        },
      ]);
      props.setImg(null);
    }
  };

  useEffect(() => {
    props.setstate2(props.category.filter(s => s.id !== 2));
  }, [props.category]);

  useEffect(() => {
    props.setstate2(props.category2.filter(s => s.id !== 1));
  }, [props.category2]);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      props.setImg(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className={`${props.cl2 ? "addCategory" : "addCategorynone"}`}>
      <p
        onClick={() => {
          props.add();
          props.setaddclass2(false);
        }}
      >
        <b>
          {" "}
          <i className="fas fa-plus"></i>
        </b>
      </p>
      <div
        className={`${props.addclass ? "windowAddCategory" : "Close-window"} `}
      >
        <div className="settingWindowCategory">
          <h3>
            <b>Добавить категория</b>
          </h3>
          <div className="productSvg2">
            <NavLink
              activeClassName="home"
              to="/woman"
              onClick={() => {
                props.setstate2(props.category.filter(s => s.id !== 2));
                props.setaddclass2(false);
                props.setBtnClass(true);
                props.setBtnClass2(false);
              }}
            >
              {stateSvg.Svg1}
              <span> женский </span>
            </NavLink>
            <NavLink
              activeClassName="home"
              to="/man"
              onClick={() => {
                props.setstate2(props.category2.filter(s => s.id !== 1));
                props.setaddclass2(false);
                props.setBtnClass2(true);
                props.setBtnClass(false);
              }}
            >
              {stateSvg.Svg2}
              <span>мужской</span>
            </NavLink>
          </div>
          <input
            type="text"
            className="text"
            placeholder="Категория"
            value={props.newcategory}
            onChange={props.onChText}
          />
          <div className="item-file">
            <input
              type="file"
              onChange={event => {
                onImageChange(event);
              }}
            />
            <p>{stateSvg.Svg3}</p>
            <img src={props.img} />
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
            className={`${props.addBtnClass ? "addbtnclass" : "setbtnclass"}`}
            onClick={() => {
              adds();
              props.add();
              props.setnewcategory("");
              if (props.newcategory !== "") {
                props.close();
              }
            }}
          >
            <b> добавить</b>
          </button>
          <button
            className={`${
              props.addBtnClass2 ? "addbtnclass2" : "setbtnclass2"
            }`}
            onClick={() => {
              adds2();
              props.setnewcategory2("");
              if (props.newcategory !== "") {
                props.close();
              }
            }}
          >
            <b> добавить</b>
          </button>
          <p className="Ctg-Close" onClick={props.close}>
            <i className="fas fa-times"></i>
          </p>
        </div>
      </div>
    </div>
  );
};
