import { FaCalendarPlus } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const HowItWorkSection = () => {
    const steps = [
        {
            id: 1,
            icon: <FaCalendarPlus className="text-4xl text-indigo-600" />,
            title: "Create",
            description: "Add your event in seconds with our intuitive interface."
        },
        {
            id: 2,
            icon: <BsSearch className="text-4xl text-indigo-600" />,
            title: "Discover",
            description: "Search and explore upcoming events in your area."
        },
        {
            id: 3,
            icon: <HiUserGroup className="text-4xl text-indigo-600" />,
            title: "Join",
            description: "Click to attend — simple, fast, and hassle-free."
        }
    ];

    return (
        <section className="py-20 relative bg-gradient-to-br from-indigo-50 to-purple-50">
            {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0MzM4REQiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0xNy0xM2MzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMC0yYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHpNNi4yNSAzN2MzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMC0yYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                        
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It <span className="text-indigo-600">Works</span></h2>
                                <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
                                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                                    Your guide to seamless event management in three simple steps
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
                                {steps.map((step, index) => (
                                    <div key={step.id}>
                                        <div
                                          
                                            className={`group bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-indigo-200 hover:bg-indigo-600 hover:text-white ${index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-20' : ''}`}
                                            style={{width: '300px'}}
                                        >
                                            <div className="flex justify-center mb-6">
                                                <div className="flex items-center justify-center h-16 w-16 bg-indigo-100 group-hover:bg-white rounded-full transition-colors duration-300">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white mb-3">{step.title}</h3>
                                            <p className="text-gray-600 group-hover:text-indigo-100">{step.description}</p>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="hidden md:flex items-center justify-center mx-4 text-indigo-600">
                                                <BsArrowRight className="text-3xl transform rotate-45" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            };

            export default HowItWorkSection;
