import { useAuth } from "@/src/Provders/AuthProvider";
import { Redirect, Stack } from "expo-router";
export default function AuthLayout() {
    const { user , profile} = useAuth();
    // if (profile.full_name === null) {
    //     return <Redirect href={'/(home)/(tabs)/profile'} />
    // }
    if (user) {
        console.log(profile);
        return <Redirect href={'/(home)/(tabs)'} />
    }
    return <Stack />
}
// {"avatar_url": "1738675910134.jpeg", "full_name": "Tushar", "id": "cea2fde5-073d-4cfb-9f38-e78cb0272830", "updated_at": "2025-02-04T13:32:16.485+00:00", "username": "Tushar", "website": null}