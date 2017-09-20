
import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextButton,
    WebView,
    ScrollView,
    TabBarIOS
} from 'react-native';

export default class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {

        return (
            <View style={{ height: 1000 }}>
                <WebView
                    style={styles.flex}
                        automaticallyAdjustContentInsets={false}//自动调整
                        startInLoadingState={true}//加载状态
                        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    source={{ uri: "https://uat.yeeoffice.cn/O365/SignIn?type=2#" }}
                />
            </View>
        );

    }
    onShouldStartLoadWithRequest(context) {
        console.log(context.url)
        // if(context.url.indexOf("Index")>0){
        //     alert('已经完成登陆');
        // }
        return true;
    }
}
const styles = StyleSheet.create({
    inputHeight: {
        height: 45,
    },
    flexDirection: {
        flexDirection: 'row'
    },
    flexWebView: {
        flex: 1,
    },
    flex: {
        flex: 1,
    },
    textStyle: {
        height: 45,
        borderWidth: 1,
        marginLeft: 1,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    textBtn: {
        width: 55,
        marginLeft: -5,
        marginRight: 1,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
})