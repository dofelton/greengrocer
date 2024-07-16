const api = "https://rapidapi.com/chihebnabil/api/grocery-pricing-api/playground/apiendpoint_0cd5f72c-4901-43b2-b352-049ad2ba08d5"

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
        return data;
    } else {
        throw { name: "servicesError", message: data };
    }
}

export default class Data {
    constructor(category) {
        this.category = category;
        this.path = `../json/${this.category}.json`;
    }
    async getData() {
        try {
            const response = await fetch(api);
            if (!response.ok) {
                throw { name: "servicesError", message: data };
            }
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }    
    }
    
    async findProductById(id) {
        const response = await fetch(api + `product/${id}`);

    }
}