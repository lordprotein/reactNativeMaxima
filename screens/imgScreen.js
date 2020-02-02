import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, Alert, ActivityIndicator } from 'react-native';
import Service from '../service/service';
import { CardImg } from '../components/CardImg/CardImg';
import { FindPanel } from '../components/FindPanel/FindPanel';



export const ImgScreen = props => {
    const [imgList, setImgList] = useState(); //For actual list with img
    const [numLastImg, setNumLastImg] = useState(1); //For lazy load in "All" img
    const [isFilter, setIsFilter] = useState(false); //For check staus filter ( is try - delete lazyload)
    const [titleAlbum, setTitleAlbum] = useState('All'); //For title album
    const [isDownload, setIsDownload] = useState(true);

    const service = new Service();


    useEffect(() => {
        setNewListAllPhoto()
    }, []);


    const setNewListAllPhoto = () => {  //Clean download all img
        setIsDownload(true);
        service.getPhotoListCertainLong(1)
            .then(res => {
                if (!res) {
                    setIsDownload(false);
                    return;
                }

                setImgList(res.dataList); //Start list img
                setNumLastImg(res.lastNum); //For lazyload
                setTitleAlbum('All'); //Default name album with all img
                setIsFilter(false); //False edit
                setIsDownload(false);
            })
    }


    const loadMorePhoto = () => { //Authomatic download img when scroll to end (lazyload)
        setIsDownload(true);
        service.getPhotoListCertainLong(numLastImg)
            .then(res => {
                if (!res) {
                    setIsDownload(false);
                    return;
                }

                setImgList([...imgList, ...res.dataList]);
                setNumLastImg(res.lastNum);
                setIsDownload(false);
            });
    }


    const getTitleAlbum = id => { //get title album when using filter
        service.getAlbumTitle(id)
            .then(res => setTitleAlbum(res));
    }


    const getFilteredData = (albumId) => { //create new data for filtered data
        albumId = parseInt(albumId);
        if (!albumId) {
            Alert.alert('Please, enter number without letters and symbols')
            return;
        };

        service.getPhotoInAlbum(albumId)
            .then(res => {
                if (!res.length) {
                    Alert.alert('Haven\'t this album');
                    setIsDownload(false);
                    return;
                }

                setImgList(res);
                // setNumLastImg(1);
                getTitleAlbum(albumId);
                setIsFilter(true);
                setIsDownload(false);
            });
    }

    const renderItem = ({ item }) => {
        const { url, title } = item;
        return (
            <CardImg
                link={url}
                title={title}
            />
        );
    }



    return (
        <View>

            <FindPanel
                toFind={num => getFilteredData(num)}
                getAll={setNewListAllPhoto}
            />

            <Text style={styles.title}>{titleAlbum}</Text>
 
            {isDownload && <ActivityIndicator size="large" color="#0000ff" />}

            <FlatList
                data={imgList}
                renderItem={item => renderItem(item)}
                keyExtractor={item => `${item.id}`}
                onEndReachedThreshold={!isFilter && 0.5}
                onEndReached={!isFilter && loadMorePhoto}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginBottom: 50,
        fontSize: 25,
        textAlign: "center",
        color: '#626262'
    },
});
