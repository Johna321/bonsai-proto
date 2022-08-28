import React, { useState } from 'react';
import router from 'next/router';
import Publish from '../components/Publish';
import Question from '../components/Question';

export default function Edit(){
    const [publish, setPublish] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const blurClass = publish ? 'blur-sm pointer-events-none select-none' : '';
    
    return(
        <>
        {publish && <Publish setPublish={setPublish}/>}
        <div className={blurClass}>
        <div className='h-screen bg-slate-100 flex flex-row lg:justify-center justify-end w-screen'>
            <img onClick={() => router.push('/')} className='absolute left-0 p-4 hover:cursor-pointer' src='/back-arrow.svg' width='65'/>
            <div className='mt-4 bg-white w-[800px]  border-2 shadow-lg'>
                <div className='flex justify-between mx-16 mt-16'>
                    <div className=''>
                        <h1 className='text-lg font-semibold'>Mr. Test's</h1>
                        <h1 className='text-lg font-semibold'>Period 6</h1>
                        <h1 className='text-lg font-semibold'>United States Government</h1>
                    </div>
                    <div className=''>
                        <h1 className='text-lg font-bold text-gray-600'>July 29, 2022</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-4 mb-8'>
                    <h1 className='text-2xl font-bold '>Edit Title</h1>
                    <p className='text-sm'>Generic instructions. Try your best. Do not leave questions blank. Good luck!</p>
                </div>
                <div className='h-px bg-green-400 w-full mb-4' />
                <Question number="1" question="What was the impact of the Bronze Age Collapse on the agricultural kingdoms at the time?">
                    <div className='mt-2 ml-4'>
                        <div>
                            <input type='radio' id='radio-1' name='mc1' className=''/> 
                            <label for='radio-1'>The kingdoms became more centralized.</label>
                        </div>
                        <div>
                            <input type='radio' id='radio-2' name='mc1' className=''/> 
                            <label for='radio-2'>Many kingdoms faced near destructions from nomadic tribesmen.</label>
                        </div>
                        <div>
                            <input type='radio' id='radio-3' name='mc1' className=''/> 
                            <label for='radio-3'>There was a resurgence of animism.</label>
                        </div>
                        <div>
                            <input type='radio' id='radio-4' name='mc1' className=''/> 
                            <label for='radio-4'>Grain production increased from the advent of new agricultural methods.</label>
                        </div>
                    </div>
                </Question>
                <Question number="2" question="Describe the impact of the Bronze Age Collapse on the agricultural kingdoms at the time.">
                    <div className='mt-2 ml-4'>
                        <textarea className='w-full text-sm border-2 p-2 h-32 resize-none outline-none' placeholder='Write in the best answer here. You can also select a student response later.'/>
                    </div>
                </Question>
                <div onMouseOver={() => setShowAdd(true)} onMouseLeave={() => setShowAdd(false)} className='h-2/5 flex opacity-0 hover:opacity-100 justify-center transition ease-in-out duration-100'>
                    <div className='text-2xl flex justify-center items-center hover:cursor-pointer select-none rounded-full w-8 h-8 bg-green-600 p-2 text-white '>+</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mx-4 my-16 p-4 bg-white lg:w-[200px] border-2 shadow-lg h-[100px] rounded-xl'>
                <button onClick={() => setPublish(true)} className='text-xl m-4 hover:text-green-500 hover:border-b-2 border-green-500'>Publish</button>
            </div>
        </div>
        </div>
        </>
    );
}