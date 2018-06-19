const api = {
    twoApi(){
        const url = 'http://localhost:3000/products';
        return fetch(url).then((res) => res.json())
    }
};

module.exports = api;