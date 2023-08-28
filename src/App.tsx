import React from 'react';
import { RecoilRoot } from 'recoil';
import { WeatherDisplay } from './components/WeatherDisplay/WeatherDisplay';
import { TodoList } from './components/TodoList/TodoList';


function App() {
  return (
    <RecoilRoot>
      <div className="wrapper">
          <div className="wrapper-inner">
            <WeatherDisplay/>
            <TodoList/>
          </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
