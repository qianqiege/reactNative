import React, {Component} from "react";
import {
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import { Carousel, } from "antd-mobile";

export default class ShowIndex extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<View style={{width: gScreen.width, height: gScreen.width/2,}}>
					<Carousel
					  dots={true}
			          autoplay={true}
			          infinite
			          selectedIndex={1}
			        >
			          {this.props.data.map(ii => (
			          	  <TouchableOpacity key={ii} onPress={() => alert("跳转页面接口")}>
				              <Image
				                source={{uri: `https://zos.alipayobjects.com/rmsportal/${ii}.png`}}
				                style={{width: gScreen.width, height: gScreen.width/2}}
				              />
			          	  </TouchableOpacity>
			          ))}
			        </Carousel>	
				</View>
						
			</View>
		);
	}
}