import React, {useState} from "react";
import {ScrollView, TouchableOpacity, View} from "react-native";
import {Text, TextInput} from "react-native-paper";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {styles} from "@/constants/orderCSS";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {InputText, InputNumeric} from "@/components/forms/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function makeNewProject() {
    const [projectName, setProjectName] = useState("");
    const [projectNumber, setProjectNumber] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [leaderName, setLeaderName] = useState("");
    const [leaderPhoneNumber, setLeaderPhoneNumber] = useState("");
    const [note, setNote] = useState("");

    const handleCreateProject = () => {
    };

    return (
        <ScrollView style={styles.container2}>
            <HeaderAndSubheader header={"Make new project"} subheader={"Set up a new project, then add products, suppliers, and delivery details to get started right away!"}/>
            <InputText label={"Project name"} get={projectName} set={setProjectName}/>
            <InputNumeric label={"Project number"} get={projectNumber} set={setProjectNumber}/>
            <InputText label={"Project address"} get={localisation} set={setLocalisation}/>
            <InputText label={"Leader"} get={leaderName} set={setLeaderName}/>
            <InputNumeric label={"Leader phone number"} get={leaderPhoneNumber} set={setLeaderPhoneNumber}/>

            <TextInput
                style={[styles.input, styles.textArea]}
                mode="outlined"
                label="Type your note here..."
                value={note}
                onChangeText={setNote}
                multiline={true}
                numberOfLines={4}
            />
            <PrimaryButton text={"Create new order   ➜"} onPressFunc={handleCreateProject}/>

        </ScrollView>
    );
}