import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from '../../components/public/CustomTitle'; 


var TextBtn = [
	{title:'我的健康档案'},
	{title:'注册邀请码'},
	{title:'我的个人资料'},
	{title:'认证'},
	{title:'我的家庭健康管理师'},
	{title:'健康管理方案'},
	{title:'设置'},
];

export default class TitleArray extends Component{

	constructor(props){
		super(props);
	}

	renderText(item){
		return(
			<CustomTitle 
				key={item.title}
				title={item.title}
				rightIcon={<FontAwesome name="angle-double-right" size={18} />}
				textStyle={{fontSize:gFontSize.bigText}}
				style={{paddingVertical:10,borderBottomWidth:1,
					borderBottomColor:gColor.borderColors,
					backgroundColor:gColor.whiteColor,
				}}
				
			/>
		)
	}

	render(){
		return(
			<View>
				{
					TextBtn.map((item)=>this.renderText(item))
				}
				
			</View>
		)
	}
}