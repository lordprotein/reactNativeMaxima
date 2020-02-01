import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, Alert } from 'react-native';
import CardUser from '../components/CardUser/CardUser';
import Service from '../service/service';
import { CardImg } from '../components/CardImg/CardImg';
import { FindPanel } from '../components/FindPanel/FindPanel';



export const ImgScreen = props => {
   const [imgList, setImgList] = useState();
   const [numLastImg, setNumLastImg] = useState(1);
   const [isFilter, setIsFilter] = useState(false);
   const service = new Service();


   useEffect(() => {
      setNewListAllPhoto()
   }, []);


   const setNewListAllPhoto = () => {
      console.log('new list')

      service.getPhotoListCertainLong(1)
         .then(res => {
            if (!res) return;

            setImgList(res.dataList);
            setNumLastImg(res.lastNum);
            setIsFilter(false);
         })
   }


   const loadMorePhoto = () => {
      service.getPhotoListCertainLong(numLastImg)
         .then(res => {
            if (!res) return;

            setImgList([...imgList, ...res.dataList]);
            setNumLastImg(res.lastNum);
         });
   }


   const getFilteredData = (num) => {
      num = parseInt(num);
      if (!num) {
         Alert.alert('Please, enter number without letters and symbols')
         return;
      };

      service.getPhotoInAlbum(num)
         .then(res => {
            if (!res.length) {
               Alert.alert('Haven\'t this album');
               return;
            }

            setImgList(res);
            setNumLastImg(1);
            setIsFilter(true);
         });
   }

   const renderItem = ({ item }) => {
      const { url } = item;
      return <CardImg link={url} />;
   }


   return (
      <View>
         <FindPanel
            toFind={num => getFilteredData(num)}
            getAll={setNewListAllPhoto}
         />

         <FlatList
            style={{ marginTop: 30 }}
            data={imgList}
            renderItem={item => renderItem(item)}
            onEndReachedThreshold={0.5}
            onEndReached={!isFilter && loadMorePhoto}
            keyExtractor={item => `${item.id}`}
            progressViewOffset={1}
         />
      </View>
   );
}

const styles = StyleSheet.create({


});
