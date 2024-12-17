import { useAuth } from "@/src/Provders/AuthProvider";
import ChatProvider from "@/src/Provders/ChatProvider";
import { Redirect, Slot, Stack } from "expo-router";



export default function HomeLayout() {
    const { user } = useAuth();
    if (!user) {
        return <Redirect href={'/(auth)/login'} />
    }
    return (
        <ChatProvider>
            <Stack screenOptions={{headerShown:false}}/>
        </ChatProvider>
    );
}