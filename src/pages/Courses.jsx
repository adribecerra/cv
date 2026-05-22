import PageLayout from "../components/PageLayout";
import IconCard from "../components/IconCard";

export default function Courses() {
  const courses = [
    { name: "Certified Scrum Master", description: "Scrum Alliance - Certification", rangeTime: "2018 - 2018", image: "images/courses/scrum.png" },
    { name: "Data Engineering with DataBricks", description: "This course (formerly Data Engineering with Databricks V3) prepares data professionals to leverage the Databricks Lakehouse Platform to productionalize ETL pipelines. Students will use Delta Live Tables to define and schedule pipelines that incrementally process new data from a variety of data sources into the Lakehouse. Students will also orchestrate tasks with Databricks Workflows and promote code with Databricks Repos.", rangeTime: "2024 - 2024", image: "images/courses/databricks.png" , certification: "https://www.linkedin.com/in/adribecerra/overlay/Certifications/1106702483/treasury/?profileId=ACoAAATnCZYB0lKKUIuwp3YSX5VDkdgxkJ7VUkE" },
    { name: "Udemy SpringBoot - React", description: "Build Hotel Booking App Using SpringBoot, React, Payment 2026", rangeTime: "2024 - 2024", image: "images/courses/udemy.png", certification: "https://www.udemy.com/certificate/UC-af1a61ef-2c5d-41bb-bf7a-cf25a1b034fd/" },
    
    
  ];

  return (
    <PageLayout>
        <IconCard items={courses} />       
    </PageLayout>
  );
}