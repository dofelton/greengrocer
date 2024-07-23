import { getLocalStorage, setLocalStorage, loadHeaderandFooter} from "./utility.mjs";
import List from "./List.mjs";

import { productCard } from "./Products.mjs";

loadHeaderandFooter();

const list = new List("so-list", ".product-list");
list.init();



// setLocalStorage('so-list', [{'description':'apple', 'additionalDescriptions': 'fruit', 'foodCategory': 'produce'}, {'description':'Berry', 'additionalDescriptions': 'fruits', 'foodCategory': 'produce'}])
// renderListContents();
