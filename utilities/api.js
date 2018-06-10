const api = {
    nasaPics(){
        const url = 'https://api.nasa.gov/planetary/apod?api_key=BO3IeIxOVg5VVR8VNlP51JvV3ghaeAcJyY2FcJen';
        return fetch(url).then((res) => res.json())
    }
};

module.exports = api;