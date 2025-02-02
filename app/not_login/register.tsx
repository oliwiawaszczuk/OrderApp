import {View} from "react-native";
import React, {useState} from "react";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {right_arrow} from "@/constants/icons";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {useRouter} from "expo-router";
import Space from "@/components/Space";
import {InputNumeric, InputText} from "@/components/forms/Input";
import {registerUser} from "@/api/authApi";

export default function Register() {
    const router = useRouter()

    const [nameAndSurname, setNameAndSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const summitRegistration = async () => {
        if (password !== password) {
            alert("Passwords do not match")
            return
        }

        const [firstName, lastName] = nameAndSurname.split(" ")

        const userData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        }

        try {
            const result = await registerUser(userData)
            console.log("Registration successful:", result)
            router.push("/not_login/successfulRegistration")
        } catch (error) {
            alert("Registration failed. Please try again.")
        }
    }

    return (
        <View style={{marginHorizontal: 35}}>
            <HeaderAndSubheader header="Finish Setting Up Your Profile" subheader=""/>

            <InputText label="Name and surname" get={nameAndSurname} set={setNameAndSurname}/>
            <InputText label="Email" get={email} set={setEmail}/>
            <InputText label="Password" get={password} set={setPassword}/>
            <InputText label="Repeat password" get={repeatPassword} set={setRepeatPassword}/>
            <InputNumeric label="Phone number" get={phoneNumber} set={setPhoneNumber}/>

            <PrimaryButton text={`Register ${right_arrow}`} onPressFunc={() => summitRegistration()}/>
            <Space height={20}/>
            <SecondaryButton text="Back" onPressFunc={() => router.back()}/>

        </View>
    );
}
