import {create} from "zustand"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Tab} from "@/constants/types/ITabs";
import {Tabs} from "@/constants/data/TabsData";
import axiosInstance from "@/api/axiosInstance";

interface StorageInterface {
    currentTab: Tab;
    token: string | null;
    loginState: "login" | "not-login" | "logining";

    changeTab: (tab: Tab) => void;
    setToken: (token: string) => void;
    logout: () => void;
    autoLogin: () => Promise<void>;
}

export const storage = create<StorageInterface>()(
    persist(
        (set) => ({
            currentTab: Tabs[0],
            token: null,
            loginState: "not-login",

            changeTab: (tab: Tab) => set({currentTab: tab}),
            setToken: (token: string) => {set({token: token, loginState: "login"})},
            logout: () => {
                set({ token: null, loginState: "not-login" });
                AsyncStorage.removeItem("app-storage");
            },
            autoLogin: async () => {
                set({loginState: "login"});
                // try {
                //     const storageData = await AsyncStorage.getItem('app-storage');
                //     if (storageData) {
                //         const parsedData = JSON.parse(storageData);
                //
                //         if (parsedData?.state?.token) {
                //             const response = await axiosInstance.post('/auth/validate', null, {
                //                 headers: {
                //                     Authorization: `Bearer ${parsedData.state.token}`,
                //                 },
                //             });
                //
                //             if (response.status === 200) {
                //                 set({
                //                     token: parsedData.state.token,
                //                     loginState: 'login',
                //                 });
                //             } else {
                //                 throw new Error('Token validation failed');
                //             }
                //         } else {
                //             throw new Error('No token found in storage');
                //         }
                //     }
                // } catch (error) {
                //     console.error('Auto-login error:', error);
                //     set({ token: null, loginState: "not-login" });
                //     AsyncStorage.removeItem("app-storage");
                // }
            },
        }),
        {
            name: "app-storage",
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => {
                // console.log('Connecting app-storage... ', state?.currentTab); // need load session
            },
        }
    )
);
