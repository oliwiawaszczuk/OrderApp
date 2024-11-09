import {Platform, Text, View} from 'react-native';
import NavBar from "@/components/NavBar";
import {StyleSheet} from "react-native";
import Header from "@/components/Header";

export function HeaderNavBarLayout({ children }: {children: React.ReactNode}) {
    return (
        <View style={styles.container}>
            {Platform.OS === "android" && <View style={{marginTop: 16,}}/>}
            <View style={styles.headerText}><Header/></View>
            <View style={styles.slot}>{children}</View>
            <View style={styles.navBar}><NavBar/></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        // textAlign: 'center',
    },
    slot: {
        flex: 1,
    },
    navBar: {
        alignSelf: 'stretch',
    },
});
