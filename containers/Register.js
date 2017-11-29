import React, {Component} from "react";
import {
	Text,
	ScrollView,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default class Register extends Component {
	static navigationOptions = {
		title: "注册账号"
	}

	constructor(props) {
		super(props);
		this.state = {
			phone: '',
			verification: '',
			password: '',
			confirm:'',
		};
	}

	render() {
		return (
			<ScrollView style={styles.outStyle}>
				<View style={{alignItems:'center',justifyContent:'center',paddingVertical:20,marginTop:20}}>
					<Image source={require('../assets/images/userImage.png')} style={styles.userImage} />
				</View>
				<View>
					<View style={styles.inputOut}>
						<View style={{flexDirection:'row'}}>
							<FontAwesome name='phone-square' size={24} color="#ad0e11" />
							<Text style={styles.textStyle}> 手　机:　</Text>
						</View>				
						<TextInput
							style={{height: 50,flex:1}}
							onChangeText={(phone) => this.setState({phone})}
							value={this.state.phone}
						/>
					</View>
					<View style={styles.inputOut}>
						<View style={{flexDirection:'row'}}>
							<FontAwesome name='gear' size={24} color="#ad0e11" />
							<Text style={styles.textStyle}> 验证码:　</Text>
						</View>				
						<TextInput
							style={{height: 50,flex:1,}}
							onChangeText={(verification) => this.setState({verification})}
							value={this.state.verification}
						/>
						<TouchableOpacity style={{borderWidth:1,paddingVertical:5,paddingHorizontal:2,borderRadius:5,}}>
							<Text>发送验证码</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.inputOut}>
						<View style={{flexDirection:'row'}}>
							<FontAwesome name='key' size={24} color="#ad0e11" />
							<Text style={styles.textStyle}> 密　码:　</Text>
						</View>				
						<TextInput
							style={{height: 50,flex:1}}
							onChangeText={(password) => this.setState({password})}
							value={this.state.password}
						/>
					</View>
					<View style={styles.inputOut}>
						<View style={{flexDirection:'row'}}>
							<FontAwesome name='lock' size={24} color="#ad0e11" />
							<Text style={styles.textStyle}> 确认密码:　</Text>
						</View>				
						<TextInput
							style={{height: 50,flex:1}}
							onChangeText={(confirm) => this.setState({confirm})}
							value={this.state.confirm}
						/>
					</View>
					<TouchableOpacity style={styles.submitStyle}>
						<Text style={styles.submitText}>注册</Text>
					</TouchableOpacity>
				</View>	

			</ScrollView>
		)
	}
}


const styles = StyleSheet.create ({
	outStyle:{
		backgroundColor:gColor.whiteColor,
	},

	userImage: {
		width:100,
		height:100,
	},

	inputOut:{
		flexDirection:'row',
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,
		height: 50,
		alignItems:'center',
		marginHorizontal:20,
	},

	textStyle: {
		fontSize:gFontSize.middleText,
	},

	submitStyle: {
		height:50,
		backgroundColor:gColor.importColor,
		borderColor:gColor.importColor,
		marginTop:30,
		marginHorizontal:20,
		borderRadius:10,
		alignItems:'center',
		justifyContent:'center',
	},

	submitText: {
		fontSize:gFontSize.middleText,
		color:gColor.whiteColor,
	}
})