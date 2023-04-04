import { data } from "../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case CLEAR_LIST:
            return { ...state, people: []};
            break;
        case REMOVE_ITEM:
            let newPeople = state.people.filter(person => person.id !== action.payload.id);
            return { ...state, people: newPeople};
            break;
        case RESET_LIST:
            return {...state, people: data};
            break;
    
        default:
            throw new Error(`No matching ${action.type} - Action Type`)
            break;
    }
};

export default reducer;