import { useReducer } from "react"
import { data } from "../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import reducer from "./reducer";

const defaultState = {
    people: data,
    isLoading: false
}
const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: {id}});
    }

    const reset = () => {
        dispatch({type: RESET_LIST});
    }

    const clear = () => {
        dispatch({type: CLEAR_LIST});
    }

    console.log(state);
 
    return (
        <div>
            {state.people.map(person => {
                const {id, name} = person;
                return(
                <div key={id}>
                    <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>remove</button>
                </div>
                );
            })}
            {state.people.length > 0 ? <button onClick={() => clear()}>
                Clear
            </button> : <button onClick={() => reset()}> Reset State</button>}
            
            
        </div>
    )
}

export default ReducerBasics;