
import { PropsWithChildren, useEffect, useState } from 'react';
import AuthProvider, { useAuth } from './AuthProvider';
import messaging from '@react-native-firebase/messaging';
import { StreamChat } from 'stream-chat';


const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_PUBLIC_KEY as string)


export default function NotificationsProvider({ children }: PropsWithChildren) {
  const { user } = useAuth();
  const [isReady, setIsReady] = useState(false);
  console.log('notifications provider');
  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
  useEffect(() => {
    // Register FCM token with stream chat server.
    const registerPushToken = async () => {
      const token = await messaging().getToken();
      const push_provider = 'firebase';
      const push_provider_name = 'ChitChat'; // name an alias for your push provider (optional)
      client.addDevice(token, push_provider, user?.id, push_provider_name);
      // client.setLocalDevice({
      //   id: token,
      //   push_provider,
      //   // push_provider_name is meant for optional multiple providers support, see: https://getstream.io/chat/docs/react/push_providers_and_multi_bundle
      //   push_provider_name,
      // });
    };

    const init = async () => {
      await requestPermission();
      await registerPushToken();

      setIsReady(true);
    };

    init();
  }, []);

  if (!isReady) {
    return null;
  }

  return <>
    {
      children
    }
  </>;
}