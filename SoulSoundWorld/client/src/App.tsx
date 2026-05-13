import { Toaster } import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import FrequencyStacking from "./pages/FrequencyStacking";
import TheDepth from "./pages/TheDepth";
import SignalStudio from "./pages/SignalStudio";

function Router() {
  return (
    <Switch>
      <Route path={"/signal-studio"} component={SignalStudio} />
      <Route path={"/frequency-stacking"} component={FrequencyStacking} />
      <Route path={"/the-depth"} component={TheDepth} />
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
