export default class Service {
    constructor() {
        this._link = 'https://jsonplaceholder.typicode.com';
    }

    getResource = async (url = '') => {
        const getData = await fetch(`${this._link}${url}`);

        if (!getData.ok) {
            throw new Error('Error: data is dont get');
        }

        return await getData.json();
    }

    getLazyLoadData = async (currentNum, count = 10, argPromice) => {
        let dataList = [];

        let i = 0;
        while (i < count) {
            const newData = await argPromice(currentNum++)
                .then(res => res, error => false);

            if (!newData) break;

            dataList = [...dataList, newData];

            i++;
        }

        if (!dataList.length) return false;


        return {
            lastNum: currentNum,
            dataList
        };
    }

    getUser = id => {
        return this.getResource(`/users/${id}`);
    }

    getUserListCertainLong = (currentNum, count) => {
        return this.getLazyLoadData(currentNum, count, this.getUser);
    }

    getPhotoInAlbum = id => {
        return this.getResource(`/photos?albumId=${id}`);
    }

    getPhoto = id => {
        return this.getResource(`/photos/${id}`);
    }

    getPhotoListCertainLong = (currentNum, count = 8) => {
        return this.getLazyLoadData(currentNum, count, this.getPhoto);
    }
}