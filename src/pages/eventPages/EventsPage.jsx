import { useEffect, useState, useCallback, useRef } from "react";
import api from "../../utilities/axiosInstance";
import { debounce } from "lodash"; 
import Spinner from "../../components/Spinner";
import EventInfoCard from "../../components/eventCard/EventInfoCard";

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("");
    const dateInputRef = useRef(null);

    const fetchEvents = useCallback(async () => {
        console.log(title, filter, date);
        try {
            setLoading(true);
            setError(null);
            const res = await api.get("/event/get-events", {
                params: { title, filter, date },
            });
            setEvents(res.data);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch events. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [title, filter, date]);


    const debouncedFetch = useCallback(
        debounce(() => {
            fetchEvents();
        }, 500),
        [fetchEvents]
    );

    useEffect(() => {
        debouncedFetch();
        // Cleanup function to cancel pending debounced calls
        return () => debouncedFetch.cancel();
    }, [debouncedFetch]);

    // Handler functions
    const handleTitleChange = (e) => setTitle(e.target.value);

    const handleDateChange = (e) => {
        setDate(e.target.value);
        // Clear predefined filter when date is selected
        if (e.target.value) {
            setFilter("");
        }
    };

    const handleFilterChange = (e) => {
        // Clear date input and state when predefined option is selected
        if (dateInputRef.current) {
            dateInputRef.current.value = "";
        }
        setDate(""); 
        // Always update the filter
        setFilter(e.target.value);
    };

    const clearFilters = () => {
        setTitle("");
        setFilter("");
        setDate("");
        if (dateInputRef.current) {
            dateInputRef.current.value = "";
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-wrap items-center gap-2 mb-6 bg-white p-3 rounded-lg shadow-sm">
                {/* Search box */}
                <div className="relative flex-grow min-w-[200px]">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by title..."
                        className="w-full pl-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>

                {/* Date picker */}
                <input
                    ref={dateInputRef}
                    type="date"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleDateChange}
                />

                {/* Predefined filter options */}
                <select
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filter.startsWith("date:") ? "" : filter}
                    onChange={handleFilterChange}
                >
                    <option value="">All</option>
                    <option value="today">Today</option>
                    <option value="this-week">This Week</option>
                    <option value="last-week">Last Week</option>
                    <option value="this-month">This Month</option>
                    <option value="last-month">Last Month</option>
                </select>

                {/* Clear filter button */}
                <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 text-gray-700 transition-colors"
                >
                    Clear Filter
                </button>
            </div>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                    {error}
                </div>
            )}

            {/* Loading indicator */}
            {loading ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {events.length > 0 ? (
                        events.map((event) => (
                            <EventInfoCard key={event._id} event={event} refresh={fetchEvents} />
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-8 text-gray-500">
                            No events found matching your criteria.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EventsPage;
