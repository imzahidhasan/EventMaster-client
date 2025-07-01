import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends, FaEdit, FaTrash } from 'react-icons/fa';
import Modal from '../modal/Modal';
import api from '../../utilities/axiosInstance';
import toast from 'react-hot-toast';


const EventCard = ({ event, fetchEvents }) => {

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // State to track form values
    const [editedEvent, setEditedEvent] = useState({});

    // Open modal and initialize form state
    const handleUpdateClick = (event) => {
        // Create a Date object from the event's dateTime
        const eventDate = new Date(event.dateTime);

        // Format for datetime-local input (YYYY-MM-DDThh:mm)
        // Adjusts for timezone offset to show in local time
        const localDateTime = new Date(eventDate.getTime() - eventDate.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16);

        setEditedEvent({
            id: event._id || event.id,
            title: event.title,
            name: event.name,
            dateTime: localDateTime,
            location: event.location,
            description: event.description,
        });
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedEvent(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Submit the updated event
    const handleUpdate = async () => {
        // Create the updated event object
        const updatedEvent = {
            ...event,
            ...editedEvent,
            dateTime: new Date(editedEvent.dateTime).toISOString()
        };
        //call the api to update the event
        const res = await api.patch(`/event/events/${event._id}`, updatedEvent);
        //show success message
        toast.success(res.data.message);

        // Refresh the events list
        fetchEvents();

        // Close the modal
        setIsEditModalOpen(false);
    };

    // Handle event deletion
    const handleDelete = async () => {
        //call the api to delete the event
        const res = await api.delete(`/event/events/${event._id}`);
        //show success message
        toast.success(res.data.message);

        // Refresh the events list
        fetchEvents();

        // Close the modal
        setIsDeleteModalOpen(false);
    };

    return <>
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
                            {new Date(event.dateTime).toLocaleDateString()} at {new Date(event.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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

                <div className="flex justify-end gap-2 mt-auto">
                    <button
                        onClick={() => handleUpdateClick(event)}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
                    >
                        <FaEdit className="mr-2" /> Edit
                    </button>
                    <button
                        onClick={() => handleDeleteClick(event)}
                        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm font-medium"
                    >
                        <FaTrash className="mr-2" /> Delete
                    </button>
                </div>
            </div>
        </div>

        {/* Edit Modal */}
        <Modal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            title="Edit Event"
            className="max-w-3xl"
            footer={
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                        onClick={() => setIsEditModalOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        onClick={handleUpdate}
                    >
                        Save Changes
                    </button>
                </div>
            }
        >
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={editedEvent.title || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={editedEvent.name || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
                        <input
                            type="datetime-local"
                            name="dateTime"
                            value={editedEvent.dateTime || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={editedEvent.location || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        name="description"
                        value={editedEvent.description || ''}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        rows="3"
                    ></textarea>
                </div>
            </div>
        </Modal>

        {/* Delete Modal */}
        <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            title="Confirm Delete"
            className="max-w-md"
            footer={
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                        onClick={() => setIsDeleteModalOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            }
        >
            <p>Are you sure you want to delete the event "{event.title}"?</p>
            <p className="text-sm text-gray-500 mt-2">This action cannot be undone.</p>
        </Modal>
    </>
}

export default EventCard;