import { useAuth } from "@/src/Provders/AuthProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link, router, Stack } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ChannelList } from 'stream-chat-expo'

export default function MainTabScreen() {
    const { user } = useAuth();
    // const [chattedUser,setChattedUser] = useState('');
    
    

    return (
        <>
            <Stack.Screen options={{
                headerRight: () => (
                    <TouchableOpacity>
                        <Link href={'/usersList'} asChild>
                            <FontAwesome5 name="users" size={22} color="gray" style={{ marginRight: 16 }} />
                        </Link>
                    </TouchableOpacity>
                ),

            }} />
            <ChannelList filters={{ members: { $in: [user?.id] } }}
                onSelect={(channel) => {
                    // setChattedUser(channel?.cid)
                    // console.log("channel cid ",JSON.stringify(channel));

                    router.push(`/channel/${channel.cid}`)
                }} />
        </>
    );
}