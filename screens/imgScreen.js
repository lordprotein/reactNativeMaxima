import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, Alert } from 'react-native';
import Service from '../service/service';
import { CardImg } from '../components/CardImg/CardImg';
import { FindPanel } from '../components/FindPanel/FindPanel';



export const ImgScreen = props => {
   const [imgList, setImgList] = useState();
   const [numLastImg, setNumLastImg] = useState(1);
   const [isFilter, setIsFilter] = useState(false);
   const [titleAlbum, setTitleAlbum] = useState('All');
   const service = new Service();


   useEffect(() => {
      setNewListAllPhoto()
   }, []);


   const setNewListAllPhoto = () => {  //Clean download all photos
      service.getPhotoListCertainLong(1)
         .then(res => {
            if (!res) return;

            setImgList(res.dataList);

            setNumLastImg(res.lastNum);

            setTitleAlbum('All');

            setIsFilter(false);
         })
   }


   const loadMorePhoto = () => { //Authomatic download photos when scroll to end (lazyload)
      service.getPhotoListCertainLong(numLastImg)
         .then(res => {
            if (!res) return;

            setImgList([...imgList, ...res.dataList]);
            setNumLastImg(res.lastNum);
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
               return;
            }

            setImgList(res);

            setNumLastImg(1);

            getTitleAlbum(albumId);

            setIsFilter(true);
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
   }

});
