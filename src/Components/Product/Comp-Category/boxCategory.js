import "./SubCategory.css";
import { ChangeCategory } from "./ChangeCategory";
import {useSelector} from 'react-redux'




export const BoxCategory = (props) => {

  const categories = useSelector(state => state.categoryReducer.categories)
  console.log(categories, '')


  console.log(props.changecategory);
  return (
    <>
      {props.state2.map((p) => {
        return (
          <>
            <div
              className="boxCategory"
              style={{
                boxShadow:
                  props.activestyle2 === p &&
                  "0px 0px 10px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => {
                props.adds([p]);
                props.setactivestyle2(p);
                props.setstate4([p]);
                props.setv(true);
                props.setcategoryname(p);
                props.setv(true);
                props.setchangecategory(p);
              }}
            >
              <img src={p.img} alt="" />
              <b>
                <p>{p.name}</p>
              </b>
              <span
                onClick={() => {
                  props.setchangeClass(true);
                }}
              >
                <i class="fas fa-caret-down"></i>
              </span>
            </div>
          </>
        );
      })}
      <ChangeCategory {...props} />
    </>
  );
};
