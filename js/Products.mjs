import { renderListWithTemplate, getLocalStorage, setLocalStorage } from "./utility.mjs";

export function productCard(product) {
    return `<li class="product-card" id="addToList">
    <a href="list.html" class="product-"anchor">
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
            // setLocalStorage("so-list", []);
            console.log("local storage set to ", getLocalStorage("so-list"))
        }

    this.renderList(list);

    document.addEventListener('DOMContentLoaded', function() {
        let addToList = document.querySelectorAll('.product-card');

        addToList.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                let clickedUrl = link.href;
                let clickedText = link.innerText;
                setLocalStorage(clickedText)
                console.log('Link clicked:', clickedText);
                window.location.href= clickedUrl
            });

        });
    });
    // 
    // document
    //     .getElementById("addToList")
    //     addEventListener('click', function(event) {
    //         event.preventDefault();
    //         let clickedUrl = link.href;
    //         let clickedText = link.innerText;
    //         setLocalStorage(clickedText)
    //         console.log('Link clicked:', clickedText);
    //         window.location.href= clickedUrl
    //     });
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

