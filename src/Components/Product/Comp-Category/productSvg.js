import stateSvg from "../../../Svg/Svg";
import { NavLink } from "react-router-dom";

export const ProductSvg = props => {
  return (
    <div className="productSvg">
      <NavLink
        activeClassName="home"
        exact
        to="/woman"
        onClick={() => {
          props.setstate2(props.category.filter(s => s.id !== 2));
          props.setcl(false);
          props.setcl2(true);
          props.setBtnClass(true);
          props.setBtnClass2(false);
          props.setbtn(false);
          props.setbtn2(true);
          props.setstate(props.state2);
          props.exav();
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
          props.setcl(false);
          props.setcl2(true);
          props.setBtnClass2(true);
          props.setBtnClass(false);
          props.setbtn2(false);
          props.setbtn(true);
          props.setstate(props.state2);
          props.exav();
          props.setasd2(true);
          props.setasd(false);
        }}
      >
        {stateSvg.Svg2}
      </NavLink>
    </div>
  );
};
// import stateSvg from "../../../Svg/Svg";
//
// export const ProductSvg = (props) => {
//     return (
//         <div className="productSvg">
//             <p
//                 activeClassName="home"
//                 onClick={() => {
//                     props.setstate2([props.category.filter((s) => s.id !== 2)]);
//                 }}
//             >
//                 {stateSvg.Svg1}
//             </p>
//             <p
//                 activeClassName="home"
//                 onClick={() => {
//                     props.setstate2([props.category2.filter((s) => s.id !== 1)]);
//                 }}
//             >
//                 {stateSvg.Svg2}
//             </p>
//         </div>
//     );
// };
