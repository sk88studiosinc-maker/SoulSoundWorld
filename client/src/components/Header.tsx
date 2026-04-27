import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Music } from "lucide-react";

export default function Header() {
  const [location, navigate] = useLocation();

  const isHome = location === "/";
  const isFrequencyStacking = location === "/frequency-stacking";
  const isTheDepth = location === "/the-depth";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Music className="w-6 h-6 text-accent" />
          <span className="font-bold text-lg text-foreground">SoulSound</span>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Button
            variant={isHome ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate("/")}
            className={isHome ? "bg-gradient-to-r from-purple-600 to-pink-600" : ""}
          >
            Home
          </Button>
          <Button
            variant={isFrequencyStacking ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate("/frequency-stacking")}
            className={isFrequencyStacking ? "bg-gradient-to-r from-purple-600 to-pink-600" : ""}
          >
            Frequency Stacking
          </Button>
          <Button
            variant={isTheDepth ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate("/the-depth")}
            className={isTheDepth ? "bg-gradient-to-r from-purple-600 to-pink-600" : ""}
          >
            The Depth
          </Button>
        </nav>

        {/* CTA */}
        <a
          href="https://open.spotify.com/artist/3uugCAf5GNkNToPtdWGcQl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Listen Now
          </Button>
        </a>
      </div>
    </header>
  );
}
