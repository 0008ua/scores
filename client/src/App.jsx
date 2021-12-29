import React, {useEffect } from 'react';
import { httpService } from './services/container';
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from './components/Header.component';
import AppRouterComponent from './App-router.component';

function App() {
  useEffect(() => {
    httpService.get('/api/auth/protected')
      .subscribe((result) => console.log('protected', result),
        err => console.log('subs', err))
  }, []);

  return (
    <BrowserRouter>
      <HeaderComponent />
      {/* <main className="container container-h main"> */}
      <main className="main">
        <AppRouterComponent />
      </main>
    </BrowserRouter>
  );
}

export default App;
