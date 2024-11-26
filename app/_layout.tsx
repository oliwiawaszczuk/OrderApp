import {Slot, useRouter} from 'expo-router';
import {Platform, Text, View} from 'react-native';
import NavBar from "@/components/NavBar";
import {StyleSheet} from "react-native";
import {useEffect} from "react";
import Header from "@/components/Header";
import {backgroundColor} from "@/constants/styles/Colors";
import {storage} from "@/api/store";
import {Loading} from "@/components/Loading";
import {Tabs} from "@/constants/data/TabsData";
import {Footer} from "@/components/Footer";

export default function Layout() {
    const router = useRouter()
    const loginState = storage((state) => state.loginState)
    const currentTab = storage((state) => state.currentTab)
    const changeTab = storage((state) => state.changeTab)

    useEffect(() => {
        storage.getState().autoLogin();
        // console.log("")

        if (loginState === "not-login")
            router.navigate("/not_login")
    }, []);

    return (
        <View style={styles.container}>
            {Platform.OS === "android" && <View style={{marginTop: 16,}}/>}
            <View style={styles.headerText}><Header/></View>
            {loginState === "login" && <>
                <View style={styles.slot}><Slot/></View>
                <View style={styles.navBar}><NavBar /></View>
            </>}
            {loginState === "logining" && <>
                <Loading/>
            </>}
            {loginState === "not-login" && <>
                <View style={styles.slot}><Slot/></View>
            </>}
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
        backgroundColor: backgroundColor,
    },
    navBar: {
        alignSelf: 'stretch',
    },
});
