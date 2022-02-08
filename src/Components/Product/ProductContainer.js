import "./product.css";
import { Product } from "./product";
import { useState } from "react";
import kole from "../../Redux/kole.png";
import kolco from "../../Redux/kolco.png";

let ProductContainer = (props) => {
  const exav = () => {};

  const [category, setcategory] = useState([
    {
      img: kole,
      name: "кольцo",
      data: [
        {
          text: "кольцo",
          id: Math.random(),
          product: [{ artikul: "product", cena: "2000$", img: kole }],
        },
        {
          text: "обручальные ",
          id: Math.random(),
          product: [{ artikul: "product", cena: "2000$", img: kolco }],
        },
      ],
    },
    {
      img: kolco,
      name: "серьги ",
      data: [
        {
          text: "коктейльные",
          id: Math.random(),
          product: [{ artikul: "product", cena: "2000$", img: kole }],
        },
        {
          text: "помолвочные ",
          id: Math.random(),
          product: [{ artikul: "product", cena: "2000$", img: kolco }],
        },
      ],
    },
  ]);

  const [category2, setcategory2] = useState([
    {
      img: kole,
      name: "кольцo",
      data: [
        {
          text: "кольцo",
          id: Math.random(),
          product: [
            { artikul: "product", cena: "2000$", img: kole },
            { artikul: "product", cena: "2000$", img: kolco },
          ],
        },
        {
          text: "обручальные ",
          id: Math.random(),
          product: [{ artikul: "product", cena: "2000$", img: kolco }],
        },
      ],
    },
  ]);

  let [newcategory, setnewcategory] = useState("");
  let [img, setImg] = useState(null);
  let [img3, setImg3] = useState(null);
  let [img6, setImg6] = useState(null);
  let [img7, setImg7] = useState(null);
  let [img8, setImg8] = useState(null);
  let [newcategory2, setnewcategory2] = useState("");
  let [img2, setImg2] = useState(null);
  let [addclass, setaddclass] = useState(false);
  let [addclass2, setaddclass2] = useState(false);
  let [subcategory, setsubcategory] = useState([]);
  let [subcategorytext, setsubcategorytext] = useState("");
  let [newsubcategorytext, newsetsubcategorytext] = useState([]);
  let [cl, setcl] = useState(false);
  let [cl2, setcl2] = useState(false);
  let [state, setstate] = useState([]);
  let [state2, setstate2] = useState([]);
  let [state4, setstate4] = useState([]);
  let [btn, setbtn] = useState(false);
  let [btn2, setbtn2] = useState(false);
  let [patuhan, setpatuhan] = useState(false);
  let [prtext, setprtext] = useState("");
  let [prtext2, setprtext2] = useState("");
  let [v, setv] = useState(false);
  let [v2, setv2] = useState(false);
  let [activestyle, setactivestyle] = useState(false);
  let [activestyle2, setactivestyle2] = useState(false);
  let [activestyle3, setactivestyle3] = useState(false);
  let [activestyle4, setactivestyle4] = useState(false);
  let [activestyle5, setactivestyle5] = useState(false);
  let [categoryname, setcategoryname] = useState("");
  let [asd, setasd] = useState(false);
  let [asd2, setasd2] = useState(false);
  let [addBtnClass, setBtnClass] = useState(false);
  let [addBtnClass2, setBtnClass2] = useState(false);
  let [changecategory, setchangecategory] = useState({});
  let [changesubcategory, setchangesubcategory] = useState({});
  let [changeClass, setchangeClass] = useState(false);
  let [schange, setschange] = useState(false);
  let nam = null;
  const nam2 = null;

  let add = () => {
    setaddclass(true);
  };

  let close = () => {
    setaddclass(false);
  };

  let onChText = (e) => {
    setnewcategory(e.target.value);
  };
  let onChText2 = (e) => {
    setnewcategory2(e.target.value);
  };

  let adds = ([p]) => {
    setstate([p]);
  };

  return (
    <Product
      {...props}
      schange={schange}
      setschange={setschange}
      changesubcategory={changesubcategory}
      setchangesubcategory={setchangesubcategory}
      changeClass={changeClass}
      setchangeClass={setchangeClass}
      changecategory={changecategory}
      setchangecategory={setchangecategory}
      addBtnClass={addBtnClass}
      setBtnClass={setBtnClass}
      addBtnClass2={addBtnClass2}
      setBtnClass2={setBtnClass2}
      asd={asd}
      setasd={setasd}
      asd2={asd2}
      setasd2={setasd2}
      categoryname={categoryname}
      setcategoryname={setcategoryname}
      activestyle={activestyle}
      setactivestyle={setactivestyle}
      activestyle2={activestyle2}
      setactivestyle2={setactivestyle2}
      activestyle3={activestyle3}
      setactivestyle3={setactivestyle3}
      activestyle4={activestyle4}
      setactivestyle4={setactivestyle4}
      activestyle5={activestyle5}
      setactivestyle5={setactivestyle5}
      v2={v2}
      setv2={setv2}
      v={v}
      setv={setv}
      prtext={prtext}
      setprtext={setprtext}
      prtext2={prtext2}
      setprtext2={setprtext2}
      btn={btn}
      patuhan={patuhan}
      setpatuhan={setpatuhan}
      setbtn={setbtn}
      btn2={btn2}
      setbtn2={setbtn2}
      adds={adds}
      exav={exav}
      cl={cl}
      cl2={cl2}
      setcl={setcl}
      setcl2={setcl2}
      nae={nam}
      nam2={nam2}
      state={state}
      setstate={setstate}
      state2={state2}
      setstate2={setstate2}
      state4={state4}
      setstate4={setstate4}
      addclass={addclass}
      add={add}
      close={close}
      setnewcategory={setnewcategory}
      newcategory={newcategory}
      setnewcategory2={setnewcategory2}
      newcategory2={newcategory2}
      category={category}
      setcategory={setcategory}
      category2={category2}
      setcategory2={setcategory2}
      onChText={onChText}
      onChText2={onChText2}
      setImg={setImg}
      img={img}
      setImg2={setImg2}
      img2={img2}
      setImg6={setImg6}
      img6={img6}
      setImg7={setImg7}
      img7={img7}
      setImg8={setImg8}
      img8={img8}
      setImg3={setImg3}
      img3={img3}
      addclass2={addclass2}
      setaddclass2={setaddclass2}
      subcategory={subcategory}
      setsubcategory={setsubcategory}
      subcategorytext={subcategorytext}
      newsubcategorytext={newsubcategorytext}
      setsubcategorytext={setsubcategorytext}
      newsetsubcategorytext={newsetsubcategorytext}
    />
  );
};

// let mapStateToProps = (state) => {
//   return { category: state.productR.category };
// };
//
// let mapDispatchToProps = {
//   addCategory,
// };

export default ProductContainer;
