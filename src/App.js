import React from 'react';
import './App.css';
import Sidebar from './partials/Sidebar/Sidebar';
import Feed from './partials/Feed/Feed';
import Widgets from './partials/Widgets/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
