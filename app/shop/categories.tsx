import {View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import {IProductCategories, MainCategory, ProductCategories} from "@/constants/data/ProductCategories";
import {StyleSheet} from "react-native";
import {backgroundColor, defaultIconColor, primary} from "@/constants/styles/Colors";
import {SearchInput} from "@/components/forms/Input";
import {MaterialIcons} from "@expo/vector-icons";
import {Color} from "ansi-fragments/build/fragments/Color";
import {useRouter} from "expo-router";

export default function Categories() {
    const router = useRouter()
    const [ejected, setEjected] = useState<MainCategory | null>()
    const [searchText, setSearchText] = useState("")

    const switchEjectedMainCategory = (clickedMainCategory: MainCategory) => {
        setEjected(clickedMainCategory === ejected ? null : clickedMainCategory)
    }

    function selectCategory(selectedCategory: IProductCategories) {
        router.navigate(`/shop/${selectedCategory.name}`)
    }

    const filteredMainCategories = Object.values(MainCategory).filter((category) => {
        const mainCategoryMatches = category.toLowerCase().includes(searchText.toLowerCase())
        const subcategoriesMatch = getFilteredSubcategories(category).length > 0

        return mainCategoryMatches || subcategoriesMatch
    })

    function getFilteredSubcategories(mainCategory: MainCategory){
        return Object.values(ProductCategories).filter(category =>
            category.mainCategory === mainCategory &&
            category.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    return (
        <View style={styles.container}>
            <SearchInput get={searchText} set={setSearchText}/>
            {filteredMainCategories.map((category, index) => (
                <View style={styles.groupCategoryContainer} key={index}>
                    <TouchableOpacity key={index} onPress={() => switchEjectedMainCategory(category)} style={styles.mainCategory}>
                        <Text style={styles.categoryText}>{category}</Text>
                        <MaterialIcons name="arrow-drop-up" size={18} color={defaultIconColor}/>
                    </TouchableOpacity>
                    {category === ejected && (
                        <View style={styles.subCategoryContainer}>
                            {getFilteredSubcategories(category).map((subCategory, subIndex) => (
                                <TouchableOpacity onPress={() => selectCategory(subCategory)} key={subIndex} style={styles.subCategoryText}>
                                    <Text style={styles.categoryText}>{subCategory.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: backgroundColor,
    },
    groupCategoryContainer: {
        borderBottomWidth: 1.5,
        borderBottomColor: "#72767f",
    },
    mainCategory: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    subCategoryContainer: {
        paddingBottom: 10,
    },
    subCategoryText: {
        paddingVertical: 12,
        paddingLeft: 30,
    },
    categoryText: {
        color: "#254157",
        fontWeight: "600",
    },
})