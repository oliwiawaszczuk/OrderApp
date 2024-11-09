import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "@/app/old/home";

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}