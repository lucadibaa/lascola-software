import { Dimensions, FlatList } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import Svg from 'react-native-svg'
import { VictoryPie, VictoryLabel } from "victory-native"

const HomeReports = () => {

    const pieData = [
        {
            product: 'Birra Moretti',
            net: 47,
            color: '#009FFF',
            gradientCenterColor: '#006DFF',
            focused: true,
        },
        {
            product: 'Birra Moretti',
            net: 47, value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'
        },
        {
            product: 'Birra Moretti',
            net: 47, value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'
        },
        {
            product: 'Birra Moretti',
            net: 47, value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'
        },
    ]
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ]

    return (
        <View
            style={{
                margin: 15,
                borderRadius: 20,
                backgroundColor: '#232B5D',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Svg width={Dimensions.get('screen').width} height={Dimensions.get('screen').width}>
                    <VictoryPie
                        standalone={false}
                        colorScale={'qualitative'}
                        // padAngle={5}
                        innerRadius={70}
                        labelRadius={({ innerRadius }) => innerRadius + 15}
                        style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
                        data={[
                            { x: "Cats", y: 35 },
                            { x: "Dogs", y: 40 },
                            { x: "Birds", y: 55 }
                        ]}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        style={[
                            {
                                fontSize: 25,
                                fill: "#fff",
                                fontWeight: "600",
                                lineHeight: 40
                            },
                            { fill: "#fff", fontWeight: "600", fontSize: 16 }
                        ]}
                        x={Dimensions.get('screen').width * 0.5}
                        y={Dimensions.get('screen').width * 0.525}
                        text={["2,717.3", "lbs of credit"]}
                    />
                </Svg>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})

export default HomeReports
