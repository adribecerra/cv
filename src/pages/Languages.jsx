import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function Languagues() {
  const languages = [
    { name: "Spanish", description: "Native or bilingual proficency", image: "images/languages/spanish.png" },
    { name: "English", description: "Full professional proficiency", image: "images/languages/english.png" }
  ];

  return (
    <PageLayout>
        <Card items={languages} />       
    </PageLayout>
  );
}