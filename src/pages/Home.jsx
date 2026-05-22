import PageLayout from "../components/PageLayout";
import ImageCard from "../components/ImageCard";

export default function Home() {
    return (
        <PageLayout>
            {/* Título centrado en pantalla completa */}
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    {/* Foto solo visible en móviles */}
                    <div className="block md:hidden mb-6">
                        <img
                            src="images/fotocv.PNG"
                            alt="Tu foto"
                            className="w-40 h-40 rounded-full shadow-md mx-auto"
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Hello! I'm Adrian</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Senior Backend Engineer with 15+ years of experience building scalable and data-intensive systems using Java, Spring Boot, and Drools. Strong background in microservices, rule engines, distributed systems, and asynchronous processing with technologies such as RabbitMQ, AWS S3, Docker, Databricks, and PySpark. Experienced in performance optimization, REST APIs, testing, CI/CD pipelines, and system monitoring. Passionate about solving complex problems and delivering scalable, practical solutions.
                    </p>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">My Background</h1>
            </div>
            {/* Cards con foto abajo*/}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ImageCard
                    imageSrc="images/experience/work_experience.jpeg"
                    title="My work experience"
                    description="The strongest professionals are those who combine experience with a constant desire to learn."
                    route="/experience"
                /> 
                <ImageCard
                    imageSrc="images/education/education.png"
                    title="My education"
                    description="If you want to change the world, first dedicate yourself to education."
                    route="/education"
                />
                <ImageCard
                    imageSrc="images/skills/skills.png"
                    title="My skills"
                    description="Our greatest asset is the willingness to keep improving our skills every day."
                    route="/skills"
                />
                <ImageCard
                    imageSrc="images/languages/languages.png"
                    title="My languages"
                    description="Clear communication is the foundation of great solutions."
                    route="/languages"
                />
                <ImageCard
                    imageSrc="images/courses/courses.png"
                    title="My Courses"
                    description="Every course you take is another step toward a better version of yourself."
                    route="/courses"
                />
                {/* My resume card */}
                <div>
                    <img src="images/resume/resume.png" alt="My resume" className="w-full"
                        loading="lazy" />
                    <div className="p-2">
                        <h3 className="text-lg font-semibold">My resume</h3>
                        <p className="text-gray-600">For a detailed overview of my experience, please</p>
                        <a href="files/AdrianBecerraCV.pdf" className="text-blue-500 hover:underline" download>
                            Download my resume (english version)
                        </a>

                    </div>
                </div>
            </div>
        </PageLayout>
    );
}