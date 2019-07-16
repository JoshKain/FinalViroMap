import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, Modal, TouchableHighlight, Image, Button, Linking } from 'react-native'
import SlowRender from './SlowRender.js'





export default class PlaceInfo extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    _Open = () => {
        const scheme = 'geo:0,0?q='
        const lat = this.props.info.latitude;
        const lng = this.props.info.longitude;
        const latLng = `${lat},${lng}`;
        const label = `${this.props.info.url}`
        const url = `${scheme}${latLng}(${label})`


        Linking.openURL(url);

    }


    render() {
        const names = this.props.info.visitorNames

        return (
            <Fragment>
                <SlowRender>
                    <View>


                        {this.props.info.url === 'Piccadilly' &&
                            <View>

                                <Image source={require('./piccadilly.jpg')} resizeMode="contain" style={{ width: 360, height: 250 }} />
                                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>
                                <Text style={{ fontSize: 15 }}>{this.props.info.visitors} visitors </Text>

                                <Text style={{ fontSize: 25 }}>{"\n"}Quite a different affair when compared to the bustling array of bus and tram stops today... </Text>

                            </View>
                        }

                        {this.props.info.url === 'Strangeways' &&
                            <View>

                                <Image source={require('./Assize1.jpg')} resizeMode="contain" style={{ width: 360, height: 250 }} />
                                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>
                                <Text style={{ fontSize: 15 }}>Visitors {this.props.info.visitors} </Text>
                                <Text style={{ fontSize: 25 }}>{"\n"}Assize Courts in the Strangeways district, once the tallest building in Manchester. Destroyed in the Blitz in 1940, Strangeways Prison standing in its place. </Text>


                            </View>
                        }
                        {this.props.info.url === 'hulme' &&
                            <View>

                                <Image source={require('./hulmefire.jpg')} resizeMode="contain" style={{ width: 360, height: 250 }} />
                                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>
                                <Text style={{ fontSize: 15 }}>Visitors {this.props.info.visitors} </Text>
                                <Text style={{ fontSize: 25 }}>{"\n"}The scene of Paulden's fire on Cavendish Street in Hulme, Manchester in 1957. Now Opal Halls, student accomodation for MMU </Text>


                            </View>
                        }
                        {this.props.info.url === 'victoria' &&
                            <View>

                                <Image source={require('./victoria.jpg')} resizeMode="contain" style={{ width: 360, height: 250 }} />
                                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>
                                <Text style={{ fontSize: 15 }}>Visitors {this.props.info.visitors} </Text>
                                <Text style={{ fontSize: 25 }}>{"\n"}Quarter to Nine, feeling fine. Victoria station.</Text>


                            </View>
                        }
                        {this.props.info.url === 'mancoats' &&
                            <View>
                                <Image source={require('./mancoats.jpg')} resizeMode="contain" style={{ width: 360, height: 250 }} />
                                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>
                                <Text style={{ fontSize: 15 }}>Visitors {this.props.info.visitors} </Text>
                                <Text style={{ fontSize: 25 }}>{"\n"}A man, in Manc, wearing a coat, walking in Ancoats.. Mancoats! - Jersey Street</Text>


                            </View>
                        }

                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'blue'
                        }}>
                            <Text style={{ textDecorationLine: "underline" }} >
                                {"\n"}{"\n"}{"\n"}{"\n"} {"\n"}{"\n"}{"\n"}{"\n"} {"\n"}{"\n"}{"\n"}{"\n"}
                                Visitor List


                    </Text>
                            <Text>  {"\n"}
                                {names}</Text>

                        </View>

                    </View >
                    <Button
                        style={{ fontSize: 20, color: 'green' }}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => this._Open()}
                        title="google maps">nav
                         </Button>
                    <Button
                        style={{ fontSize: 20, color: 'green' }}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => this.props.ChangeMapState()}
                        title="back">back
                         </Button>
                    <Button
                        style={{ fontSize: 20, color: 'green' }}
                        styleDisabled={{ color: 'red' }}
                        title="camera placeholder">camera placeholder
                         </Button>

                </SlowRender>
            </Fragment>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
