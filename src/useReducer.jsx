import { useState } from "react"
import { data } from "./data";

const ReducerBasics = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople);
    }

    const reset = () => {
        setPeople(data);
    }
 
    return (
        <div>
            {people.map(person => {
                const {id, name} = person;
                return(
                <div>
                    <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>remove</button>
                </div>
                );
            })}
            {people.length > 0 ? <button onClick={() => setPeople([])}>
                Clear
            </button> : <button onClick={() => reset()}> Reset State</button>}
            
            
        </div>
    )
}

export default ReducerBasics;