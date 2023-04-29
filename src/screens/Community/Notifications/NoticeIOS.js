import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'

const NoticeIOS = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token)
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification)

        // process the notification here
      },
      // Android only: GCM or FCM Sender ID
      senderID: '507828569515',
      popInitialNotification: true,
      requestPermissions: true
    })
  }, [])
  

  return null
}

export default NoticeIOS