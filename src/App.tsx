import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ScheduleModal from "./components/ScheduleModal";
import Footer from "./components/Footer";

function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const openScheduleModal = () => setIsScheduleModalOpen(true);
  const closeScheduleModal = () => setIsScheduleModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onScheduleClick={openScheduleModal} />
      <Hero onScheduleClick={openScheduleModal} />
      <Services />
      <About />
      <Footer />
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={closeScheduleModal}
      />
    </div>
  );
}

export default App;
