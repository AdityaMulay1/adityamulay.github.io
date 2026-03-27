
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const AirGuardian = lazy(() => import("./pages/AirGuardian"));
const AnekaLab = lazy(() => import("./pages/AnekaLab"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Toaster />
    <Suspense
      fallback={
        <div className="route-fallback">
          <div className="route-fallback__inner">
            <p className="route-fallback__eyebrow">Loading signal</p>
            <p className="route-fallback__title">Aditya Mulay</p>
          </div>
        </div>
      }
    >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/air-guardian" element={<AirGuardian />} />
          <Route path="/aneka-lab" element={<AnekaLab />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
