import React from 'react';
import router from 'next/router';

export default function Edit(){
    return(
        <div className='h-screen bg-slate-100 flex flex-row lg:justify-center justify-end w-screen'>
            <img onClick={() => router.push('/')} className='absolute left-0 p-4 hover:cursor-pointer' src='/back-arrow.svg' width='65'/>
            <div className='mt-4 bg-white w-[800px] border-2 shadow-lg'>

            </div>
            <div className='flex flex-col items-center justify-center mx-4 my-16 p-2 bg-white lg:w-[200px] border-2 shadow-lg h-[100px] rounded-xl'>
                <button className='text-xl m-4 hover:text-green-500 hover:border-b-2 border-green-500'>Publish</button>
            </div>
        </div>
    );
}