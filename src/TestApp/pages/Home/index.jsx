import React from 'react';

import '../../global.css';
import logo from '../../assets/logo.png';

import { routes } from '../../config';

import Header from '../../../components/Header';

function Home() {
  return (
    <div>
      <Header
        logo={logo}
        links={routes}
        actionButton={{ name: 'Contato', to: '/contato' }}
      />
      <div className="background-image" />
      <div style={{ height: '800px' }} />
    </div>
  );
}

export default Home;
