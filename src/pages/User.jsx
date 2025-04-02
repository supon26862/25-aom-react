import React from 'react';


const User = ({ employee }) => {

    return (
        <div className='w-3/4 mb-12'>
            <table className='w-full text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map(item => (
                        <tr className='border' key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User