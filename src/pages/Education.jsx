import PageLayout from "../components/PageLayout";
import ImageTableCard from "../components/ImageTableCard";

export default function Education() {
  const education = [
    { name: "Software Engineer", description: "Universidad del Aconcagua - University degree", rangeTime: "2003 - 2011", image: "images/education/university.png" },
    { name: "English Upper Intemediate", description: "Institute of English and Foreign Languages - Upper Intermediate Certification", rangeTime: "2003 - 2011", image: "images/education/iec.jpg" },
    { name: "Certified Scrum Master", description: "Scrum Alliance - Certification", rangeTime: "2018 - 2018", image: "images/education/scrum.png" },
    { name: "Data Engineering with DataBricks", description: "Databricks - Certification", rangeTime: "2024 - 2024", image: "images/education/databricks.png" }
    
  ];

  return (
    <PageLayout>
        <ImageTableCard items={education} />       
    </PageLayout>
  );
}