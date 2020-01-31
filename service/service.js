
export default class Service {
    constructor() {
        this._link = 'https://jsonplaceholder.typicode.com';
    }

    async getResource(url = '') {
        const getData = await fetch(`${this._link}${url}`);

        if (!getData.ok) {
            throw new Error('Error: data is dont get');
        }

        return await getData.json();
    }

    getUserList() {
        return this.getResource(`/users`);
    }

    getUser(id) {
        return this.getResource(`/users/${id}`);
    }

    async getUserListCertainLong(currentNum, count = 4) {
        let userList = [];

        let i = 0;
        while (i < count) {
            const userData = await this.getUser(currentNum++)
                .then(res => res, error => false);

            if (!userData) break;

            userList = [...userList, userData];
            
            i++;
        }

        if (!userList.length) return false;


        return {
            lastNum: currentNum,
            userList
        };
    }
}