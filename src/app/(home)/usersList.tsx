import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/lib/supabase';
import { useAuth } from '@/src/Provders/AuthProvider';
import UserListItem from '@/src/Components/UserListItem';

const usersList = () => {
  const [users, setUsers] = useState<any[] | null>(null);
  const { user } = useAuth();
  useEffect(() => {
    const fetchUsers = async () => {
      let { data: profiles } = await supabase
        .from('profiles')
        .select('*')
        .neq('id', user?.id); // exclude me

      setUsers(profiles);
    };
    fetchUsers();
  }, []);
  return (
    <SafeAreaView>
    <FlatList data={users} style={{backgroundColor:"#e6ebe7"}} renderItem={({ item }) =>
      <UserListItem user={item} />
    }>
    </FlatList>
    </SafeAreaView>
  )
}

export default usersList