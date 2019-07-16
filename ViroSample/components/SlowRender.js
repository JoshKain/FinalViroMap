import React, { Component } from 'react';
import { Animated } from 'react-native';


class SlowRender extends Component {
    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
        const { fadeAnim } = this.state;
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }

    render() {
        const { fadeAnim } = this.state;
        const { style, children } = this.props;
        return (
            <Animated.View
                style={{
                    ...style,
                    center: fadeAnim,
                }}
            >
                {children}
            </Animated.View>
        );
    }
}

export default SlowRender;