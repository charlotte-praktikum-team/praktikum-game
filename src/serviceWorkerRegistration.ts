import { Workbox } from 'workbox-window';

export default function registerServiceWorker() {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');
    wb.register();
  }
}
