import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, Button, Image } from 'react-native';
import { UnfoldingBlock } from '../UnfoldingBlock/UnfoldingBlock';
import { UnfoldingBlockContainer } from '../../containers/UnfoldingBlockContainer/UnfoldingBlockContainer';

const CardUser = ({ cardData }) => {


    const getAddressPanel = () => {
        const { street, suite, city, zipcode, geo } = address;
        return (
            <View style={styles.wrap_text}>
                <Text style={styles.text}>
                    Street: {street}
                </Text>
                <Text style={styles.text}>
                    Suite: {suite}
                </Text>
                <Text style={styles.text}>
                    City: {city}
                </Text>
                <Text style={styles.text}>
                    Zipcode: {zipcode}
                </Text>
                <Text style={styles.text}>
                    Geo lat: {geo.lat}
                </Text>
                <Text style={styles.text}>
                    Geo lng: {geo.lng}
                </Text>
            </View>
        )
    }

    const getCompanyPanel = () => {
        const { name, catchPhrase, bs } = company;

        return (
            <View style={styles.wrap_text} >
                <Text style={styles.text}>
                    Name: {name}
                </Text>
                <Text style={styles.text}>
                    Catch Phrase: {catchPhrase}
                </Text>
                <Text style={styles.text}>
                    bs: {bs}
                </Text>
            </View >
        )
    }

    const { name, username, email, phone, website, address, company } = cardData;

    return (
        <View style={styles.card}>
            <View style={styles.top}>
                <Image
                    style={styles.icon}
                    source={require('./userIcon.png')}
                />
                <View>
                    <Text style={styles.text}>
                        Username: {username}
                    </Text>
                    <Text style={styles.text}>
                        Name: {name}
                    </Text>
                    <Text style={styles.text}>
                        E-mail: {email}
                    </Text>
                    <Text style={styles.text}>
                        Phone: {phone}
                    </Text>
                    <Text style={styles.text} onPress={() => Linking.openURL(`http://${website}`)}>
                        Website: {website}
                    </Text>
                </View>
            </View>


            <UnfoldingBlockContainer
                title="Address"
                getContent={getAddressPanel}
            />
            <UnfoldingBlockContainer
                title="Company"
                getContent={getCompanyPanel}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        marginVertical: 10
    },
    top: {
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 25,
        paddingHorizontal: 20,
    },
    wrap_text: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: '#FFF'
    },
    text: {
        marginBottom: 7
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 25,
    },
});

export default CardUser;