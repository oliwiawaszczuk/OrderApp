import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "@/app/old/home";
import OrderIdScreen from "@/app/old/order/OrderId";
import OrderScreen from "@/app/old/order";
import {HeaderNavBarLayout} from "@/app/Layout";
import React from "react";
import StackNavigation from "@/app/StackNavigation";

export type RootStackParamList = {
    Home: undefined,
    Order: undefined,
    OrderId: { id: number },
}
const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
    return (
        <NavigationContainer>
            <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {() => (
            <HeaderNavBarLayout>
              <HomeScreen />
            </HeaderNavBarLayout>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ title: 'Order Screen' }}
        />
        <Stack.Screen
          name="OrderId"
          component={OrderIdScreen}
          options={{ title: 'Order Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
            {/*<stack.Navigator>*/}
            {/*    <stack.Group screenOptions={{headerShown: false}}>*/}
            {/*        /!*<stack.Screen name="home" options={{ headerShown: false }}> {()=>(<HeaderNavBarLayout> <HomeScreen/> </HeaderNavBarLayout>)} </stack.Screen>*!/*/}
            {/*        <stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>*/}
            {/*        /!*<stack.Screen name="Order" component={OrderScreen}/>*!/*/}
            {/*        /!*<stack.Screen name="OrderId" component={OrderIdScreen}/>*!/*/}
            {/*    </stack.Group>*/}
            {/*</stack.Navigator>*/}
        </NavigationContainer>
    )
}