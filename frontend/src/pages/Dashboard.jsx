import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [bugStats, setBugStats] = useState([
    // { title: "Bugs This Month", count: 0 },
    { title: "Bugs Closed", count: 0 },
    { title: "Bugs Open", count: 0 },
  ]);

  const [priorityStats, setPriorityStats] = useState([
    { title: "High Priority", count: 0 },
    { title: "Medium Priority", count: 0 },
    { title: "Low Priority", count: 0 },
  ]);
// {
//     "bugs_closed": 0,
//     "bugs_open": 4,
//     "high_priority": 1,
//     "medium_priority": 2,
//     "low_priority": 1
// }
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // console.log(`${process.env.REACT_APP_API_URL}/dashboard`);
         //const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`);
        const response = await axios.get(`http://localhost:8000/api/dashboard`);
        const data = response.data;
        setBugStats([
          // { title: "Bugs This Month", count: data.bugsThisMonth },
          { title: "Bugs Closed", count: data.bugs_closed },
          { title: "Bugs Open", count: data.bugs_open },
        ]);

        setPriorityStats([
          { title: "High Priority", count: data.high_priority },
          { title: "Medium Priority", count: data.medium_priority },
          { title: "Low Priority", count: data.low_priority },
        ]);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard Page</h1>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Bug Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bugStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-blue-500">{stat.count}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6">Priority Levels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-blue-500">{stat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;