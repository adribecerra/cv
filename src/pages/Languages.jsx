import PageLayout from "../components/PageLayout";
import IconCard from "../components/IconCard";

export default function Languagues() {
  const languages = [
    { name: "Spanish", description: "Native or bilingual proficency", image: "images/languages/spanish.png" },
    { name: "English", description: "Full professional proficiency", image: "images/languages/english.png" }
  ];

  return (
    <PageLayout>
        <IconCard items={languages} />       
    </PageLayout>
  );
}