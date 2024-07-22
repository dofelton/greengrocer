import { renderItem, renderListWithTemplate } from "./utility.mjs";

function productCard(product) {
    return `<li class="product-card">
    <h3>${product.description}</h3>
    <p>${product.additionalDescriptions}</p>
    <p>${product.foodCategory}</p>
    </li>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.dataSource.getData();
        console.log(list)

        this.renderList(list);
        // document.querySelector(".title").innerHTML = this.category;
    }
    renderList(list) {
        renderListWithTemplate(productCard, this.listElement, list)
    }
}