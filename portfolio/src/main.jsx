import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Wrapper from './components/wrapper/wrapper.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Wrapper>
         <App />
      </Wrapper>
   </React.StrictMode>,
);
