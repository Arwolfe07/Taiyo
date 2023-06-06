import React from 'react';
import { connect, useSelector } from 'react-redux';

interface ContactDetailsProps {
    contactId: string;
}

interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}


// This is used to display the contact info

const ContactDetails: React.FC<ContactDetailsProps> = ({ contactId }) => {
    const contacts: Contact[] = useSelector((state: any) => state.contacts.contacts)
    const contact = contacts.find(
        (contact: Contact) => contact.id === contactId
    );
    if (!contact) {
        return null;
    }
    return (
        <div className="bg-gray-100 rounded p-4 mt-2 mb-2 flex flex-col">
            <h2 className="text-xl mb-2 text-center">Contact Details</h2>
            <p className="mb-2 mx-8 px-8 flex justify-between"><span className='font-bold'>First Name:</span> {contact.firstName}</p>
            <p className="mb-2 mx-8 px-8 flex justify-between"><span className='font-bold'>Last Name:</span> {contact.lastName}</p>
            <p className="mb-2 mx-8 px-8 flex justify-between"><span className='font-bold'>Email:</span> {contact.email}</p>
            <p className="mb-2 mx-8 px-8 flex justify-between"><span className='font-bold'>Phone:</span> {contact.phone}</p>
            <p className="mb-2 mx-8 px-8 flex justify-between"><span className='font-bold'>Status:</span> {contact.status}</p>
        </div>
    );
};


export default ContactDetails;
