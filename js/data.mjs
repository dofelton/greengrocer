import { setLocalStorage } from "./utility.mjs";

const api = ""

export async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
        return data;
    } else {
        throw { name: "servicesError", message: data };
    }
}

export default class Data {
    constructor(category) {
        // this.category = category;
        // this.path = `../json/${this.category}.json`;
    }
    async getData() {
        const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=Rb8YTA4fLvaCu4cYVkHrz2Sh4pGISxgMd9YrXlrd&query=squash';
        let result;
            try {
                const response = await fetch(url);
                result = await convertToJson(response);
            } catch (error) {
                console.error(error);   
            }     
            return result;
        }
    
    async findProductById(id) {
        const url = `https://api.nal.usda.gov/fdc/v1/food/${productId}?api_key=Rb8YTA4fLvaCu4cYVkHrz2Sh4pGISxgMd9YrXlrd`;
        try {
            // const productID;
            const response = await fetch(url);
            const result = await convertToJson(response);
            console.log(result);
        } catch (error) {
            console.error(error);   
        } 
    }

} 
