export const qs = (selector, parent = document) => parent.querySelector(selector);

// get data from local storage
export function getLocalStorage(key, data) {
    return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// get parameters
export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
}

export function renderList (templateFn, parentElement, list, position = "afterbegin", clear = false) {
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
    const header = await loadTemplate("../partials/header.html");
    const headerElement = document.querySelector("#header");
    const footer = await loadTemplate("../partials/footer.html");
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

export async function getData() {
    const api = "https://rapidapi.com/chihebnabil/api/grocery-pricing-api/playground/apiendpoint_0cd5f72c-4901-43b2-b352-049ad2ba08d5"

    try {
        const response = await fetch(api, { mode: 'no-cors' });
        if (!response.ok) {
            throw { name: "servicesError"};
        }
        const json = await response.json();
        console.log(json[0]);
    } catch (error) {
        console.error(error.message);
    }    
}