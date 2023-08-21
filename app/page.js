// import Link from "next/link";
// import React from "react";

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to Home</h1>
//       <ul>
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         <li>
//           <Link href="/about/team">Team</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default HomePage;

//after users
"use client";
import Link from "next/link";
import Users from "./components/Users";
import { useEffect, useState } from "react";
import LoadingPage from "./loading";
import UserSearch from "./components/UserSearch";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome to Home</h1>
      <UserSearch getSearchResults={(results) => setUsers(results)} />
      <Users users={users} />
    </div>
  );
};

export default HomePage;
