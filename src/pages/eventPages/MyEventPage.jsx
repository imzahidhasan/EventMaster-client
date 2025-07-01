import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import api from '../../utilities/axiosInstance';
import EventCard from '../../components/eventCard/EventCard';
import Spinner from '../../components/Spinner';

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchEvents = async () => {
        try {
            setLoading(true);
            const response = await api.get('/event/my-events');
            setEvents(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
            toast.error('Failed to load your events');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    if (loading) {
        return (
            <Spinner />
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">My Events</h1>

                {events.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        <p className="text-gray-600 text-lg">You haven't added any events yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {events.map(event => (
                            <EventCard key={event._id} event={event} fetchEvents={fetchEvents} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsPage;