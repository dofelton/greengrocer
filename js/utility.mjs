import { convertToJson } from "./data.mjs"
export const qs = (selector, parent = document) => parent.querySelector(selector);

// get data from local storage
export function getLocalStorage(key, data) {
    return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
    const existingItems = JSON.parse(localStorage.getItem(key)) || [];
    console.log('existing: ', existingItems);
    // existingItems.items = existingItems.items || [];
    existingItems.push(data);
    console.log('newexisting: ', existingItems);
    localStorage.setItem(key, JSON.stringify(existingItems));


}

// get parameters
export function getParam(param) {
    const queryString = window.location.search;
//     console.log(`queryString: ${queryString}`)
    const urlParams = new URLSearchParams(queryString);
//     console.log(`urlParams: ${urlParams}`)
    const product = urlParams.get(param);
//     console.log(`in getParam: ${product}`)
    return product;
}

export function renderListWithTemplate (templateFn, parentElement, list, position = "afterbegin", clear = false) {
    list = list.foods;
    const htmlStrings = list.map(templateFn);
    if(clear) {
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderItem(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if (callback) {
        callback(data);
    }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

export async function loadHeaderandFooter() {
    const header = await loadTemplate("./partials/header.html");
    const headerElement = document.querySelector("#header");
    const footer = await loadTemplate("./partials/footer.html");
    const footerElement = document.querySelector("#footer");

    renderItem(header, headerElement);
    renderItem(footer, footerElement);
}

export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener("click", callback);
}

