import { useEffect, useState } from "react";
import kole from "../../../Redux/kole.png";
import { ChangeSubCategory } from "./ChangeSubCategory";

export const SubCategory = (props) => {
 

  let [text, settext] = useState("");

  let adds = () => {
    if (props.subcategorytext !== "") {
      props.setcategory2([
        ...props.category2.map((s) => {
          return {
            ...s,
            data: [
              ...s.data,
              {
                text: props.subcategorytext,
                id: Math.random(),
                product: [],
              },
            ],
          };
        }),
      ]);
      props.setaddclass2(false);
      props.setv2(true);
      props.setsubcategorytext("");
    }
  };

  let adds2 = () => {
    if (props.subcategorytext !== "") {
      props.setcategory([
        ...props.category.map((s) => {
          return {
            ...s,
            data: [
              ...s.data,
              {
                text: props.subcategorytext,
                id: Math.random(),
                product: [],
              },
            ],
          };
        }),
      ]);
      props.setv2(true);
      props.setsubcategorytext("");
      props.setaddclass2(false);
    }
  };

  return (
    <>
      <div className={`${props.v ? "subcategory" : "fsdf"}`}>
        {props.state.map((m) => {
          return (
            <>
              {m.data.map((s) => {
                return (
                  <>
                    <p
                      className="subcategoryP"
                      onClick={() => {
                        props.setstate3([s]);
                        props.setactivestyle(s.text);
                        props.setchangesubcategory(s);
                        
                      }}
                    >
                      <b
                        style={{
                          color: props.activestyle === s.text && "#0008C1",
                        }}
                      >
                        {s.text}
                      </b>
                      <span onClick={() => {
                         props.setschange(true)
                      }}>
                        <i className="fas fa-caret-down"></i>
                      </span>
                    </p>
                    <ChangeSubCategory {...props} />
                  </>
                );
              })}
            </>
          );
        })}{" "}
        <div className="addSubcategory">
          <p
            onClick={() => {
              props.setaddclass2(true);
              props.close();
            }}
          >
            <i className="fas fa-plus"></i>
          </p>
          <div
            className={`${
              props.addclass2 ? "window-subcategory" : "close-subcategory"
            }`}
          >
            <div className="cont-window">
              <h3>{props.categoryname.name} : добавить подкатегория</h3>
              <input
                type="text"
                placeholder="подкатегория"
                value={props.subcategorytext}
                onChange={(e) => {
                  props.setsubcategorytext(e.target.value);
                }}
              />
              <button
                className={`${props.btn ? "bb" : "bb11"}`}
                onClick={() => {
                  adds2();
                }}
              >
                <b>добавить</b>{" "}
              </button>
              <button
                className={`${props.btn2 ? "bb2" : "bb22"}`}
                onClick={() => {
                  adds();
                  // props.setstate([...props.state2]);
                }}
              >
                <b>добавить</b>{" "}
              </button>
              <p
                className="contWindowClose"
                onClick={() => props.setaddclass2(false)}
              >
                <i className="fas fa-times"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
