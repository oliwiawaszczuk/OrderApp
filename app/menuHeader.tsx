import {View, Text, TouchableOpacity, FlatList} from "react-native"
import {useRouter} from "expo-router"
import {menuData} from "@/constants/data/MenuData";
import {StyleSheet} from "react-native"
import {MenuSection} from "@/constants/types/IMenu";
import {primary} from "@/constants/Colors";

export default function menuHeader() {
    const router = useRouter()

    const renderSection = ({item}: { item: MenuSection }) => (
        <>
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.navigate(item.screen)}
        >
            <Text style={styles.sectionTitle}>{item.title}</Text>
        </TouchableOpacity>
        {item.items.map((menuItem) => (
            <TouchableOpacity
                key={menuItem.label}
                style={styles.menuItem}
                onPress={() => router.navigate(menuItem.screen)}
            >
                <Text style={styles.menuText}>{menuItem.label}</Text>
            </TouchableOpacity>
        ))}
        </>
    );

    return (
        <View style={{marginBottom: 60,}}>
            <TouchableOpacity onPress={() => router.navigate("/home")}>
                <Text> back </Text>
            </TouchableOpacity>

            <View>
                <FlatList
                    data={menuData}
                    keyExtractor={(item) => item.title}
                    renderItem={renderSection}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
    },
    sectionTitle: {
        color: primary,
        fontSize: 18,
        fontWeight: "bold",
    },
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#555f67',
        minHeight: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    menuText: {
        fontSize: 16,
        color: "#40484e",
    },
});