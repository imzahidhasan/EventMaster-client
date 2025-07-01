const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Event Organizer",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            quote: "This app helped me organize my first meetup. Super easy to use and my attendees loved the experience!"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Conference Host",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            quote: "I've tried many event platforms, but this one stands out. The user interface is intuitive and the support team is incredible."
        },
        {
            id: 3,
            name: "Jessica Williams",
            role: "Wedding Planner",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            quote: "Managing RSVPs and communicating with guests has never been easier. This platform saved me countless hours!"
        },
        {
            id: 4,
            name: "David Rodriguez",
            role: "Corporate Event Manager",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
            quote: "From planning to execution, this platform streamlined our company events. Highly recommended for businesses!"
        },
    ];

    return (
        <section className="py-16 relative overflow-hidden" 
                style={{
                    background: "linear-gradient(135deg, #EDF2FF 0%, #E0E7FF 50%, #DDD6FE 100%)",
                    position: "relative"
                }}>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 left-1/3 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted by Event Planners Everywhere</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied users who have transformed their event planning experience.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-indigo-100"
                        >
                            <div className="flex flex-col items-center">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="w-20 h-20 rounded-full border-4 border-indigo-100 mb-4 object-cover"
                                />
                                <div className="text-center">
                                    <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                                    <p className="text-indigo-600 text-sm mb-4">{testimonial.role}</p>
                                    <div className="mb-3 flex justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg">
                        Join Our Community
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;