import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card'
import { deleteItem, changeDone } from '../actions/listAction'

function DoneImg(props) {
    if (props.done) {
        return <img alt="done" src="./assets/off.svg"></img>
    } else {
        return <img alt="undone" src="./assets/on.svg"></img>
    }
}


function ListItem(props) {

    const dispatch = useDispatch()

    return (

        <li>
            <Card className={props.item.done ? "done item" : "undone item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done} /></button>
                    <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><img alt="close" src="./assets/close.svg"></img></button>
                </div>
            </Card>
        </li>


    )
}

export default ListItem;