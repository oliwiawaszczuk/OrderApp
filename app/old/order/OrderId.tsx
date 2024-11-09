import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import {RootStackParamList} from "@/App";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'OrderId'>;

export default function OrderIdScreen() {
  const route = useRoute<ProfileScreenRouteProp>();
  const { id } = route.params;

  return (
    <View>
      <Text>Order ID: {id}</Text>
    </View>
  );
}
