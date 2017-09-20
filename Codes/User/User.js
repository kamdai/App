
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

export default class UserMes extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    componentDidMount() {
        debugger;
        // WeChat.registerApp('wwauthb5fca5409ebd8b6d000177','')
    }
    render() {
        return (
            <View style={{ height: 1000 }}>
                {/* {this.WXLogin()} */}
            </View>
        );

    }
    //微信登录示例
    // WXLogin = () => {
    //     let scope = 'snsapi_userinfo';
    //     let state = 'wechat_sdk_demo';
    //     debugger;
    //     //判断微信是否安装
    //     wechat.isWXAppInstalled()
    //         .then((isInstalled) => {
    //             if (isInstalled) {
    //                 //发送授权请求
    //                 wechat.sendAuthRequest(scope, state)
    //                     .then(responseCode => {
    //                         //返回code码，通过code获取access_token
    //                         this.getAccessToken(responseCode.code);
    //                     })
    //                     .catch(err => {
    //                         Alert.alert('登录授权发生错误：', err.message, [
    //                             { text: '确定' }
    //                         ]);
    //                     })
    //             } else {
    //                 Platform.OS == 'ios' ?
    //                     Alert.alert('没有安装微信', '是否安装微信？', [
    //                         { text: '取消' },
    //                         { text: '确定', onPress: () => this.installWechat() }
    //                     ]) :
    //                     Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
    //                         { text: '确定' }
    //                     ])
    //             }
    //         })
    // };
}
