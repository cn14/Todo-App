import React, {useState} from 'react'
import {List, ListItem, ListItemText , Button, Modal} from '@material-ui/core'
import db from './firebase'
const Todo = ({todo}) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todo:input
        }, {merge:true})
        setOpen(false)
    }
    return (
        <>
        <Modal
            open={open}
            onClose={(e) => setOpen(false)}
            >
            <div>
                <input type = 'text'  placeholder = {todo.todo} value = {input} onChange = {e => setInput(e.target.value)}/>
                <button onClick = {updateTodo}>Update Todo</button>
            </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemText primary={todo.todo} secondary='Dummy deadline' />
            </ListItem>
            <Button onClick = {e => setOpen(true)}>Edit Me</Button>
            <Button onClick = {e => db.collection('todos').doc(todo.id).delete()}>Delete Me</Button>
        </List>
       </> 
    )
}

export default Todo
