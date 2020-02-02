import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import CardUser from '../../components/CardUser/CardUser';
import Service from '../../service/service';
import { styles } from './styles';

export const UserScreen = props => {
    const [userList, setUserList] = useState(),
          [numLastCard, setNumLastCard] = useState(1),
          [isDownload, setIsDownload] = useState(true),
          service = new Service();


    useEffect(() => {
        service.getUserListCertainLong(numLastCard)
            .then(res => {
                if (!res) return;
                setUserList(res.dataList);
                setNumLastCard(res.lastNum);
                setIsDownload(false);
            })
    }, []);


    const loadMoreUsers = () => {
        setIsDownload(true);
        service.getUserListCertainLong(numLastCard)
            .then(res => {
                if (!res) {
                    setIsDownload(false);
                    return;
                }

                setUserList([...userList, ...res.dataList]);
                setNumLastCard(res.lastNum);
                setIsDownload(false);
            });
    }


    const renderItem = ({ item }) => {
        return <CardUser cardData={item} />;
    }


    return (
        <View style={styles.main}>
            <Text style={styles.title}>Users</Text>

            {isDownload && <ActivityIndicator size='large' color='#0000ff' />}

            <FlatList
                data={userList}
                renderItem={(item) => renderItem(item)}
                onEndReachedThreshold={2}
                onEndReached={loadMoreUsers}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    );
}

