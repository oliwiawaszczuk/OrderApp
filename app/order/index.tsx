import {Text} from 'react-native-paper';
import {Link, Slot, useRouter} from "expo-router";
import {TouchableOpacity} from "react-native";

export default function Order() {
    const router = useRouter();
    return (
        <>
            <Text>Order</Text>
            <Link href="/order/useOldProject">OLD</Link>
            {/*<Slot/>*/}
        </>
    );
}
