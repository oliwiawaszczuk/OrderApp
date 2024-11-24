import {create} from "zustand"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Tab} from "@/constants/types/ITabs";
import {Tabs} from "@/constants/data/TabsData";

interface StorageInterface {
    currentTab: Tab;
    session: string;
    hostApi: string;

    changeTab: (tab: Tab) => void;
    setSession: (session: string) => void;
}

export const storage = create<StorageInterface>()(
    persist(
        (set) => ({
            currentTab: Tabs[0],
            session: "",
            hostApi: "https//localhost:8080/", // can i add session here?

            changeTab: (tab: Tab) => set({currentTab: tab}),
            setSession: (session: string) => set({session: session}),
        }),
        {
            name: "app-storage",
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => {
                console.log('Connecting app-storage... ', state?.currentTab); // need load session
            },
        }
    )
);
