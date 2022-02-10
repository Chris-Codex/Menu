import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./css/App.css";

const url = "https://course-api.com/react-tabs-project";

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
        <div className="home-container container">
          <h1>loading...</h1>
        </div>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="home-container container">
        <div className="row">
          <div className="col-md-4">wqeqeq</div>
          <div className="col-md-8">
            <h3 className="experience">Experience</h3>
            <div className="experience-wrapper">
              <p className="title">{title}</p>
              <button class="btn btn-light btn-name">
                <h6>{company}</h6>
              </button>
              <p className="date"> {dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div className="job-desc" key={index}>
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p style={{ marginLeft: "20px", marginTop: "-24px" }}>
                      {duty}
                    </p>
                  </div>
                );
              })}
            </div>

            <button type="button" class="btn btn-light more-info">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
