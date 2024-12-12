import { useAuth } from "@/src/Provders/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout(){
    const {session,user} = useAuth();
    
    if (user) {
        return <Redirect href={'/(home)/(tabs)'}/>
    }
    return <Stack/>
}