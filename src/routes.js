import { ProductSection } from "./common/containers/ProductPage/ProductPage";


let routes = [
  {
    path: "/prouct/end-of-arm-effectors/grippers/finger-grippers/:product_name",
    name: "Product",
    Component: ProductSection,
  },
];
export default routes;
