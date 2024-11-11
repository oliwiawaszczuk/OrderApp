import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {ScrollView, View} from "react-native";
import {styles} from "@/constants/styles/shopCSS";
import {useEffect, useState} from "react";
import {SearchInput} from "@/components/forms/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {useRouter} from "expo-router";
import {right_arrow} from "@/constants/icons";
import ProductCard from "@/components/ProductCard";
import {Products} from "@/assets/examplesData/Products";

export default function Shop() {
    const router = useRouter()
    const [searchText, setSearchText] = useState("")

    const filteredProducts = Products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <ScrollView style={styles.container}>
            <HeaderAndSubheader header="Shop" subheader="Browse and order essential construction materials tailored to your project needs. Access categories, compare products, and manage orders seamlessly—all in one place."/>
            <SearchInput get={searchText} set={setSearchText}/>
            <View style={{marginVertical: 10}}><PrimaryButton text={`Search by category${right_arrow}`} onPressFunc={() => router.navigate("/shop/categories")}/></View>
            <HeaderAndSubheader header="Your products" subheader=""/>
            <View style={{marginVertical: 10}}><PrimaryButton text={`Add product${right_arrow}`} onPressFunc={() => router.navigate("/shop")}/></View>

            {filteredProducts.map((product) => <ProductCard key={product.id} product={product}/>)}
        </ScrollView>
    )
}