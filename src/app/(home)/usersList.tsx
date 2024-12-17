import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/lib/supabase';
import { useAuth } from '@/src/Provders/AuthProvider';
import UserListItem from '@/src/Components/UserListItem';

const usersList = () => {
    const [users, setUsers] = useState();
    const {user} = useAuth();
    useEffect(() => {
        const fetchUsers = async () => {
          let { data :profiles , error } = await supabase
            .from('profiles')
            .select('*')
            .neq('id', user?.id); // exclude me
    
          setUsers(profiles);
          
        };
        fetchUsers();
      }, []);
    return (

        <FlatList data={users} renderItem={({item}) =>
            <UserListItem user={item}/>
        }>
        </FlatList>
    )
}

export default usersList