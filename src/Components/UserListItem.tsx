import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useChatContext } from 'stream-chat-expo'
import { useAuth } from '../Provders/AuthProvider';
import { router } from 'expo-router';

const UserListItem = ({user}) => {
    const {client} = useChatContext();
    const {user:me} = useAuth();

    const OnPress = async () =>{
        const channel = client.channel("messaging" ,{
            members : [me?.id, user.id],
          });
          await channel.watch();
          router.replace(`/(home)/channel/${channel.cid}`);
    }
  return (
    <TouchableOpacity style={{backgroundColor:'white',padding:15}} onPress={OnPress}>
      <Text style={{fontWeight:600}}>{user.full_name}</Text>
    </TouchableOpacity>
  )
}

export default UserListItem