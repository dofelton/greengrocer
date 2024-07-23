import { getLocalStorage, setLocalStorage } from "./utility.mjs";

function listItemTemplate(product) {
    return `<li class="product-card">
    <h3>${product.description}</h3>
    <p>Additional information: ${product.additionalDescriptions}</p>
    <p>Category: ${product.foodCategory}</p>
    </li>`;
}

export default class List {
    constructor(key, parentSelector) {
        this.key = key;
        this.parentSelector = parentSelector;
    }
    async init() {
        let list = getLocalStorage(this.key);
        if (list) {
        this.renderListContents(list);
        } else {
            setLocalStorage("so-list", []);
            const htmlItems = `<h3>The list is empty.</h3>`
            document.querySelector(".product-list").innerHTML = htmlItems;
        }

    }
    
    renderListContents() {
        let listItems = getLocalStorage(this.key);
        console.log(`listItems: ${listItems}`)
        if (listItems.length > 0) {
            const htmlItems = listItems.map((item) => listItemTemplate(item));
            document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
        } else {
            const htmlItems = `<h3>The list is empty.</h3>`
            document.querySelector(".product-list").innerHTML = htmlItems;
        }
    };
    deleteFromList(item) {
        var onList = getLocalStorage("so-list");
        let index = 0;
        for(const element in onList) {
            if (onList[element].Id == item.target.id) {
                index = element;
                break;
            }};
        onList.splice(index,1);
        setLocalStorage("so-list", onList);
        location.reload();
        }
}