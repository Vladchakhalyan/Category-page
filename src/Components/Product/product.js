import "./product.css";
import { AddCategory } from "./Comp-Category/addCategory";
import { AddCategory2 } from "./Comp-Category/addCategory2";
import { BoxCategory } from "./Comp-Category/boxCategory";
import { ProductSvg } from "./Comp-Category/productSvg";
import { SubCategory } from "./Comp-Category/SubCategory";
import { BgCategory } from "./Comp-Category/Bg-Category";
import { AddProduct } from "./Comp-Product/AddProduct";
import { Products2 } from "./Comp-Product/products2";
import { BgBroduct } from "./Comp-Product/BgProduct";
import { BgChanegeCategory } from "./Comp-Product/BgChanegeCategory";
import { BgSubCategoryChange } from "./Comp-Product/BgSubCategoryChange";

export const Product = (props) => {
  return (
    <>
      <section className="women-product">
        <div className="bg-product">{}</div>
        <BgCategory {...props} />
        <div className="category">
          <ProductSvg {...props} />
          <BoxCategory {...props} />
          <AddCategory {...props} />
          {/* <AddCategory2 {...props} /> */}
        </div>
        <SubCategory {...props} />
        <BgBroduct {...props} />
        <BgChanegeCategory {...props} />
        <BgSubCategoryChange {...props}/>
        <AddProduct {...props} />
        <Products2 {...props} />
      </section>
    </>
  );
};
