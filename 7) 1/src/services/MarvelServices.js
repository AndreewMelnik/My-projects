
//Не прописываем extends React.Component потому что компонент на чистом js
class MarvelServices {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    
    _apiKey = 'apikey=fbd5a61daa314a383c60148b0a490f0b';
  
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

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelServices;