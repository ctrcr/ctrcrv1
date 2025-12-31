import Link from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
    const trackView = async () => {
        await fetch(`/api/v1/books/views?bookName=${book.title}`, { method: "POST" });
    };

    const trackDownload = async () => {
        await fetch(`/api/v1/books/downloads?bookName=${book.title}`, { method: "POST" });
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" onClick={trackView}>
            <div className="relative h-64 w-full">
                {book.coverImage ? (
                    <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">No Cover Available</p>
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">by {book.editor}</p>
                <p className="text-gray-700 mb-6 line-clamp-3">{book.description}</p>

                <div className="flex gap-4 items-center justify-center">

                    <Link href={book.pdfPath} passHref target="_blank">
                        <button className="w-40 bg-gray-800 hover:bg-gray-950 text-white py-3 rounded-md font-medium transition-colors duration-300">
                            Read Now
                        </button>
                    </Link>

                    <a href={book.pdfPath} download onClick={trackDownload}>
                        <button className="w-40 bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-md font-medium transition-colors duration-300">
                            Download
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookCard;