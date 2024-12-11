import ChatProvider from "@/src/Provders/ChatProvider";
import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { Chat, OverlayProvider } from "stream-chat-expo"




export default function HomeLayout() {
    return (
        <ChatProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </ChatProvider>
    );
}