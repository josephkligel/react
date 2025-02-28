import React from 'react';

function Message(){
    const name = 'Joe';
    if(name)
        return <h1>Hello {name}</h1>;
}

export default Message;