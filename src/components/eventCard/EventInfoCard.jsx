import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends, FaUserPlus } from 'react-icons/fa';
import api from '../../utilities/axiosInstance';
import toast from 'react-hot-toast';

const EventInfoCard = ({ event, refresh }) => {
    const handleJoinEvent = async (event) => {
        try {
            const res = await api.patch(`/event/events/${event._id}/join`);
            toast.success(res.data.message);
            refresh()
        } catch (error) {
            console.error("error", error);
            toast.error("Failed to join the event. Please try again.");
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2"></div>
            <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-1 text-gray-800">{event.title}</h2>
                    <p className="text-xs font-medium text-gray-500 mb-4">Posted by: {event.name}</p>

                    <div className="space-y-3 text-sm mb-5">
                        <div className="flex items-center text-gray-600">
                            <div className="bg-blue-50 p-2 rounded-full mr-3">
                                <FaCalendarAlt className="text-blue-500" />
                            </div>
                            {new Date(event.dateTime).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} at {new Date(event.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>

                        <div className="flex items-center text-gray-600">
                            <div className="bg-blue-50 p-2 rounded-full mr-3">
                                <FaMapMarkerAlt className="text-blue-500" />
                            </div>
                            {event.location}
                        </div>

                        <div className="flex items-center text-gray-600">
                            <div className="bg-blue-50 p-2 rounded-full mr-3">
                                <FaUserFriends className="text-blue-500" />
                            </div>
                            {event.attendeeCount} attendees
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <p className="text-gray-700 text-sm line-clamp-3">{event.description}</p>
                    </div>
                </div>

                <div className="flex justify-end mt-auto">
                    <button
                        onClick={() => handleJoinEvent(event)}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
                    >
                        <FaUserPlus className="mr-2" /> Join Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventInfoCard;