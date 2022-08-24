import React from 'react';

export default function Publish({ setPublish }){
    return(
        <div className='rounded z-10 shadow-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[75vh]'>
        <button onClick={() => setPublish(false)}><img src='/close-outline.svg'/></button>
            <h1 className='text-xl'>HELLO</h1>
        </div>
    );
}