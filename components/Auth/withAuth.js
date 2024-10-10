// components/withAuth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const authToken = Cookies.get("admin-auth");

      if (authToken) {
        setIsAuthenticated(true);
        setLoading(false);
      } else {
        router.push("/admin");
      }
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
