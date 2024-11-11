import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {View} from "react-native";
import {styles} from "@/constants/styles/shopCSS";
import {useEffect, useState} from "react";
import {SearchInput} from "@/components/forms/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {useRouter} from "expo-router";

export default function Shop() {
    const router = useRouter()
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        console.log("Search text: ", searchText) // szukanie produktów
    }, [searchText]);

    return (
        <View style={styles.container}>
            <HeaderAndSubheader header="Shop" subheader="Browse and order essential construction materials tailored to your project needs. Access categories, compare products, and manage orders seamlessly—all in one place."/>
            <SearchInput get={searchText} set={setSearchText}/>
            <View style={{marginVertical: 10}}><PrimaryButton text="Search by category ->" onPressFunc={() => router.navigate("/shop/categories")}/></View>
            <HeaderAndSubheader header="Your products" subheader=""/>
            <View style={{marginVertical: 10}}><PrimaryButton text="Add product ->" onPressFunc={() => router.navigate("/shop")}/></View>


        </View>
    )
}