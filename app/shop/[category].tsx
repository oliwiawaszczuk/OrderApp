import {useLocalSearchParams, useRouter} from "expo-router";
import React, {useEffect, useState} from "react";
import {ScrollView, Text, View} from "react-native";
import ProductCard from "@/components/ProductCard";
import {Products} from "@/assets/examplesData/Products";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {ProductCategories} from "@/constants/data/ProductCategories";
import {left_arrow} from "@/constants/icons";
import {SearchInput} from "@/components/forms/Input";
import Space from "@/components/Space";
import {getPathToBackCategories} from "@/app/shop/getPathToBackCategories";

export default function SearchProductByCategory() {
    const router = useRouter()
    const local = useLocalSearchParams();
    const category = local.category;
    const [pathToCategory, setPathToCategory] = useState<string>()
    const [searchText, setSearchText] = useState("")

    const filteredProducts = Products.filter((product) => product.category === category)
    const filteredWithSearchTextProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))


    useEffect(() => {
        setPathToCategory(getPathToBackCategories(category.toString()))
    }, []);

    return (
        <ScrollView style={{margin: 10,}}>
            <SearchInput get={searchText} set={setSearchText}/>
            <Space height={8}/>
            <PrimaryButton text={`${pathToCategory}`} onPressFunc={() => router.back()}/>
            <Space height={8}/>
            {filteredWithSearchTextProducts.map((product) => <ProductCard key={product.id} product={product}/>)}
        </ScrollView>
    )
}