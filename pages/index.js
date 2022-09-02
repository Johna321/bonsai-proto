import React, { useContext, useEffect, useState } from 'react';
import router from 'next/router';

import Head from 'next/head';
import TopBar from '../components/TopBar';
import Publish from '../components/Publish';
import { Router } from 'next/router';
import { DataContext } from '../components/DataContext';

// const { showScores } = useContext(DataContext);

export default function Home() {
  const [publish, setPublish] = useState(false);
  const [showScore, setShowScore] = useState(false);
  useEffect(() => {
    if (router.query.show) {
      setShowScore(true);
    }
  }, [])
  const genScores = (studentScores) => {
    return studentScores.map((student) => {
      //student.score = (student.q1.score + student.q2.score + student.q3.score) / 3
      return (
        <div key={student.name} className="flex my-2 w-full rounded-lg px-2 justify-between items-center user-shadow">
          {/*<div className={`flex ${showScore ? 'justify-around' : 'justify-end'} items-center w-3/4`}>*/}
            {showScore ? <h1 className="text-lg ml-10 text-[#1CB000] font-bold">{student.q1.score}</h1> : <h1 className='text-lg ml-10 select-none text-white font-bold'>{student.q1.score}</h1>}
            <div className='flex w-1/3 space-x-4 items-center m-2'>
              <img className='rounded-full' src='/defaultprofile.jpg' width='50' height='50' />
              <h1 className="text-lg font-bold">{student.name}</h1>
            </div>
          {/*</div>*/}
          <button dangerouslySetInnerHTML={{__html: '&#10247'}}></button>
        </div>
      );
    }) 
  };
  
  const studentScores = [
    {name: 'Jane Doe', q1: {score: '16.33%', content: 'Papua New Guinea was the first country to give women the right to vote in 1893.'}},
    {name: 'Beth Harrison', q1: {score: '81.95%', content: 'The first county to give women the right to vote was New Zealand.'}},
    {name: 'Toby Myers', q1: {score: '87.97%', content: 'New Zealand was the first country to give women the right to vote in 1993.'}},
    {name: 'Anis Ortega', q1: {score: '92.08%', content: 'New Zealand was the first country to pass female suffrage in 1893'}},
    {name: 'Zayd Powell', q1: {score: '83.52%', content: 'New Zealand did a great job at giving women the right to vote in 1893.'}},
    {name: 'Liyah Frost', q1: {score: '94.38%', content: 'New Zealand gave girls the right to vote in 1893.'}},
    {name: 'Artur Truong', q1: {score: '95.59%', content: 'New Zealend was the first country to give woman the right to vote in 1893.'}},
    {name: 'Marley Gibbs', q1: {score: '98.24%', content: 'Women won the right to vote for the first time in New Zealand in 1893.'}},
    {name: 'Rafferty Mccarty', q1: {score: '8.06%', content: 'New Zealand was the first country to give men the right to vote in 1893.'}},
    {name: 'Mariam Roach', q1: {score: '42.77%', content: 'Women New 1893 the was country first give right to Zealand in.'}},
    {name: 'Tomi Huff', q1: {score: '69.52%', content: 'New Zealand women vote 1893.'}},
    {name: 'Theodora Storey', q1: {score: '72.86%', content: 'First women voting in New Zealand.'}},
    {name: 'Sahra Goulding', q1: {score: '97.09%', content: 'New Zealand was the first country to give women the right to vote in 1893.'}},
  ]
  
  const blurClass = publish ? 'blur-sm pointer-events-none select-none' : '';

  return (
    <div>
    {publish && <Publish setPublish={setPublish}/>}
    <div >
      <Head>
        <title>Bonsai</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    
      <div className={blurClass}>
      <TopBar teacher={true} />
      <main className="flex h-[calc(100vh_-_70px)]">
        <div className="flex flex-col justify-center z-0 items-center h-full w-1/2 leftdrop">
            <div>
              <img className='shadow-lg mb-2' src='/exampletest.png' width='400'/>
            </div>
          <div className='flex justify-between items-center'>
            <button onClick={() => router.push('/edit')} className='rounded bg-blue-500 hover:bg-blue-700 w-[107px] px-6 py-2 m-2 mx-12 text-lg text-white'>Grade</button>
            <button onClick={() => setPublish(!publish)} className='rounded bg-blue-500 hover:bg-blue-700 w-[107px] px-6 py-2 m-2 mx-12 text-lg text-white'>Publish</button>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center p-4 overflow-scroll overflow-x-hidden">
          <h1 className="text-xl m-4">Responses</h1>
          <div className="flex flex-col w-11/12 items-center justify-center">
            {genScores(studentScores)}
          </div>
        </div>      
      </main>
      </div>
    </div>
    </div>
  )
}
