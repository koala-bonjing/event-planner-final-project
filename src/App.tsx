import { Button } from "@/components/ui/button";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import VenueRoomPage from "../src/pages/VenuePage";
import AddonsPage from "../src/pages/AddonsPage";
import MealsPage from "../src/pages/MealsPage";
import { Navbar1 } from "./components/ui/navigation-bar";

function AppContent() {
  const location = useLocation();
  const showNarbar = ["/venue", "/meals", "/addons"].includes(
    location.pathname
  );

  return (
    <>
      {showNarbar && <Navbar1 />}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/venue" element={<VenueRoomPage />}></Route>
        <Route path="/addons" element={<AddonsPage />}></Route>
        <Route path="/meals" element={<MealsPage />}></Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
