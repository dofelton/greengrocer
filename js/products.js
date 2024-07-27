import { loadHeaderandFooter, getParam  } from "/utility.mjs";
import Products from "/Products.mjs";
import Data from "/data.mjs";

loadHeaderandFooter();

const category = getParam("category");
const dataSource = new Data();
const element = document.querySelector(".product-list");
const listing = new Products(category, dataSource, element);

document.addEventListener('DOMContentLoaded', function() {
    let addToList = document.querySelectorAll('.product-anchor');
    addToList.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // event.preventDefault();
            let clickedUrl = link.href;
            let clickedText = link.innerText;
            const dataJson = JSON.stringify(clickedText);
            setLocalStorage('so-list', dataJson)
            console.log('Link clicked:', clickedText);
            window.location.href= clickedUrl
        });

    });
});

listing.init();
