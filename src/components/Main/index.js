import React, { useState, useEffect } from 'react';
import Header from "../Header"
import TableHeader from '../TableHeader'
import Standard from '../Standard'
import ButtonComponent from '../Button'
import { createStore } from 'redux';
import standardListApp from '../../Reducers/reducer';
import { addNewStandard } from "../../Actions/action";

export const store = createStore(standardListApp);

const Main = () => {
    let [id, setId] = useState(1),
        [list, setList] = useState([]);

    useEffect(() => {
        setList(store.getState().standardList.list)
        console.log("list", list)
    }, [list])

    const wrapperDiv = {
        margin: "30px"
    },

    addStandard = () => {
        setId(++id);
        store.dispatch(addNewStandard(id))
        setList(store.getState().standardList.list)
    }

    return (
        <div style={wrapperDiv}>
            <Header />
            <TableHeader />
            {list.map((listItem, id) => {
                return (
                    <Standard key={id} id={listItem.id} />
                )
            })}
            <ButtonComponent addIcon={true} clickEvent={addStandard}/>
        </div>
    )
}

export default Main;