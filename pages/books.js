import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import loader from "@/public/loader.svg";
import BookCard from "../components/Books/Bookcard";

const Books = () => {
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const localBooks = [
                    {
                        id: 1,
                        title: "Basic Understanding of Specific Relief",
                        editor: "Kiran Rai",
                        coverImage: "/books/Basic-Understanding-of-Specific-Relief-FullBook.png",
                        pdfPath: "/books/Basic-Understanding-of-Specific-Relief-FullBook.pdf",
                        description: "In Law curriculum Specific Relief Act 1963 is taught with Contract Law- I course"
                    }
                ];

                setBooksData(localBooks);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="overflow-y-hidden min-h-screen">
            <div className="px-[6%] mb-[6%] mt-20 container mx-auto text-[#0F111F] p-4 space-y-[5%]">
                <div className="space-y-[5%]">
                    <div className="flex my-12">
                        <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
                            <hr className="w-16 h-1 bg-black" />
                            <span className="font-bold">BOOKS</span>
                            <div className={"flex justify-end font-bold"}>
                                <hr className="w-16 h-1 bg-black" />
                            </div>
                        </h2>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-screen">
                            <Image src={loader} alt="Loading" width={50} height={50} />
                        </div>
                    ) : booksData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                            {booksData.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-screen">
                            <p className="text-4xl font-semibold text-gray-600">
                                No books available at the moment!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Books;