import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Clymb Clinical</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Built and maintained scalable data pipelines as a Data Engineer at Clymb Clinical, working with large healthcare datasets.
              Experienced in data processing and analysis using Python, SQL, and PySpark.
              Worked with cloud platforms including Amazon Web Services and Microsoft Azure for data storage and pipeline orchestration.
              Focused on building reliable data workflows that support analytics, reporting, and data-driven decision making. 🚀
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Data Analyst</h4>
                <h5>Focus Lifestyle Pvt Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked as a Sales Data Analyst at Focus Pvt Ltd & Co, analyzing sales data to identify trends and support business decisions.
              Built dashboards and reports using **Excel, SQL, and Power BI** to track performance and revenue metrics.
              Performed data cleaning, analysis, and visualization to improve sales insights and reporting accuracy.
              Collaborated with business teams to transform raw sales data into actionable insights for growth. 📊
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>CoreData Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked as a Data Analyst at Core Data Technology, transforming complex datasets into strategic insights for business growth.
              Specialized in data exploration, trend analysis, and performance reporting using SQL, Excel, and visualization tools.
              Built automated dashboards to help teams monitor KPIs and make faster data-driven decisions.
              Focused on turning raw data into clear, actionable insights that improve operational and sales performance. 📊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
