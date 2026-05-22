import PageLayout from "../components/PageLayout";
import ImageCard from "../components/ImageCard";

export default function About() {
    return (
        <PageLayout>
            {/* Título centrado en pantalla completa */}
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-center mb-4">About me</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        I am a Software Engineer who graduated from Aconcagua University in 2011. Outside of work, I enjoy outdoor activities, sports, trekking, and cycling. I also love good food, discovering different cultures, and, most of all, traveling.
                    </p>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-10">Hobbies and Interests</h1>
            </div>
            {/* Cards con foto abajo*/}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ImageCard
                    imageSrc="images/aboutme/cycling.png"
                    title="Cycling"
                    description="I enjoy cycling as a way to stay fit and explore new places."
                />
                <ImageCard
                    imageSrc="images/aboutme/trekking.png"
                    title="Trekking"
                    description="I really like trekking, which combines nature, adventure, and physical challenge."
                />
                <ImageCard
                    imageSrc="images/aboutme/sports.png"
                    title="Sports"
                    description="I’m passionate about various sports as a way to stay active and healthy."
                />
                <ImageCard
                    imageSrc="images/aboutme/travel.png"
                    title="Travel"
                    description="I love traveling and discovering new cultures and experiences."
                />
                <ImageCard
                    imageSrc="images/aboutme/food.png"
                    title="Food"
                    description="I’m passionate about good food, I enjoy exploring different cuisines and pairing them with a good Mendoza wine."
                />
                <ImageCard
                    imageSrc="images/aboutme/asador.png"
                    title="Great Argentine Asado Grill Master!"
                    description="It is more than just cooking, it’s a tradition centered around enjoying time with friends and family, sharing conversations, stories, and good moments together."
                />
            </div>


        </PageLayout>
    );
}