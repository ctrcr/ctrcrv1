import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import loader from "@/public/loader.svg";
import BookCard from "../components/Books/Bookcard";
import { generateBookSchema, generateBreadcrumbSchema } from "@/utils/seoHelpers";

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

    // Generate dynamic SEO data
    const bookTitles = booksData.map(book => book.title).join(', ');
    const bookAuthors = [...new Set(booksData.map(book => book.editor))].join(', ');
    const totalBooks = booksData.length;

    return (
        <>
            <Head>
                <title>Books - CTRCR</title>
                <meta 
                    name="description" 
                    content={`Access ${totalBooks} professional legal publications including books on corporate law, commercial regulations, and specific relief. Published by renowned authors: ${bookAuthors}.`} 
                />
                <meta 
                    name="keywords" 
                    content={`legal books, corporate law publications, commercial regulations books, ${bookTitles}, ${bookAuthors}, legal education, law books download`}
                />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Legal Books - CTRCR | Corporate Law Publications" />
                <meta 
                    property="og:description" 
                    content={`Professional legal publications on corporate law and commercial regulations`} 
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ctrcr.com/books" />
                <meta property="og:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Legal Books - CTRCR" />
                <meta 
                    name="twitter:description" 
                    content={`Professional legal publications on corporate law and commercial regulations`} 
                />
                <meta name="twitter:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
                
                {/* Structured Data for Books */}
                {booksData.length > 0 && (
                    <script 
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "ItemList",
                                "itemListElement": booksData.map((book, index) => ({
                                    "@type": "ListItem",
                                    "position": index + 1,
                                    "item": generateBookSchema(book)
                                }))
                            })
                        }}
                    />
                )}
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateBreadcrumbSchema([
                            { name: 'Home', url: 'https://www.ctrcr.com' },
                            { name: 'Books', url: 'https://www.ctrcr.com/books' }
                        ]))
                    }}
                />
            </Head>
            
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
        </>
    );
};

export default Books;