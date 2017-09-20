
import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TabBarIOS
} from 'react-native';
 import BrowserForm from '.././Browser/BForm';
 import Contacts from '.././Contacts/Contacts';
 import UserMes from '.././User/User';

export default class MainForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 'WebView'
        }

    }
    render() {
        return (
            <View style={styles.flexHeader}>
                <TabBarIOS style={styles.flex}>
                    <TabBarIOS.Item 
                        title="WebView" systemIcon='search'
                        onPress={this.select.bind(this, 'WebView')}
                        selected={this.state.tab === 'WebView'}>
                             <BrowserForm></BrowserForm> 
                    </TabBarIOS.Item>

                    <TabBarIOS.Item title="contacts" systemIcon='contacts'
                        onPress={this.select.bind(this, 'phonelist')}
                        selected={this.state.tab === 'phonelist'}>
                        <Contacts></Contacts> 
                    </TabBarIOS.Item>

                    <TabBarIOS.Item title="user" systemIcon='most-viewed'
                        onPress={this.select.bind(this, 'star')}
                        selected={this.state.tab === 'star'}>
                        <UserMes></UserMes> 
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );

    }
    //Tab标签点击
    select(tabName) {
        this.setState({ tab: tabName });
    }
}
const styles = StyleSheet.create({
    flexHeader: {
        marginTop: 25,
        flex: 1,
    },
    message: {
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    message_title: {
        fontSize: 18,
        marginBottom: 5
    }
})