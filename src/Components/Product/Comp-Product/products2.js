import { useState } from "react";

export const Products2 = (props) => {
  const [currentPage, setcurrentPage] = useState(null);

  function dragStartHandler(e, product) {
    console.log("drag", product);
    setcurrentPage(product);
  }

  function dragEndHandler(e) {
    e.target.style.background = "white";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "lightgray";
  }

  function dragHandler(e, product) {
    e.preventDefault();
    props.setstate3(
      props.state3.map((s) => {
        return s.product.map((p) => {
          if (p.id === product.id) {
            return { ...p, order };
          }
        });
      })
    );
  }

  function dropHandler(e) {}

  return (
    <div style={{ display: "flex" }}>
      {props.state3.map((s) => {
        return (
          <>
            {s.product.map((p) => {
              return (
                <div
                  onDragStart={(e) => dragStartHandler(e, s.product)}
                  onDragLeave={(e) => dragEndHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  draggable={(e) => dragHandler(e, s.product)}
                  onDrop={(e) => dropHandler(e)}
                  className="cn cn11"
                  style={{
                    boxShadow:
                      props.activestyle3 === p &&
                      "0px 0px 10px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => {
                    props.setactivestyle3(p);
                  }}
                >
                  <div className="cn2">
                    <div className="cn3">
                      <img src={p.img} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        <b>{p.cena}</b>
                      </p>
                      <p>
                        <b>{p.artikul}</b>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};
