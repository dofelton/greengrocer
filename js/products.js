import { loadHeaderandFooter, getParam  } from "./utility.mjs";
import Products from "./Products.mjs";
import Data from "./data.mjs";

loadHeaderandFooter();
const category = getParam("category");
const dataSource = new Data();
console.log(dataSource);
const element = document.querySelector(".products");
const listing = new Products(category, dataSource, element);

listing.init();