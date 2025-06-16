import { Redirect, Stack, Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useAuth } from "@/src/Provders/AuthProvider";

export default function TabsLayout() {
    const { profile } = useAuth();


    // if (profile?.full_name == null) {
    //     return(<Redirect href={'/(home)/(tabs)/profile'} />);
    // }
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                title: "Chats", tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="home" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name='profile' options={{
                title: "Profile", tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="user-alt" size={size} color={color} />
                ),
                headerTitleAlign: 'center'
            }} />
        </Tabs>
    );
}