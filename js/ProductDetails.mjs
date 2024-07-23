import { setLocalStorage, getLocalStorage } from "utility.mjs";

function productDetailsTemplate(product) {
    return `<section class="product-detail">
    <h2>${product.name}</h2>
    <img src="${product.image} alt="image of ${product.name}>
    <p>${product.description}</p>
    <p>${product.price}
    </section>`
}

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
    }
    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
            "afterBegin",
            productDetailsTemplate(this.product)
        );
    }
    addToList() {
        let listContents = getLocalStorage("so-list");
        if (!listContents) {
            listContents = [];
        }
        listContents.push(this.product);
        setLocalStorage("so-list", listContents);
    }
}
