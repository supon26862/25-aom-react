import axios from "axios";
import { useEffect, useState } from "react";
import Admin from "../pages/Admin";
import User from "../pages/User";

const Home = () => {

    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [sector, setSector] = useState('');

    const fetchUsers = async () => {
        setError("");
        setLoading(true);

        try {
            const res = await axios.get(
                "https://jsd5-mock-backend.onrender.com/members"
            );
            setEmployee(res.data);
            console.log(res.data)
        } catch (err) {
            console.error(err);
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Initial Fetch data
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center mt-8 gap-8">
            <section className="text-center">
                <h1 className="text-4xl font-bold">Generation Thailand</h1>
                <h2 className="text-4xl font-bold">{sector === 'user' ? 'Home - User Sector' : sector === 'admin' ? 'Home - Admin Sector' : 'React - Assessment'}</h2>
            </section>
            <div className="flex gap-8">

                <button onClick={() => setSector('user')}>User Home Section</button>
                <button onClick={() => setSector('admin')}>Admin Home Section</button>

            </div>
            {loading && <p>Loading users...</p>}
            {error && <p>{error}</p>}
            {sector === 'user' ? <User employee={employee} /> : null}
            {sector === 'admin' ? <Admin employee={employee} fetchUsers={fetchUsers} setError={setError} /> : null}
        </div>
    )
}



export default Home