import { combineReducers } from 'redux';
import _ from 'lodash';
import { ADD_STANDARD, ADD_NEW_STANDARD, SET_PARENT, SET_CHILD, REMOVE_PARENT, REMOVE_PARENT_CHILD } from '../Actions/action'

const initialState = {
    list: [{
        title: "",
        id: 1,
        parent: 0,
        children: [],
        type: "non-leaf"
    }]
}

const standardList = (state = initialState, action) => {
    let newState = _.clone(state);
    switch(action.type) {
        case ADD_STANDARD:
            let rowData = newState.list.filter((data) => data.id === action.data.id);
            if(rowData.length) {
                return {
                    ...newState,
                    list: newState.list.map((data) => {
                        return data.id === action.data.id ? {...data, title : action.data.title} : data
                    })
                }
            } else {
                return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case ADD_NEW_STANDARD:
            let newItem = {
                title: "",
                id: action.id,
                parent: null,
                children: [],
                type: "non-leaf"
            };
            return {
                ...newState,
                list: [...newState.list, newItem]
            }

        case SET_PARENT:
            let parentId = action.id - 1;

            return {
                ...newState,
                list: newState.list.map((data) => {
                    return data.id === action.id ? {...data, parent: parentId} : data
                })
            }

        case SET_CHILD:
            let child = newState.list.filter((data) => data.id === action.data.childId)[0];

            return {
                ...newState,
                list: newState.list.map(data =>
                data.id === action.data.id ? {...data, children: [...data.children, child]} : data
            )}

        case REMOVE_PARENT:
            let parent = newState.list.filter((data) => data.id === action.id)[0].parent;
            let parentsParent = newState.list.filter((data) => data.id === parent)[0].parent;

            return {
                ...newState,
                list: newState.list.map((data) => {
                    return data.id === action.id ? {...data, parent: parentsParent} : data
                })
            }
        case REMOVE_PARENT_CHILD:
            let parentIdNumber = newState.list.filter((data) => data.id === action.id)[0].parent,
                parentNodeChildren = newState.list.filter((data) => data.id === parentIdNumber)[0].children;

            let parentWithChildRemoved = parentNodeChildren.some((data, index) => {
                if(data.id === action.id) {
                    parentNodeChildren.splice(index, 1)
                    return true;
                }
            })

            return{
                ...newState,
                list: newState.list.map((data) => {
                    return data.id === parentIdNumber ? {...data, children: parentNodeChildren} : data
                })
            }

        default:
            return newState;
    }
}

const standardListApp = combineReducers({
    standardList
});

export default standardListApp;