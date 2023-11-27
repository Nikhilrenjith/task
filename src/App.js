import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {userData && <Cards userData={userData} />}
    </div>
  );
};

export default App;
