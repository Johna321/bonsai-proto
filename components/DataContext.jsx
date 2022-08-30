import { useState, createContext, useContext } from "react";

const DataContext = createContext();

const DataContextProvider = ({children}) => {
    const [showScores, setShowScores] = useState(false);
    return(
        <DataContext.Provider value={{showScores, setShowScores}}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataContextProvider };