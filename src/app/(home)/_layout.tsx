import { useAuth } from "@/src/Provders/AuthProvider";
import ChatProvider from "@/src/Provders/ChatProvider";
import NotificationsProvider from "@/src/Provders/NotificationsProviders";
import { Redirect, Slot, Stack } from "expo-router";



export default function HomeLayout() {
    const { user,profile } = useAuth();
    if (!user) {
        return <Redirect href={'/(auth)/login'} />
    }
    
    return (
        <NotificationsProvider>
            <ChatProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </ChatProvider>
        </NotificationsProvider>
    );
}