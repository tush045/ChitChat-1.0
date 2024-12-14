import { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { useAuth } from "./AuthProvider";
import { User } from '@supabase/supabase-js';
import { supabase } from "../lib/supabase";


const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_PUBLIC_KEY as string)
export default function ChatProvider({ children }: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false);
    const { profile } = useAuth();
    
    useEffect(() => {
        if (!profile) {
            return;
        }
        const connect = async () => {
            await client.connectUser(
                {
                    id: profile?.id,
                    name: profile?.full_name,
                    image: supabase.storage.from('avatars').getPublicUrl(profile.avatar_url).data.publicUrl,
                },
                client.devToken(profile?.id)
            );
            setIsReady(true);
        }
        connect();
        return () => {
            if (isReady) {
                client.disconnectUser();
            }
            setIsReady(false);
        }
    }, [profile?.id])

    if (!isReady) {
        return <ActivityIndicator color={'grey'} style={{ flex: 1 }} />;
    }


    return (
        <OverlayProvider>
            <Chat client={client}>
                {children}
            </Chat>
        </OverlayProvider>
    )
}