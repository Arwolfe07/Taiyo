import { EDIT_CONTACT, ADD_CONTACT, DELETE_CONTACT } from "../actions/types";
interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}
interface ContactState {
    contacts: Contact[]
};

const initialState: ContactState = {
    contacts: []
};

export const contactReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case EDIT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        default:
            return state;
    }
}


