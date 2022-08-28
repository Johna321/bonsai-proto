import React, { Children } from 'react';

export default function Question(props){
    return(
        <div className='mx-6 flex mt-4'>
            <div className='mt-6'>
                <img className='ml-1' src='/chevron-up-outline.svg' width='15' />
                <h1 className='text-sm'>1 pt</h1>
                <img className='ml-1' src='/chevron-down-outline.svg' width='15' />
            </div>
            <div className='flex flex-col ml-6'>
                <h1 className='text-md'><span className='text-green-500 font-bold'>{props.number}.</span> {props.question}</h1>
                {props.children}
            </div>
        </div>
    );
}