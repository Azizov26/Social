import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = (props) => (
  <BrowserRouter >
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/messages"
            element={<Dialogs people={props.appStore.people} messages={props.appStore.messages} />}
          />
          <Route
            path="/profile"
            element={<Profile posts={props.appStore.posts} />}
          />
          <Route
            path="/music"
            element={<Music />}
          />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
)

export default App;
