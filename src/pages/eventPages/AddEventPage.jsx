import { useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../utilities/axiosInstance';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const AddEventPage = () => {
    const { user } = useAuth()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        postedBy: '',
        dateTime: '',
        location: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await api.post('/event/create-event', formData);

            //show success message
            toast.success(res.data.message || 'Event added successfully!');

            navigate('/my-events');

        } catch (err) {
            setError('Failed to add event. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Event</h2>
            {error && <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-1 font-medium text-gray-700">Event Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="postedBy" className="mb-1 font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="postedBy"
                        name="postedBy"
                        value={user?.name || formData.postedBy}
                        onChange={handleChange}
                        required
                        readOnly
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="dateTime" className="mb-1 font-medium text-gray-700">Date and Time</label>
                    <input
                        type="datetime-local"
                        id="dateTime"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="location" className="mb-1 font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="description" className="mb-1 font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="md:col-span-2 mt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                        disabled={loading}
                    >
                        {loading ? 'Adding Event...' : 'Add Event'}
                    </button>
                </div>
            </form>

        </div>
    );
};

export default AddEventPage;