import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView } from 'react-native';
import { UserScreen } from './screens/userScreen';


const App = () => {
	return (
		<View style={styles.main}>
			<UserScreen />
		</View>
	);
}


const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#E5E5E5',
		paddingHorizontal: 40,
		paddingVertical: 20,
	},
});

export default App;