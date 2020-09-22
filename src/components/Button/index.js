import React from 'react';
import { Button } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

const ButtonComponent = ({addIcon, clickEvent}) => {

    return (
        <div style={{marginTop: '10px'}}>
            <Button onClick={(e) => clickEvent(e)} type="primary" block>
                {addIcon && (<PlusCircleOutlined />)}
                Add Standard
            </Button>
        </div>
    )

}

export default ButtonComponent;