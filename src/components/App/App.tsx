import React from 'react';
import { Modal } from '../modal/modal';

import './App.css';

const App = () => (
  <div className='main'>
    <h1 className='main__title'>Мой апп.</h1>

    <Modal isOpen onClose={console.log} title='123'>
      123
    </Modal>
  </div>
);

export default App;
