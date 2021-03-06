import React, { useState, useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo : doc.data().todo})))
    })
  }, [])
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <form>
      <FormControl>
        <InputLabel>Write your todo here</InputLabel>
        <Input value = {input} onChange = {(e) => setInput(e.target.value)} type="text"/>
      </FormControl>
        <Button variant="contained" color="primary" type = 'submit' onClick = {addTodo} disabled = {!input}>
          Add Todo
        </Button>
      </form>
      <ul>
      {todos.map(todo => (
        <Todo todo = {todo} />
      ))}
      </ul>
    </div>
  );
}

export default App;
