import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authToken = Cookies.get("admin-auth");
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      Cookies.set("admin-auth", true, { expires: 0.25 });
      router.push("/admin");
      setIsAuthenticated(true);
      setPassword("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    Cookies.remove("admin-auth");
    setIsAuthenticated(false);
    router.push("/admin");
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">⚠ ADMIN DASHBOARD ⚠</h1>
          <p className="text-gray-600 mb-4">Welcome to CTRCR Admin Panel</p>

          <div className="grid gap-4">
            <button
              onClick={() => router.push("/admin/blogs")}
              className="w-full px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              📖 Manage Blogs
            </button>

            <button
              onClick={() => router.push("/admin/blogs/editorial-board")}
              className="w-full px-4 py-3 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              📝 Editorial Board
            </button>

            <button
              onClick={() => router.push("/admin/books")}
              className="w-full px-4 py-3 font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-700 transition"
            >
              📚 Books management
            </button>

            <button
              onClick={() => router.push("/admin/team")}
              className="w-full px-4 py-3 font-semibold text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              👥 Team Management
            </button>

            <button
              onClick={() => router.push("/admin/events")}
              className="w-full px-4 py-3 font-semibold text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-700 transition"
            >
              🎉 Events Management
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full px-4 py-3 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700 transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">⚠ ADMIN LOGIN ⚠</h1>
        <p className="text-gray-600 mb-4">Enter Admin Password</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLogin}
          className="mt-4 w-full px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          🔑 Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;