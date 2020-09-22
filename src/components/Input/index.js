import React from 'react';
import { Input } from 'antd';

const InputElement = ({handleChange, indent}) => {
    return (
        <Input
            style={{marginLeft: "120px", width: "1000px", border: "none", textIndent: indent+"px"}}
            placeholder="Type standard here (e.g. Numbers)"
            onChange={(e) => handleChange(e)}
        />
    )
}

export default InputElement;
