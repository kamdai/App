
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

export default class BrowserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchUrl: 'https://www.baidu.com/s?wd=',
            searchText: '',
        }

    }
    render() {
        return (
            <View>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                    <View style={styles.flex}>
                        <TextInput style={styles.textStyle} placeholder="请输入内容!" onChangeText={(searchText) => this.setState({ searchText })} />
                    </View>
                    <View style={styles.textBtn}>
                        <Text onPress={this.openSearch.bind(this)}>搜索</Text>
                    </View>
                </View>
                <View style={{ height: 1000 }}>
                    <WebView
                        style={styles.flex}
                        automaticallyAdjustContentInsets={true}//自动调整
                        startInLoadingState={true}//加载状态
                        scalesPageToFit={true}//自动缩放
                        source={{ uri: this.state.searchUrl }}
                        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                        javaScriptEnabled={true}
                        injectedJavaScript={this.removeHtml()}
                    />
                </View>
            </View>
        );

    }
    removeHtml() {
        let js = "function myfunc() { var item= document.getElementById('index-form'); if(item!=null){item.remove();}}  function myfunc2() {var item=document.getElementById('se-form');if(item!=null){item.remove();}}  myfunc2(); myfunc();";
        return js;
    }
    openSearch() {
        let searchUrl = 'https://www.baidu.com/s?wd=' + this.state.searchText
        this.setState({ searchUrl: searchUrl })
    }

    onShouldStartLoadWithRequest() {
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