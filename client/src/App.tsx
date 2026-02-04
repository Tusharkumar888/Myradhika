import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home.tsx";
import Properties from "@/pages/properties.tsx";
import PropertyDetails from "@/pages/property-details.tsx";
import Services from "@/pages/services.tsx";
import WhyUs from "@/pages/why-us.tsx";
import About from "@/pages/about.tsx";
import Contact from "@/pages/contact.tsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/properties" component={Properties} />
      <Route path="/properties/:id" component={PropertyDetails} />
      <Route path="/services" component={Services} />
      <Route path="/why-us" component={WhyUs} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
