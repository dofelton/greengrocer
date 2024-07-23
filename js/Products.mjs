import { renderListWithTemplate, getLocalStorage, setLocalStorage } from "./utility.mjs";

export function productCard(product) {
    return `<li class="product-card" id="addToList">
    <a href="../list">
    <h3>${product.description}</h3>
    <p>${product.additionalDescriptions}</p>
    <p>${product.foodCategory}</p>
    </li></a>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.dataSource.getData();
        const localStorage = getLocalStorage("so-list");
        if (!localStorage) {
            setLocalStorage("so-list", []);
            console.log("local storage set to ", getLocalStorage("so-list"))
        }

        this.renderList(list);

        document
            .getElementById("addToList")
            .addEventListener("click", this.addToList(this));
    }
    renderList(list) {
        renderListWithTemplate(productCard, this.listElement, list)
    }
    addToList() {
        let listContents = getLocalStorage("so-list");
        if (!listContents) {
            listContents = [];
        } else {
            let description = element.getElementById("addToList");
        }

        listContents.push(this.product);
        setLocalStorage("so-list", listContents);
    }
}

