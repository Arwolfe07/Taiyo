import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../../actions/contactActions';
import ContactDetails from './ContactDetails';



interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}


const ContactList = () => {
    const [selectedContactId, setSelectedContactId] = useState('');
    const [view, setView] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [editedContact, setEditedContact] = useState<Contact | any>(null);
    const contacts: Contact[] = useSelector((state: any) => state.contacts.contacts)
    const dispatch = useDispatch();


    const handleViewDetails = (id: string) => {
        setSelectedContactId(id);
    };

    const handleDelete = (id: string) => {
        dispatch(deleteContact(id));
        setSelectedContactId('');
    };

    const handleEdit = (contact: Contact) => {
        setSelectedContactId(contact.id);
        setEditMode(!editMode);
        setEditedContact(contact);
    };

    const handleSaveEdit = () => {
        if (editedContact) {
            dispatch(editContact(editedContact));
            setSelectedContactId('');
            setEditMode(false);
            setEditedContact(null);
        }
    }

    return (
        <div className='w-2/4 m-auto mt-2'>
            <ul>
                {contacts.map((contact: Contact) => (

                    <div>

                        <li key={contact.id} className="flex items-center justify-between bg-white px-6 py-4 rounded mb-2 shadow">
                            <span className="mr-2">{contact.firstName}</span>
                            <button
                                onClick={() => { handleViewDetails(contact.id); setView(!view) }}
                                className="text-blue-500 px-2 py-1 rounded mr-2 hover:bg-sky-200"
                            >
                                View/Hide Details

                            </button>
                            <button
                                onClick={() => handleEdit(contact)}
                                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(contact.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>


                        </li>
                        {selectedContactId === contact.id &&
                            !view && !editMode && <ContactDetails contactId={selectedContactId} />}
                        {selectedContactId === contact.id && editMode &&
                            <div className="flex items-center justify-center flex-col mb-4 w-2/4 mx-auto">
                                <label htmlFor='first-name' className='text-gray-700 text-sm font-bold mb-2'>First Name</label>
                                <input
                                    
                                    type="text"
                                    value={editedContact?.firstName}
                                    onChange={(e) =>
                                        setEditedContact({ ...editedContact, firstName: e.target.value })
                                    }
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"

                                />
                                <label htmlFor='first-name' className='text-gray-700 text-sm font-bold mb-2'>Last Name</label>
                                <input
                                    type="text"
                                    value={editedContact?.lastName}
                                    onChange={(e) =>
                                        setEditedContact({ ...editedContact, lastName: e.target.value })
                                    }
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                />
                                <label htmlFor='first-name' className='text-gray-700 text-sm font-bold mb-2'>Email</label>
                                <input
                                    type="email"
                                    value={editedContact?.email}
                                    onChange={(e) =>
                                        setEditedContact({ ...editedContact, email: e.target.value })
                                    }
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                />
                                <label htmlFor='first-name' className='text-gray-700 text-sm font-bold mb-2'>Contact No.</label>
                                <input
                                    type="tel"
                                    value={editedContact?.phone}
                                    onChange={(e) =>
                                        setEditedContact({ ...editedContact, phone: e.target.value })
                                    }
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                />
                                <label htmlFor='first-name' className='text-gray-700 text-sm font-bold mb-2'>Choose Status</label>
                                <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full
                                 p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-2" value={editedContact?.status}
                                 onChange={(e) =>
                                     setEditedContact({ ...editedContact, status: e.target.value })
                                 }>
                                    <option value='active' selected>Active</option>
                                    <option value='inactive'>Inactive</option>
                                </select>
                                <button
                                    onClick={handleSaveEdit}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        }

                    </div>



                ))}
            </ul>

        </div >
    );
};

export default ContactList;
