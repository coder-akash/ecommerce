import React, { createContext, useState } from 'react';

const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
    //const [productsIds,setProductsIds] = useState([])
    const [mode, setMode] = useState('online');
    
    
    
     
  
    
      
  
    const updateMode = (m) => {
      //console.log('count',count)
      setMode(m);
      
    
    };
    //countdata = countdata+productCount
  
    //console.log('prcount',productCount)
  
    return (
      <ModeContext.Provider value={{ mode, updateMode }}>
        {children}
      </ModeContext.Provider>
    );
  };
  
  export { ModeContext, ModeContextProvider };