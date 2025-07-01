import { Link } from 'react-router';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-purple-700 to-indigo-900 min-h-full  p-12 flex items-center">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Main content - centered */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-md">
                            <span className="block">EventMaster</span>
                            <span className="block text-indigo-100 mt-2">
                                Discover and Manage Events with Ease!
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-white mx-auto drop-shadow">
                            Find local events, create your own gatherings, and connect with like-minded people - all in one place.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/events"
                                className="rounded-full bg-white px-8 py-3 text-base font-medium text-indigo-900 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                Browse Events
                            </Link>
                            <Link
                                to="/register"
                                className="rounded-full bg-indigo-400 px-8 py-3 text-base font-medium text-indigo-900 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Decorative element replacing Lottie */}
                    <div className="mt-12 max-w-md mx-auto">
                        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/30 transform transition-transform hover:scale-105 duration-500">
                            <div className="grid grid-cols-2 gap-4">
                                {['Concert', 'Conference', 'Workshop', 'Exhibition'].map((event, index) => (
                                    <div key={index} className="bg-white/30 p-4 rounded-lg text-white font-semibold text-center hover:bg-white/40 transition-colors">
                                        {event}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative wave at bottom */}
            <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    className="w-full h-20"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f5f3ff"
                        fillOpacity="0.2"
                        d="M0,32L30,42.7C60,53,120,75,180,80C240,85,300,75,360,64C420,53,480,43,540,48C600,53,660,75,720,85.3C780,96,840,96,900,85.3C960,75,1020,53,1080,48C1140,43,1200,53,1260,53.3C1320,53,1380,43,1410,37.3L1440,32L1440,120L1410,120C1380,120,1320,120,1260,120C1200,120,1140,120,1080,120C1020,120,960,120,900,120C840,120,780,120,720,120C660,120,600,120,540,120C480,120,420,120,360,120C300,120,240,120,180,120C120,120,60,120,30,120L0,120Z"
                    ></path>
                    <path
                        fill="#e0e7ff"
                        fillOpacity="0.4"
                        d="M0,64L30,69.3C60,75,120,85,180,80C240,75,300,53,360,48C420,43,480,53,540,69.3C600,85,660,107,720,112C780,117,840,107,900,90.7C960,75,1020,53,1080,48C1140,43,1200,53,1260,58.7C1320,64,1380,64,1410,64L1440,64L1440,120L1410,120C1380,120,1320,120,1260,120C1200,120,1140,120,1080,120C1020,120,960,120,900,120C840,120,780,120,720,120C660,120,600,120,540,120C480,120,420,120,360,120C300,120,240,120,180,120C120,120,60,120,30,120L0,120Z"
                    ></path>
                </svg>
            </div>

        </section>
    );
};

export default HeroSection;
