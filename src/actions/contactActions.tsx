import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "./types";

interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}

export const addContact = (contact: Contact) => ({
    type: ADD_CONTACT,
    payload: contact
})

export const editContact = (contact: Contact) => ({
    type: EDIT_CONTACT,
    payload: contact
})

export const deleteContact = (id: String) => ({
    type: DELETE_CONTACT,
    payload: id
})
