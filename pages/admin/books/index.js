import React, { useState, useEffect } from 'react';
import withAuth from "@/components/Auth/withAuth";

const BooksAdmin = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/v1/books/views');

                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }

                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="text-xl font-semibold text-gray-700">Loading books...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="text-xl font-semibold text-red-600">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex my-12 pt-20">
                    <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
                        <hr className="w-16 h-1 bg-black" />
                        <span className="font-bold">BOOKS</span>
                        <div className={"flex justify-end font-bold"}>
                            <hr className="w-16 h-1 bg-black" />
                        </div>
                    </h2>
                </div>

                {books.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No books found. Add some books to get started.</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {books.map((book) => (
                            <div
                                key={book._id}
                                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{book.bookName}</h2>

                                    <div className="mt-6 border-t border-gray-200 pt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-gray-500">Views</span>
                                            <span className="text-sm font-semibold text-gray-900">{book.views}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-500">Downloads</span>
                                            <span className="text-sm font-semibold text-gray-900">{book.downloads}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 disabled:cursor-not-allowed">
                                        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 disabled:cursor-not-allowed">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default withAuth(BooksAdmin);