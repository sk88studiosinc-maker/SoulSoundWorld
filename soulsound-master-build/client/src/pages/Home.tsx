import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, BookOpen, Zap, TrendingUp, Dice6, Archive, User, Globe, Lock, Heart } from "lucide-react";
import content from "../content.json";

type ContentType = typeof content;
type SectionKey = keyof ContentType['sections'];

export default function Home() {
  const [activeTab, setActiveTab] = useState("open-build");

  const tabSections = [
    { id: "open-build", label: "Open Build", icon: <Zap className="w-4 h-4" /> },
    { id: "music", label: "Music", icon: <Music className="w-4 h-4" /> },
    { id: "stories", label: "Stories", icon: <BookOpen className="w-4 h-4" /> },
    { id: "expression", label: "Expression Engine", icon: <Zap className="w-4 h-4" /> },
    { id: "accelerator", label: "Revenue Accelerator", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "frequency", label: "Frequency Stacking", icon: <Dice6 className="w-4 h-4" /> },
    { id: "signals", label: "Signal Records", icon: <Archive className="w-4 h-4" /> },
    { id: "depth", label: "The Depth", icon: <User className="w-4 h-4" /> },
    { id: "social", label: "Social World", icon: <Globe className="w-4 h-4" /> },
    { id: "vault", label: "Vault", icon: <Lock className="w-4 h-4" /> },
    { id: "tips", label: "Support", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${content.images.hero_banner}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            {/* Brand */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                SoulSound World
              </h1>
              <p className="text-xl text-muted-foreground mb-2">{content.hero.subtitle}</p>
              <p className="text-lg text-muted max-w-2xl">{content.hero.tagline}</p>
            </div>

            {/* Mission Statement */}
            <div className="mb-8 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <p className="text-base text-foreground leading-relaxed">{content.hero.mission}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
                  {content.hero.badges.map((badge: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-sm font-medium border border-border bg-card/50 text-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {content.hero.cta_primary}
              </Button>
              <Button size="lg" variant="outline">
                {content.hero.cta_secondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 w-full mb-8 bg-card border border-border p-1 rounded-lg">
            {tabSections.map((tab: any) => (
              <TabsTrigger key={tab.id} value={tab.id} className="text-xs md:text-sm">
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.icon}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Open Build */}
          <TabsContent value="open-build" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.open_build.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.open_build.description}</p>
            </div>
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>Live Build Log</CardTitle>
                <CardDescription>Latest updates and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Build timeline coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Music Hub */}
          <TabsContent value="music" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.music_hub.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.music_hub.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.sections.music_hub.platforms.map((platform: any, idx: number) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="border-border bg-card/50 hover:bg-card/80 transition-colors h-full cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Music className="w-5 h-5 text-accent" />
                        {platform.name}
                      </CardTitle>
                      <CardDescription>{platform.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        Open →
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>

          {/* Stories */}
          <TabsContent value="stories" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.story_world.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.story_world.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.sections.story_world.stories.map((story: any, idx: number) => (
                <a
                  key={idx}
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="border-border bg-card/50 hover:bg-card/80 transition-colors h-full cursor-pointer">
                    <CardHeader>
                      <CardTitle>{story.title}</CardTitle>
                      <CardDescription>
                        {story.platform} • {story.status}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{story.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Read on {story.platform} →
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>

          {/* Expression Engine */}
          <TabsContent value="expression" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.expression_engine.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.expression_engine.description}</p>
            </div>
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>AI Caption Generator</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">Features:</p>
                  <ul className="space-y-2">
                    {content.sections.expression_engine.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Revenue Accelerator */}
          <TabsContent value="accelerator" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.revenue_accelerator.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.revenue_accelerator.description}</p>
            </div>
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>Growth Dashboard</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">Track:</p>
                  <ul className="space-y-2">
                    {content.sections.revenue_accelerator.metrics.map((metric: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Frequency Stacking */}
          <TabsContent value="frequency" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.frequency_stacking.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.frequency_stacking.description}</p>
            </div>
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.sections.frequency_stacking.core_concepts.map((concept: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-lg border border-border bg-background/50">
                      <div className="font-bold text-accent mb-1">{concept.name}</div>
                      <div className="text-sm text-muted-foreground">{concept.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Signal Records */}
          <TabsContent value="signals" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.signal_records.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.signal_records.description}</p>
            </div>
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>Build Timeline</CardTitle>
                <CardDescription>Coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Timeline archive coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* The Depth */}
          <TabsContent value="depth" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.the_depth.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.the_depth.description}</p>
            </div>
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>Signal Record</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {content.sections.the_depth.sections.map((section: string, idx: number) => (
                    <div key={idx} className="pb-4 border-b border-border last:border-0">
                      <h3 className="font-semibold text-foreground">{section}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social World */}
          <TabsContent value="social" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.social_world.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.social_world.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.sections.social_world.platforms.map((platform: any, idx: number) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="border-border bg-card/50 hover:bg-card/80 transition-colors h-full cursor-pointer">
                    <CardHeader>
                      <CardTitle>{platform.name}</CardTitle>
                      <CardDescription>Follow on {platform.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        Open →
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>

          {/* Vault */}
          <TabsContent value="vault" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.vault.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.vault.description}</p>
            </div>
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>Artifacts & Canon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {content.sections.vault.sections.map((section: string, idx: number) => (
                    <div key={idx} className="pb-4 border-b border-border last:border-0">
                      <h3 className="font-semibold text-foreground">{section}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support & Tips */}
          <TabsContent value="tips" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{content.sections.support_tips.title}</h2>
              <p className="text-muted-foreground mb-6">{content.sections.support_tips.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.sections.support_tips.methods.map((method: any, idx: number) => (
                <Card key={idx} className="border-border bg-card/50">
                  <CardHeader>
                    <CardTitle>{method.name}</CardTitle>
                    <CardDescription>{method.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {method.address ? (
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground break-all font-mono">{method.address}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Copy Address
                        </Button>
                      </div>
                    ) : (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={method.url} target="_blank" rel="noopener noreferrer">
                          Open →
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>SoulSound World • Open Build Hub • {new Date().getFullYear()}</p>
          <p className="mt-2">Built by Samzin Kreave / SK88 Studios Inc</p>
        </div>
      </footer>
    </div>
  );
}
