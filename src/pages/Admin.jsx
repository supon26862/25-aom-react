import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Admin = ({ employee, fetchUsers, setError }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const createUser = async () => {
            if (!submitted && !name) return;

            setError('');
            setResponse(null);

            try {
                const res = await axios.post(
                    "https://jsd5-mock-backend.onrender.com/members",
                    { name: name, lastname: lastName, position: position }
                );
                setResponse(res.data);
                fetchUsers();
                setName('');
                setLastName('');
                setPosition('');
            } catch (error) {
                console.error(error);
                setError(" Please try again.")
            } finally {
                setSubmitted(false);
            }
        };
        createUser();
    }, [submitted])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const [deleteId, setDeleteId] = useState("");

    useEffect(() => {
        const deleteEmployee = async () => {
            if (!deleteId) return;

            setError("");

            try {
                await axios.delete(
                    `https://jsd5-mock-backend.onrender.com/member/${deleteId}`
                );
                fetchUsers();
            } catch (error) {
                console.error(error)
                setError("Please try again.")
            } finally {
                setDeleteId(null);
            }
        }
        deleteEmployee();
    }, [deleteId])


    return (
        <div>
            <form onSubmit={handleSubmit} className='flex gap-8 mb-8'>
                <input className='bg-white px-4 py-2 w-60 rounded'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder='Name'
                />
                <input className='bg-white px-4 py-2 w-60 rounded'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    placeholder='Last Name'
                />
                <input className='bg-white px-4 py-2 w-60 rounded'
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    type="text"
                    placeholder='Position'
                />
                <button type="submit">submit</button>
            </form>

            {response && (<p className="mt-2">Created</p>)}

            <table className='w-3/4 m-auto text-center mb-16'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map(item => (
                        <tr className='border' key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                            <td onClick={() => setDeleteId(item.id)} className='text-red-500'>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin