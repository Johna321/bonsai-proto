import React from 'react';

export default function Publish({ setPublish }){
    return(
        <div className='flex flex-col items-center justify-between p-8 rounded-lg z-10 border-2 shadow-xl bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[70vh]'>
            <div className='w-full'>
                <h1 className='text-xl font-bold'>Publish to:</h1>
            </div>
            <div className='w-full'>
                <h1 className='text-xl font-bold'>Schedule publish:</h1>
            </div>
            <button className="rounded text-sm text-white py-2 px-4 bg-blue-500" onClick={() => setPublish(false)}>Close</button>
        </div>
    );
}