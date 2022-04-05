import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import React, { useState, useEffect } from 'react';
import Todo from './views/todo';
import Covid from './views/Covid';
import { Countdown, NewCountdown } from './views/Countdown';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import SearchYoutube from './views/SearchYoutube';
function App() {
  const [name, setName] = useState('hihi');
  const [address, setAddress] = useState('')
  const [listTodo, setListTodo] = useState([
    { id: '', title: 'haha', type: 'Tuấn' },
    { id: '1', title: 'hihi', type: 'Tuấn' },
    { id: '2', title: 'dung', type: 'Dũng' },
    { id: '3', title: 'hihi', type: 'Nguyên' }
  ])
  const handleOnChangeName = (event) => {
    setAddress(event.target.value)
  }
  const handleOnChangeAddress = (event) => {
    setAddress(event.target.value)
  }
  const handleOnclick = (event) => {
    if (!address) {
      alert("Missing input!");
      return;
    }
    let newTodo = { id: Math.floor((Math.random() * 10000) + 1), title: address, type: "Tuấn" }
    setListTodo([...listTodo, newTodo])
    setAddress('')
  }
  const handleDeleteParent = (id) => {
    let todo = [...listTodo]
    todo = todo.filter(item => item.id !== id)
    setListTodo(todo)
  }
  const fireCountdown = () => {
    alert('TIME UP')
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <div>
            Xin chào bạn {name} đến từ WORLD!
          </div>
          <img src={logo} className="App-logo" alt="logo" />

        </header >
        <div style={{ 'background': '#282c34', 'color': 'white', 'height': '100%' }}>
          <Routes>
            <Route exact path="/" element={<Covid />} />


            <Route path="/timer" element={
              <div>
                <Countdown />
                <span>-------------</span>
                <NewCountdown fireCountdown={fireCountdown} />
              </div>

            } />
            <Route path="/todo" element={
              <>
                <Todo
                  listTodo={listTodo}
                  handleDeleteParent={handleDeleteParent}
                />
                <input type='text' value={address} onChange={(event) => handleOnChangeName(event)} /><br />
                {/* <input type='text' value={listTodo.title} onChange={(event) => handleOnChangeAddress(event)} /><br /> */}
                <button type='submit' onClick={(event) => handleOnclick(event)}>add</button>
              </>

            } />
            <Route path="/blog" exact element={
              <Blog />} />
            <Route path="/blog/:id" element={
              <DetailBlog />} />
            <Route path="/blog/add-new-blog" element={
              <AddNewBlog />} />
            <Route path="/*" element={
              <NotFound />} />
            <Route path="/secret" element={
              <SearchYoutube />} />
          </Routes>
        </div>
      </div >
    </Router>
  );
}

export default App;
