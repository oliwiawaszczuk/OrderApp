import {View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import {IProductCategories, MainCategory, ProductCategories} from "@/constants/data/ProductCategories";
import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export default function Categories() {
    const [ejected, setEjected] = useState<MainCategory | null>()

    const getSubcategories = (mainCategory: MainCategory) => {
        return ProductCategories.filter(category => category.mainCategory === mainCategory);
    };

    const switchEjectedMainCategory = (clickedMainCategory: MainCategory) => {
        setEjected(clickedMainCategory === ejected ? null : clickedMainCategory);
    }

    function selectCategory(selectedCategory: IProductCategories) {
        console.log("Selected category: ", selectedCategory.name)
    }

    return (
        <View style={{marginHorizontal: 20}}>
            {/*SearchComponent*/}
            {Object.values(MainCategory).map((category, index) => (
                <View style={styles.groupCategoryContainer}>
                    <TouchableOpacity key={index} onPress={() => switchEjectedMainCategory(category)} style={styles.mainCategory}>
                        <Text>{category}</Text>
                        <Text>Arrow</Text>
                    </TouchableOpacity>
                    {category === ejected && (
                        <View style={styles.subCategoryContainer}>
                            {getSubcategories(category).map((subCategory, subIndex) => (
                                <TouchableOpacity onPress={() => selectCategory(subCategory)} key={subIndex} style={styles.subCategoryText}>
                                    <Text>{subCategory.name}</Text>
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
    groupCategoryContainer: {
        borderBottomWidth: 1,
        borderBottomColor: primary,
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
})