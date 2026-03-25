import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Test from "./pages/test";

import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import LeadersSection from "./components/LeadersSection"
import MembersSection from "./components/MembersSection"
import OnlineServices from "./components/OnlineServices"
import GovSection from "./components/GovSection"
import DynamicPage from "./pages/DynamicPage"
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";
import Sitemap from "./pages/Sitemap";
import RtiDocuments from "./pages/rtiDocuments";

function Home() {
  return (
    <>
      <Hero />

      <div className="about-leaders-section">
        <AboutSection />
        <LeadersSection />
      </div>

      <MembersSection />
      <OnlineServices />
      <GovSection />
    </>
  )
}

function App() {

  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<DynamicPage />} />
        <Route path="/:parent" element={<DynamicPage />} />
        <Route path="/:parent/:slug" element={<DynamicPage />} />
        <Route path="/:parent/:child/:slug" element={<DynamicPage />} />

        {/* ✅ Test Page Route */}
        <Route path="/निर्देशिका" element={<Test />} />

        <Route path="/search" element={<Search />} />

        <Route path="/माहिती-अधिकार/माहितीचा-अधिकार-कागदपत्रे" element={<RtiDocuments />} />

        <Route path="/साइटमॅप" element={<Sitemap />} />

      </Routes>

      <Footer />

      <ScrollToTop/>
    </>
  )
}

export default App