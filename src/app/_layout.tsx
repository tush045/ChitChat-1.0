import { Redirect, Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AuthProvider, { useAuth } from "../Provders/AuthProvider";


export default function RootLayout() {
    
    return (
        
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AuthProvider>
                <Slot />
            </AuthProvider>
        </GestureHandlerRootView>
    );
}