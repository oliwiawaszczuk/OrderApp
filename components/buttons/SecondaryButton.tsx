import {Button, Text} from "react-native-paper";
import {ButtonInterface, styles} from "@/components/buttons/ButtonInterface";

export default function SecondaryButton({text, onPressFunc}: ButtonInterface) {
    return (
            <Button
                style={[styles.button, styles.buttonSecondary]}
                onPress={onPressFunc}
                labelStyle={styles.buttonTextSecondary}
                rippleColor="transparent"
            >
                {text}
            </Button>
    );
}