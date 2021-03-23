import React from 'react';

import Card from './Card'

function DoneImg(props) {
    if (props.done) {
        return <img alt="done" src="./assets/off.svg"></img>
    } else {
        return <img alt="undone" src="./assets/on.svg"></img>
    }
}


function ListItem(props) {


    return (

        <li>
            <Card className={props.item.done ? "done item" : "undone item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done} /></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><img alt="close" src="./assets/close.svg"></img></button>
                </div>
            </Card>
        </li>


    )
}

export default ListItem;