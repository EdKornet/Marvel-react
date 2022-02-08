class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=36d56d3f054c37a7f4b2fa591eb24ac3';
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getAllCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}3`);
    }
}

export default MarvelService;