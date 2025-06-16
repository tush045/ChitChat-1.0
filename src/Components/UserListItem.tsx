import { Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useChatContext } from 'stream-chat-expo'
import { useAuth } from '../Provders/AuthProvider';
import { router } from 'expo-router';
// import { Avatar } from '@/src/Components/Avatar';

const UserListItem = ({ user }) => {
  const { client } = useChatContext();
  const { user: me } = useAuth();
  const avatarUrl = process.env.EXPO_PUBLIC_AVATAR_URL;

  const OnPress = async () => {
    const channel = client.channel("messaging", {
      members: [me?.id, user.id],
    });
    await channel.watch();
    router.replace(`/(home)/channel/${channel.cid}`);
  }
  return (
    <SafeAreaView>
      <TouchableOpacity style={{ padding: 10, display:'flex',flexDirection:'row',alignItems:'center',  }} onPress={OnPress}>
        {
          avatarUrl ? (
            <Image source={{ uri: `${avatarUrl}/${user.avatar_url}` }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          ) : (
            <Image source={{ uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          )
        }

        <Text style={{ fontWeight:'bold',marginLeft:10,fontSize:15 }}>{user.username}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default UserListItem