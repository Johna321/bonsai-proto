import Head from 'next/head';
import TopBar from '../components/TopBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bonsai</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TopBar />

      <main className="flex h-[calc(100vh_-_70px)]">
        <div className="h-full w-1/2 bg-slate-100">
          
        </div>
        <div className="h-full w-1/2 flex flex-col items-center p-4">
          <h1 className="text-xl font-bold">Responses</h1>
          <div className="flex flex-col items-center justify-center">
            <ul>
              <li>one</li>
              <li>two</li>
            </ul> 
          </div>
        </div>      
      </main>
    </div>
  )
}
