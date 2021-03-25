import React from 'react';
import './Todo.css'

import List from './components/List';
import TodoForm from './components/TodoForm';
// import Item from './components/Item';
import Footer from './components/Footer';

import { createStore } from "redux"
import { Provider } from "react-redux"

import listReducer from './reducers/listReducer'




const SAVED_ITEMS = "savedItems"

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS)
    if(actualState)
    return JSON.parse(actualState)
    else 
    return []
}


const store = createStore(listReducer, loadState())


store.subscribe(()=>{
    persistState(store.getState())
})



function App() {
    // const [items, setItems] = useState([])

    // useEffect(() => {
    //     let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    //     if (savedItems) {
    //         setItems(savedItems)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    // }, [items])

    // function onAddItem(text) {
    //     let it = new Item(text)
    //     setItems([...items, it])
    // }

    // function onItemDeleted(item) {

    //     let filteredItems = items.filter(it => it.id !== item.id)

    //     setItems(filteredItems)

    // }

    // function onDone(item) {

    //     let updatedItems = items.map(it => {
    //         if (it.id === item.id) {
    //             it.done = !it.done
    //         }
    //         return it
    //     })

    //     setItems(updatedItems)
    // }

    return (
        <div className="container">
            <Provider store={store}>

                <header>
                    <h1>To.do</h1>
                    <TodoForm  ></TodoForm>
                </header>
                <div className="upDesign">
                    <List></List>
                </div>
                <Footer></Footer>
            </Provider>
        </div>
    )



}





export default App