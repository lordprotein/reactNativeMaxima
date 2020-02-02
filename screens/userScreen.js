import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import CardUser from '../components/CardUser/CardUser';
import Service from '../service/service';



export const UserScreen = props => {
    const [userList, setUserList] = useState();
    const [numLastCard, setNumLastCard] = useState(1);
    const [isDownload, setIsDownload] = useState(true);
    const service = new Service();

    useEffect(() => {
        service.getUserListCertainLong(numLastCard)
            .then(res => {
                if (!res) return;
                console.log(3)
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
    console.log(isDownload)
    return (
        <View>
            {isDownload && <ActivityIndicator size="large" color="#0000ff" />}
            <FlatList
                data={userList}
                renderItem={(item) => renderItem(item)}
                onEndReachedThreshold={0.5}
                onEndReached={loadMoreUsers}
                refreshing={true}
                keyExtractor={item => `${item.id}`}
            />
        </View>

    );
}

