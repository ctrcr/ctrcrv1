import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { set } from "mongoose";

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-red-500 text-3xl">
          <strong>⚠</strong>ADMIN PAGE<strong>⚠</strong>
        </h1>
        <h2 className="mb-4 text-xl font-bold">Welcome to CTRCR Admin Page</h2>
        <button
          onClick={() => router.push("/admin/blogs")}
          className="mb-4  px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Blogs Page
        </button>
        <button
          onClick={() => router.push("/admin/blogs/editorial-board")}
          className="mb-4  px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Blogs Editorial Board Page
        </button>
        <button
          onClick={() => router.push("/admin/team")}
          className="mb-4  px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Team Page
        </button>
        <button
          onClick={() => router.push("/admin/events")}
          className="mb-4  px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Events Page
        </button>
        <button
          onClick={handleLogout}
          className=" px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-4 bg-white rounded shadow-md">
        <h1 className="text-red-500 text-3xl">
          <strong>⚠</strong>ADMIN PAGE<strong>⚠</strong>
        </h1>
        <h2 className="mb-4 text-xl font-bold">Enter Admin Password</h2>
        {error && <p className="mb-2 text-red-500">{error}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
