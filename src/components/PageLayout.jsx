export default function PageLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('images/85332.jpg')" }}
    >
      {/* Contenedor con margen respecto al sidebar */}
      <div className="bg-gray-50 dark:bg-gray-400 transition-colors duration-300 ml-3 bg-white/80 dark:bg-gray-100/80 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}