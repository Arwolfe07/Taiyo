import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addContact } from '../../actions/contactActions';
import ContactList from './ContactList';

// Structure of the data we want
interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}

function ContactForm() {
    const [addContactBtn, setAddContactBtn] = useState(false);
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [status, setStatus] = useState('active');
    const dispatch = useDispatch();
    const addHandler = () => {
        setAddContactBtn(!addContactBtn);
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const contact: Contact = {
            id: String(Math.random()),
            firstName: fname,
            lastName: lname,
            email: email,
            phone: number,
            status: status
        };

        if (!contact.firstName || !contact.lastName || !contact.phone || !contact.email)
        {
            alert("Field Empty");
            return;
        }
        
            dispatch(addContact(contact));
    }

    return (

        <div className='p-4 sm:ml-64'>
            <div className='flex justify-center w-full ma-w-xs'>
                {addContactBtn && <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={submitHandler}>
                    <div className='mb-4'>

                        <label htmlFor='first-name' className='text-gray-700 text-sm font-bold mb-2'>First Name</label>
                        <input id='first-name' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={fname}
                            onChange={(e) => setFName(e.target.value)} />
                    </div>
                    <div className='mb-4'>

                        <label htmlFor='last-name' className='text-gray-700 text-sm font-bold mb-2'>Last Name</label>
                        <input id='last-name' type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={lname}
                            onChange={(e) => setLName(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='text-gray-700 text-sm font-bold mb-2'>Email</label>
                        <input id='email' type='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='no' className='text-gray-700 text-sm font-bold mb-2'>Contact No.</label>
                        <input id='no' type='tel' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={number}
                            onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value='active' selected>Active</option>
                            <option value='inactive'>Inactive</option>
                        </select>
                    </div>
                    <div className='flex justify-between'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Add Contact</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={addHandler}>Close</button>
                    </div>
                </form>}
                {!addContactBtn &&
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={addHandler}>Add Contact</button>}
            </div>
            <ContactList />
        </div>
    )
}

export default ContactForm;