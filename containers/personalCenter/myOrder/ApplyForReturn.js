import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	TextInput,
} from "react-native";

import ModalDropdown from 'react-native-modal-dropdown';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class ApplyForReturn extends React.Component{

	static navigationOptions = {
		title:'申请退换货'
	}
	constructor(props) {
		super(props);	
	}

	render(){
		return(
			<View style={{position:'relative',height:'100%'}}>
				<ScrollView style={{backgroundColor:gColor.whiteColor,position:'relative',height:'100%'}}>
				
					<View style={styles.rowSty}>
						<Text>商品名称：</Text>
						<Text>L--阿拉伯糖（升级版）</Text>
					</View>
					<View style={styles.rowSty}>
						<Text style={{lineHeight:40}}>商品图片：</Text>
						<Image source={require('../../../assets/images/L-alabo.png')}
							style={{width:70,height:60}}
						/>
					</View>
					<View style={styles.rowSty}>
						<Text>购买数量：</Text>
						<Text>1</Text>
					</View>
					<View style={styles.rowSty}>
						<Text style={{paddingVertical:8}}>类型：</Text>
						<ModalDropdown options={['换货', '退货']} defaultValue="选择退换货" 
							style={{borderWidth:1,borderColor:gColor.borderColors,width:gScreen.width/1.2,marginLeft:'8%'}}
							textStyle={{fontSize:gFontSize.centerText,paddingVertical:8,marginLeft:5}}
							dropdownStyle={{borderWidh:1,width:gScreen.width/1.2}}
							dropdownTextHighlightStyle={{fontSize:gFontSize.centerText}}/>
					</View>
					<View style={styles.rowSty}>
						<Text style={{paddingVertical:8}}>提交数量：</Text>
						<ModalDropdown options={['1', '2']} defaultValue="1" 
							style={{borderWidth:1,borderColor:gColor.borderColors,width:gScreen.width/1.2}}
							textStyle={{paddingVertical:8,fontSize:gFontSize.centerText,marginLeft:5}}
							dropdownStyle={{borderWidh:1,width:gScreen.width/1.2}}
							dropdownTextHighlightStyle={{fontSize:gFontSize.centerText}}/>
					</View>
					<View style={styles.rowSty}>
						<Text>问题描述：</Text>
						<TextInput underlineColorAndroid="transparent" multiline = {true} 
							editable = {true} nnnnnnnnnumberOfLines = {7} 
							style={{padding:0,paddingLeft:10,paddingTop:5,textAlignVertical: 'top',borderColor: gColor.borderColors, 
								borderWidth: 1,width:gScreen.width/1.3,height:100}}/>
					</View>

				
				</ScrollView>
				<TouchableOpacity style={styles.add}>
					<Text style={styles.addr}>确认提交</Text>
				</TouchableOpacity>
			</View>
		)
	
	}
}

const styles = StyleSheet.create({
	rowSty: {
		flexDirection:'row',
		padding:15,
		borderBottomWidth:1,
		borderColor:gColor.borderColors,
	},
	add: {
		width:gScreen.width,
		backgroundColor:gColor.importColor,
		height:45,
		position: "absolute",
		bottom:0,
	},
	addr: {
		textAlign:'center',
		paddingVertical:13,
		color: gColor.whiteColor,
	}
})