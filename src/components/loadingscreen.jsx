import React, { useState, useEffect } from "react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          // Kode untuk menampilkan halaman utama website
        </div>
      )}
    </div>
  );
}

export default LoadingScreen;