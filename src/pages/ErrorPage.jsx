import React from 'react';
import { Link, useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-4">
            <div className="w-full max-w-xl text-center">
                {/* Error status code */}
                <h2 className="text-9xl font-extrabold text-gray-200">404</h2>

                {/* Error icon */}
                <div className="mb-8 -mt-14">
                    <div className="inline-block p-4 bg-white rounded-full shadow-lg animate-bounce">
                        <svg
                            className="w-12 h-12 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Error message */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Return Home
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg shadow-sm hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;