import {create} from "zustand"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Tab, Tabs} from "@/api/Tabs";

interface StorageInterface {
    currentTab: Tab;
    changeTab: (tab: Tab) => void;
}

export const storage = create<StorageInterface>()(
    persist(
        (set) => ({
            currentTab: Tabs[0],
            changeTab: (tab: Tab) => set({currentTab: tab}),
        }),
        {
            name: "app-storage",
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => {
                console.log('Connecting app-storage... ', state?.currentTab);
            },
        }
    )
);
