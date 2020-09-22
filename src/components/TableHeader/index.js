import React from 'react';

const TableHeader = () => {
    const subText = {color: "grey", width: "100px", fontSize: "12px"};
    return (
        <div style={{display: "flex", fontWeight: "600", padding: "10px 0", borderBottom: "1px solid lightgrey"}}>
            <div style={{width: "20%"}}>
                <div>Actions</div>
                <div style={subText}>Move, Indent, Outdent, Delete</div>
            </div>
            <div>
                <div>Standard</div>
                <div style={subText}>The text of the standard</div>
            </div>

        </div>
    )
}

export default TableHeader;