import PageLayout from "../components/PageLayout";
import IconCard from "../components/IconCard";

export default function Education() {
  const education = [
    { name: "Software Engineer", description: "Universidad del Aconcagua - University degree", rangeTime: "2003 - 2011", image: "images/education/university.png" },
    { name: "English Upper Intemediate", description: "Institute of English and Foreign Languages - Upper Intermediate Certification", rangeTime: "2003 - 2011", image: "images/education/iec.jpg" },
    
  ];

  return (
    <PageLayout>
        <IconCard items={education} />       
    </PageLayout>
  );
}