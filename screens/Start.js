import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons';

import ListFunctions from '../components/start/list';

export default class Start extends React.Component {
    static navigationOptions = {
        title: "Animations",
        header: null,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.page_title_area}>
                    <Text style={styles.page_title}>Animations</Text>
                </View>
                <ListFunctions navigation={navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    page_title_area: {
        display: "flex",
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 28,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    page_title: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold",
        // fontStyle: "italic",
        // fontFamily: "monospace",
    },
});