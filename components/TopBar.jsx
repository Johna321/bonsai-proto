import React from 'react';

export default function TopBar() {
    return(
        <nav className="flex items-center justify-between flex-wrap p-3 border-b-2">
            <div className="block text-black text-sm">
                <div className="font-bold">Mr. Test</div>
                <div>United States Government</div>
            </div>
            <div className="block flex-grow flex items-center w-auto justify-center">
                <div className="flex justify-center flex-grow">
                    <a href="#" className="block lg:inline-block lg:mt-0 text-black-200 hover:text-green-500 mr-8">
                        Home
                    </a>
                    <a href="#" className="block lg:inline-block lg:mt-0 text-black-200 hover:text-green-500 mr-8">
                        Forms
                    </a>
                    <a href="#" className="block lg:inline-block lg:mt-0 text-black-200 hover:text-green-500 mr-8">
                        Scores
                    </a>
                    <a href="#" className="block lg:inline-block lg:mt-0 text-black-200 hover:text-green-500 mr-8">
                        Conversation
                    </a>
                    <a href="#" className="block lg:inline-block lg:mt-0 text-black-200 hover:text-green-500 mr-8">
                        Options
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center flex-shrink-0 text-black p-2">
                <img src="/bonsai2.svg" width="90" alt="bonsai"/>
            </div>
        </nav>
    );
}