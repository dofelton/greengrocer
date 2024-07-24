import { getLocalStorage, setLocalStorage, loadHeaderandFooter} from "./utility.mjs";
import List from "./List.mjs";
// import { renderListContents } from "./List.mjs"

import { productCard } from "./Products.mjs";

loadHeaderandFooter();

const list = new List("so-list", ".product-list");
list.init();

document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.listForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let formData = {
            item: document.getElementById('item').value,
            details: document.getElementById('details').value,
            quantity: document.getElementById('quantity').value
        };

        const formDataJson = JSON.stringify(formData);
        setLocalStorage('so-list', formDataJson);
        form.reset();
        location.reload();
    });
});


// setLocalStorage('so-list', [{'description':'apple', 'additionalDescriptions': 'fruit', 'foodCategory': 'produce'}, {'description':'Berry', 'additionalDescriptions': 'fruits', 'foodCategory': 'produce'}])
// renderListContents();
