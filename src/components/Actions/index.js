import React from 'react';
import { DragOutlined, ArrowRightOutlined, ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons'

const Actions = ({dragEvent, indentEvent, outdentEvent, deleteEvent}) => {
    const actionStyle = {
        fontSize: "20px",
        padding: "15px 5px",
        color: "grey"
    }
    return (
        <>
            <DragOutlined
                style={actionStyle}
                onClick={(e) => dragEvent(e)}
            />
            <ArrowLeftOutlined
                style={actionStyle}
                onClick={(e) => outdentEvent(e)}
            />
            <ArrowRightOutlined
                style={actionStyle}
                onClick={(e) => indentEvent(e)}
            />
            <DeleteOutlined
                style={actionStyle}
                onClick={(e) => deleteEvent(e)}
            />
        </>
    )
}

export default Actions;