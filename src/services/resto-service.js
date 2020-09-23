export default class RestoService {
    _apiBase = 'http://localhost:3000';


    async getResource(url) {
        const responce = await fetch(`${this._apiBase}${url}`);

        if (!responce.ok) {
            throw new Error(`Could not fetch ${url}, received ${responce.status}`);
        }

        return await responce.json();
    }

    async getMenuItems() {
        return await this.getResource('/menu/');
    }
}