import React, {useState} from "react";
import {ScrollView} from "react-native";
import {styles} from "@/constants/styles/orderCSS";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {InputText, InputNumeric, InputArea} from "@/components/forms/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {right_arrow} from "@/constants/icons";

export default function makeNewProject() {
    const [projectName, setProjectName] = useState("");
    const [projectNumber, setProjectNumber] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [leaderName, setLeaderName] = useState("");
    const [leaderPhoneNumber, setLeaderPhoneNumber] = useState("");
    const [note, setNote] = useState("");

    const handleCreateProject = () => {
        // endpoint /newProject/
    };

    return (
        <ScrollView style={styles.container2}>
            <HeaderAndSubheader header={"Make new project"} subheader={"Set up a new project, then add products, suppliers, and delivery details to get started right away!"}/>
            <InputText label={"Project name"} get={projectName} set={setProjectName}/>
            <InputNumeric label={"Project number"} get={projectNumber} set={setProjectNumber}/>
            <InputText label={"Project address"} get={localisation} set={setLocalisation}/>
            <InputText label={"Leader"} get={leaderName} set={setLeaderName}/>
            <InputNumeric label={"Leader phone number"} get={leaderPhoneNumber} set={setLeaderPhoneNumber}/>
            <InputArea label="Type your note here..." get={note} set={setNote} lines={4} />

            <PrimaryButton text={`Create new order${right_arrow}`} onPressFunc={handleCreateProject}/>

        </ScrollView>
    );
}