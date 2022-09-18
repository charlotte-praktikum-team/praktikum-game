import { Store } from 'react-redux';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.ogg' {
  const content: any;
  export default content;
}

declare global {
  interface Window {
    __INITIAL_STORE__: Store;
  }
}
