import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
} from "react-native";
import { TabNavigator } from 'react-navigation';
import ManagerDoctorHead from '../../../components/public/managerDoctorHead';//管理师版头部组件
import allList from './allList'; //全部
import AlreadyPass from './AlreadyPass'; //已通过
import WaitPass from './WaitPass'; //待通过

const ManagerTab = TabNavigator({
	allList: {
		screen: allList,
	},
	AlreadyPass: {
		screen: AlreadyPass,
	},
	WaitPass: {
		screen: WaitPass,
	}
},{
	tabBarPosition: 'top',
	tabBarOptions: {
		showIcon: false,
		inactiveTintColor: "#9e9898",
		activeTintColor: gColor.importColor,
		labelStyle: {
			fontSize: gFontSize.bigText,
		},
		style: {
			backgroundColor: gColor.color1,
		},
		indicatorStyle: {
			height: 0,
		}
	},	
})

export default class CustomerList extends Component {
	static navigationOptions = {
		title: "客户列表",
	}

	constructor(props) {
		super(props);
	}


	render() {
		managerDoctorInfo = {
			source:require('../../../assets/images/doc.jpg'),
			name:'周发斌',
			role:'家庭健康管理师',
			work:'湖北省武汉市洪山区',
			life:'湖北省武汉市洪山区',
		}
		const { source,name,role,work,life,outViewStyle } = managerDoctorInfo;
		return (
			<ScrollView>
				<ManagerDoctorHead
					source={source}
					name={name}
					role={role}
					work={work}
					life={life}
					outViewStyle={styles.outViewStyle}
					headPicStyle={styles.headPicStyle}
					imageStyle={styles.imageStyle}
					nameStyle={styles.nameStyle}
					roleStyle={styles.textStyle}
					workStyle={styles.textStyle}
					lifeStyle={styles.textStyle}
				/>
				<ManagerTab />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	outViewStyle: {
		backgroundColor:gColor.importColor,
		paddingVertical: 25,
		paddingHorizontal:15,
	},
	headPicStyle: {
		flexDirection:'row',
		alignItems:'center',
	},
	imageStyle: {
		width:80,
		height:80,
		borderWidth:1,
		borderRadius:40,
	},
	nameStyle: {
		color:gColor.whiteColor,
		fontSize:gFontSize.titleText,
		marginLeft: 15,
	},
	textStyle: {
		color:gColor.whiteColor,
		fontSize:gFontSize.bigText,
		marginTop:8,
	}
})