import { createContext, useReducer } from "react";

// context creation: this context will hold data about city 
export const CityContext=createContext();

// creation of reducer 
const Reducer=(state,action)=>{
     switch(action.type){
        case 'FILTERCITY': return {city:action.payload};// action triggers when user enter a city name in filter input 
        default: return state;
     }
}

// init value state 
const initState={
    city:'Casablanca'
}

// provider creation
export const WeatherProvider=({children})=>{

     // **reducer link to my provider
    const [state,dispatch]=useReducer(Reducer,initState);

    // return provider
    return (
        <CityContext.Provider value={{state,dispatch}}>
            {children}
        </CityContext.Provider>
    )

}




