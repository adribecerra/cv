export default function PageLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('images/85332.jpg')" }}
    >
      {children}
    </div>
  );
}