import React, { useEffect, useState } from "react";
import "./css/App.css";

const url = "https://course-api.netlify.api/api/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setVlue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setJobs(newjobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  return (
    <div className="container">
      <h2>Jobs</h2>
    </div>
  );
}

export default App;
