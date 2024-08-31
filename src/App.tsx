import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderData from './component'
import UserData from './constant';

function App() {
  const [data, setData] = useState<any>([])
  return (
    <div>
      <RenderData

        data={UserData}
      />

    </div>
  );
}

export default App;
