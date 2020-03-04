import React, { Component } from "react";
import { View, Image } from "react-native";
import Images from "../../assets/test2/Images";

export default class Floor extends Component {
    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        const imageIterations = Math.ceil(width / height);
// console.log(imageIterations);
        return (
            <View
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: width,
                    height: height,
                    overflow: 'hidden',
                    flexDirection: 'row'
                }}>
                    {/* <Image style={{ width: height, height: height }} key={1} resizeMode="stretch" source={Images.floor} /> */}
                {Array.apply(null, Array(imageIterations)).map(( el, idx) => {
                    return <Image style={{ width: height, height: height }} key={idx} resizeMode="stretch" source={Images.floor} />
                })}
            </View>
    );
  }
}
