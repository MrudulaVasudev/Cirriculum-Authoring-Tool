export const ADD_STANDARD = "ADD_STANDARD",
    ADD_NEW_STANDARD = "ADD_NEW_STANDARD",
    SET_PARENT= "SET_PARENT",
    SET_CHILD = "SET_CHILD",
    REMOVE_PARENT = "REMOVE_PARENT",
    REMOVE_PARENT_CHILD = "REMOVE_PARENT_CHILD";

export const addStandardAction = (data) => {
    return {
        type: ADD_STANDARD,
        data
    }
}

export const addNewStandard = (id) => {
    return {
        type: ADD_NEW_STANDARD,
        id
    }
}

export const setParentID = (id) => {
    return {
        type: SET_PARENT,
        id
    }
}

export const setChild = (childId, id) => {
    let data = {childId, id};
    return {
        type: SET_CHILD,
        data
    }
}

export const removeParentID = (id) => {
    return {
        type: REMOVE_PARENT,
        id
    }
}

export const removeChildfromParent = (id) => {
    return {
        type: REMOVE_PARENT_CHILD,
        id
    }
}