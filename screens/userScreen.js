import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';
import CardUser from '../components/CardUser/CardUser';
import Service from '../service/service';



export const UserScreen = props => {
    const [userList, setUserList] = useState();
    const [numLastCard, setNumLastCard] = useState(1);
    const service = new Service();

    useEffect(() => {
        service.getUserListCertainLong(numLastCard)
            .then(res => {
                if (!res) return;

                setUserList(res.userList);
                setNumLastCard(res.lastNum);
            })

    }, []);

    const loadMoreUsers = () => {
        service.getUserListCertainLong(numLastCard)
            .then(res => {
                if (!res) return;

                setUserList([...userList, ...res.userList]);
                setNumLastCard(res.lastNum);
            });
    }

    const renderItem = ({ item }) => {
        return <CardUser cardData={item} />;
    }

    return (
        <FlatList
            data={userList}
            renderItem={(item) => renderItem(item)}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreUsers}
            refreshing={true}
            keyExtractor={item => `${item.id}`}
        />
    );
}

