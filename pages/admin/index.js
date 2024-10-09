import { useRouter } from "next/router";

export default function AdminPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/admin/blogs");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleRedirect}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Go to Blogs
      </button>
    </div>
  );
}
