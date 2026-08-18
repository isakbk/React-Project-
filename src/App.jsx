import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routers/AppRoutes";

function App() {
  return (
    <>
      <Header />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;