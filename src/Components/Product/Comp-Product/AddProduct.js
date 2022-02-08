import "./AddProduct.css";
import { NavLink } from "react-router-dom";
import stateSvg from "../../../Svg/Svg";
import { useState } from "react";

export const AddProduct = props => {
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      props.setImg3(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onImageChange2 = event => {
    if (event.target.files && event.target.files[0]) {
      props.setImg6(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onImageChange3 = event => {
    if (event.target.files && event.target.files[0]) {
      props.setImg7(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onImageChange4 = event => {
    if (event.target.files && event.target.files[0]) {
      props.setImg8(URL.createObjectURL(event.target.files[0]));
    }
  };

  let [text, settext] = useState("");

  return (
    <div>
      <div
        className={`${props.v2 ? "addclass" : "aasd"}`}
        onClick={() => props.setpatuhan(true)}
      >
        <b>
          {" "}
          <i className="fas fa-plus"></i>
        </b>
      </div>
      <div className={`${!props.patuhan ? "patuhan" : "setpatuhan"}`}>
        <div className="ss">
          <div className="ss-h2">
            <h2>Добавить изделия</h2>
          </div>
          <div className="addProduct" style={{ zIndex: 4 }}>
            <div className="addCategory2">
              <div className="productSvg2 productSvg3">
                <NavLink
                  activeClassName="home"
                  exact
                  to="/woman"
                  onClick={e => {
                    props.setstate2(props.category.filter(s => s.id !== 2));
                    props.setcl(false);
                    props.setcl2(true);
                    props.setaddclass2(false);
                    props.setasd(true);
                    props.setasd2(false);
                  }}
                >
                  {stateSvg.Svg1}
                </NavLink>
                <NavLink
                  activeClassName="home"
                  to="/man"
                  onClick={() => {
                    props.setstate2(props.category2.filter(s => s.id !== 1));
                    props.setcl(true);
                    props.setcl2(false);
                    props.setaddclass2(false);
                    props.setasd2(true);
                    props.setasd(false);
                  }}
                >
                  {stateSvg.Svg2}
                </NavLink>
              </div>
              {props.state2.map(p => {
                return (
                  <div
                    className="boxCategory boxCategory2"
                    style={{
                      boxShadow:
                        props.activestyle4 === p &&
                        "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={() => {
                      props.adds([p]);
                      props.setactivestyle4(p);
                    }}
                  >
                    <img src={p.img} alt="" />
                    <b>
                      <p>{p.name}</p>
                    </b>
                  </div>
                );
              })}
            </div>
            {props.state.map(m => {
              return (
                <>
                  <div style={{ display: "flex" }}>
                    {m.data.map(s => {
                      return (
                        <p
                          className="eca"
                          onClick={() => {
                            props.setstate3([s]);
                            props.setactivestyle5(s.text);
                          }}
                        >
                          <b
                            style={{
                              color: props.activestyle5 === s.text && "#0008C1",
                            }}
                          >
                            {" "}
                            {s.text}
                          </b>
                        </p>
                      );
                    })}
                  </div>
                </>
              );
            })}
            <div className="boxb">
              <div className="item-file2">
                <div className="item-file exs">
                  <input
                    style={{ zIndex: 3 }}
                    type="file"
                    onChange={event => {
                      onImageChange(event);
                    }}
                  />
                  <p className="iii">{stateSvg.Svg3}</p>
                  <img src={props.img3} className="imgF" />
                  <p
                    className="ii"
                    onClick={() => {
                      props.setImg3(null);
                    }}
                  >
                    {props.img3 ? <i className="far fa-times-circle"></i> : ""}
                  </p>
                  <span>
                    загрузить
                    <br />
                    фото
                  </span>
                </div>
                <div className="item-file4">
                  <div className="item-file3">
                    {" "}
                    <input
                      style={{ zIndex: 3 }}
                      type="file"
                      onChange={event => {
                        onImageChange(event);
                      }}
                    />
                    <p>{stateSvg.Svg3}</p>
                    <img src={props.img3} style={{ zIndex: 2 }} />
                    <p
                      className="ii"
                      onClick={() => {
                        props.setImg3(null);
                      }}
                    >
                      {props.img3 ? (
                        <i className="far fa-times-circle"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="item-file3">
                    {" "}
                    <input
                      style={{ zIndex: 3 }}
                      type="file"
                      onChange={event => {
                        onImageChange2(event);
                      }}
                    />
                    <p>{stateSvg.Svg3}</p>
                    <img src={props.img6} style={{ zIndex: 2 }} />
                    <p
                      className="ii"
                      onClick={() => {
                        props.setImg6(null);
                      }}
                    >
                      {props.img6 ? (
                        <i className="far fa-times-circle"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="item-file3">
                    {" "}
                    <input
                      style={{ zIndex: 3 }}
                      type="file"
                      onChange={event => {
                        onImageChange3(event);
                      }}
                    />
                    <p>{stateSvg.Svg3}</p>
                    <img src={props.img7} style={{ zIndex: 2 }} />
                    <p
                      className="ii"
                      onClick={() => {
                        props.setImg7(null);
                      }}
                    >
                      {props.img7 ? (
                        <i className="far fa-times-circle"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="item-file3">
                    {" "}
                    <input
                      style={{ zIndex: 3 }}
                      type="file"
                      onChange={event => {
                        onImageChange4(event);
                      }}
                    />
                    <p>{stateSvg.Svg3}</p>
                    <img src={props.img8} style={{ zIndex: 2 }} />
                    <p
                      className="ii"
                      onClick={() => {
                        props.setImg8(null);
                      }}
                    >
                      {props.img8 ? (
                        <i className="far fa-times-circle"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="adas adas2">
                <input
                  type="text"
                  className="texts"
                  placeholder="Цена"
                  value={props.prtext}
                  onChange={e => {
                    props.setprtext(e.target.value);
                  }}
                />
              </div>
              <div className="adas adas2">
                <input
                  type="text"
                  className="texts"
                  placeholder="Артикул"
                  value={props.prtext2}
                  onChange={e => {
                    props.setprtext2(e.target.value);
                  }}
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="divbtn">
                <div></div>
                <button
                  className={`${props.asd ? "asd" : "asd11"}`}
                  onClick={() => {
                    props.setcategory([
                      ...props.category.map(s => {
                        return {
                          ...s,
                          data: [
                            ...s.data.map(l => {
                              return {
                                ...l,
                                product: [
                                  ...l.product,
                                  {
                                    cena: props.prtext,
                                    artikul: props.prtext2,
                                    img: props.img3,
                                  },
                                ],
                              };
                            }),
                          ],
                        };
                      }),
                    ]);
                    props.setImg3(null);
                    props.setprtext2("");
                    props.setprtext("");
                    props.setpatuhan(false);
                  }}
                >
                  <b> добавить</b>
                </button>
                <button
                  className={`${props.asd2 ? "asd2" : "asd22"}`}
                  onClick={() => {
                    props.setcategory2([
                      ...props.category2.map(s => {
                        return {
                          ...s,
                          data: [
                            ...s.data.map(l => {
                              return {
                                ...l,
                                product: [
                                  ...l.product,
                                  {
                                    cena: props.prtext,
                                    artikul: props.prtext2,
                                    img: props.img3,
                                  },
                                ],
                              };
                            }),
                          ],
                        };
                      }),
                    ]);
                    props.setImg3(null);
                    props.setprtext2("");
                    props.setprtext("");
                    props.setpatuhan(false);
                  }}
                >
                  <b> добавить</b>
                </button>
              </div>
              <p
                className="Ctg-Close ctg2"
                onClick={() => {
                  props.setpatuhan(false);
                }}
              >
                <i className="fas fa-times"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
