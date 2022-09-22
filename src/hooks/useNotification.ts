import { useEffect, useState } from 'react';

const checkNotificationPromise = () => {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }
  return true;
};

export const useNotification = () => {
  const [isSupported] = useState('Notification' in window);
  const [isGranted, setIsGranted] = useState(Notification?.permission === 'granted');

  useEffect(() => {
    if (isSupported && Notification.permission === 'default') {
      if (checkNotificationPromise()) {
        Notification.requestPermission().then((perm) => setIsGranted(perm === 'granted'));
      } else {
        Notification.requestPermission((perm) => setIsGranted(perm === 'granted'));
      }
    }
  }, []);

  const showNotification = (title: string, body: string, icon?: string) => {
    if (isGranted) {
      /* eslint-disable no-new */
      new Notification(title, { body, icon });
    }
  };

  return showNotification;
};
