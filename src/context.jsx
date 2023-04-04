import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// This is custom hook
export const useGlobalContext = () => useContext(GlobalContext);

//  Object destructuring. Same as props.children
const AppContext = ({children}) => {
    const [name, setName] = useState('Peter');

    return (
        <GlobalContext.Provider value={{ name, setName }}>Hii
            {children}
        </GlobalContext.Provider>);
}

export default AppContext;