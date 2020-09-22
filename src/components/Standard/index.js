import React, { useState, useEffect } from 'react';
import Actions from '../Actions';
import InputElement from '../Input';
import { addStandardAction, setParentID, setChild, removeParentID, removeChildfromParent } from "../../Actions/action";
import constants from "../../constants";
import {store} from '../Main/index';

const Standard = ({id}) => {
    const rowWrapper = {height: "50px", borderBottom: "1px solid lightgrey", display: "flex"},

        [list, setList] = useState([]),
        [indentation, setIndentation] = useState(0),

        dragRow = (e) => {
            console.log("ID: ", id)
        },

        indentRow = (e) => {
            setList(store.getState().standardList.list)
            store.dispatch(setParentID(id))
            setList(store.getState().standardList.list)
            store.dispatch(setChild(id, id-1))
            setList(store.getState().standardList)
            setIndentation(indentation + 50)
        },

        outdentRow = (e) => {
            setList(store.getState().standardList.list)
            store.dispatch(removeChildfromParent(id))
            console.log(store.getState().standardList.list)
            store.dispatch(removeParentID(id))
            console.log(store.getState().standardList.list)
            setList(store.getState().standardList.list)
            setIndentation(indentation - 50)
        },

        deleteRow = (e) => {
            console.log("ID: ", id)
        },
        handleChange = (e) => {
            let data = {
                id: id,
                title: e.currentTarget.value,
                parentId: 0,
                children: [],
                type: constants.NON_LEAF
            }
            store.dispatch(addStandardAction(data))
        }

    useEffect(() =>{
        console.log("list:: ", list)

        // setList(store.getState().standardList.list)
    }, [list]);

    return (
        <div style={rowWrapper}>
            <Actions
                dragEvent={dragRow}
                indentEvent={indentRow}
                outdentEvent={outdentRow}
                deleteEvent={deleteRow}
            />
            <InputElement indent={indentation} handleChange={handleChange}/>
        </div>
    )
}

export default Standard;