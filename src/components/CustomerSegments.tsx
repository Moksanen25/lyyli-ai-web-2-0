
import React from 'react';
import { 
  Building, 
  Briefcase, 
  HandHelping, 
  School, 
  PenTool, 
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CustomerSegments: React.FC = () => {
  const segments = [
    {
      id: "tech-smes",
      name: "Tech-Savvy SMEs",
      icon: <Building className="h-10 w-10 text-primary" />,
      description: "For tech companies with 30-300 employees managing distributed teams and heavy communication needs.",
      painPoints: [
        "Communication silos between departments",
        "Inconsistent brand messaging across channels",
        "Limited time and resources for quality content"
      ],
      solutions: [
        "Automated content generation in your brand voice",
        "Seamless integration with Teams and Slack",
        "Consistent messaging across all communication channels"
      ],
      quote: {
        text: "We've cut our internal announcement time by 70% while maintaining our unique brand voice.",
        author: "CTO, Software Development Company"
      }
    },
    {
      id: "consulting",
      name: "Consulting Firms",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      description: "For advisory businesses translating expertise into clear, professional client communications.",
      painPoints: [
        "Manual content creation bottlenecks",
        "Difficulty translating expertise into digestible content",
        "Maintaining consistent professional tone across teams"
      ],
      solutions: [
        "Transform complex expertise into clear client communications",
        "Maintain consistent professional tone across all teams",
        "Automate recurring reports and client updates"
      ],
      quote: {
        text: "Our client communications are now consistent regardless of which consultant is managing the relationship.",
        author: "Partner, Management Consulting Firm"
      }
    },
    {
      id: "nonprofits",
      name: "Non-Profits & Associations",
      icon: <HandHelping className="h-10 w-10 text-primary" />,
      description: "For mission-driven organizations stretching limited resources to maximize impact.",
      painPoints: [
        "Struggles with continuous content production",
        "Need for multilingual communication",
        "Limited staff time for communication tasks"
      ],
      solutions: [
        "Create impactful stories with limited resources",
        "Maintain stakeholder engagement across channels",
        "Support multilingual communication needs"
      ],
      quote: {
        text: "We can now communicate consistently with our stakeholders in three languages using the same small team.",
        author: "Communications Director, International NGO"
      }
    },
    {
      id: "education",
      name: "Educational Institutions",
      icon: <School className="h-10 w-10 text-primary" />,
      description: "For universities and research organizations bridging academic and public communication.",
      painPoints: [
        "Inefficient internal communication processes",
        "Need to simplify complex topics for public audiences",
        "Fragmented messaging across departments"
      ],
      solutions: [
        "Simplify complex topics for public consumption",
        "Unify messaging across multiple departments",
        "Automate announcements and event communications"
      ],
      quote: {
        text: "Our research findings now reach the public in clear, engaging language while maintaining academic integrity.",
        author: "Dean of Communications, Research University"
      }
    },
    {
      id: "creative",
      name: "Creative Firms",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      description: "For design and media companies where brand voice and visual consistency are paramount.",
      painPoints: [
        "Time-intensive content planning processes",
        "Aligning brand identity across remote teams",
        "Pressure to create inspiring content consistently"
      ],
      solutions: [
        "Maintain creative brand voice across all channels",
        "Streamline collaborative content workflows",
        "Generate design-friendly content quickly"
      ],
      quote: {
        text: "Our designers and writers finally have a tool that speaks our creative language and saves hours of iteration.",
        author: "Creative Director, Design Agency"
      }
    },
    {
      id: "sports",
      name: "Sports Organizations",
      icon: <Users className="h-10 w-10 text-primary" />,
      description: "For teams and federations balancing community engagement with professional communications.",
      painPoints: [
        "Fragmented communication tools and processes",
        "Need for automated multi-channel publishing",
        "Limited professional communication resources"
      ],
      solutions: [
        "Create consistent fan and sponsor communications",
        "Automate event updates across multiple channels",
        "Maintain professional voice with limited staff"
      ],
      quote: {
        text: "We've transformed how we communicate with fans and sponsors with half the effort and twice the engagement.",
        author: "Marketing Manager, Professional Sports Club"
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold py-1 px-3 rounded-full mb-3">
            Tailored Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Communication Solutions for Every Industry</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform transforms how organizations handle internal and external communication,
            automating content production while maintaining your unique voice and brand consistency.
          </p>
        </div>

        {/* Tabs for Desktop */}
        <div className="hidden md:block">
          <Tabs defaultValue="tech-smes" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background">
                {segments.map(segment => (
                  <TabsTrigger key={segment.id} value={segment.id} className="px-4 py-2">
                    <div className="flex flex-col items-center">
                      <span className="hidden lg:flex">{segment.icon}</span>
                      <span className="text-xs lg:text-sm mt-1">{segment.name}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {segments.map(segment => (
              <TabsContent key={segment.id} value={segment.id} className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      {segment.icon}
                      <h3 className="text-2xl font-bold ml-3">{segment.name}</h3>
                    </div>
                    <p className="text-lg mb-6 text-muted-foreground">
                      {segment.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Common Challenges:</h4>
                      <ul className="space-y-2">
                        {segment.painPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-primary">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {segment.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary/10 text-primary p-1 rounded-full mr-2 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                            </span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90">Book Industry-Specific Demo</Button>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <Card className="border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Success Story</CardTitle>
                        <CardDescription>How Lyyli transforms communication workflows</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="border-l-4 border-primary/30 pl-4 italic">
                          "{segment.quote.text}"
                        </blockquote>
                        <p className="text-right mt-4 text-sm font-medium">— {segment.quote.author}</p>
                        
                        <div className="mt-8 pt-4 border-t">
                          <h4 className="font-medium mb-3">Key Platform Features:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                              </div>
                              <span className="text-sm">Voice Consistent AI</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-slack text-primary"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 22 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 2 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>
                              </div>
                              <span className="text-sm">Slack Integration</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M7 8h10"/><path d="M7 12h4"/></svg>
                              </div>
                              <span className="text-sm">Content Templates</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-teams text-primary"><path d="M17 20H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4Z"/><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="m8 15 8-5"/><path d="m8 9 8 5"/></svg>
                              </div>
                              <span className="text-sm">Teams Integration</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Card Layout for Mobile */}
        <div className="md:hidden space-y-8">
          {segments.map((segment, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary/5 flex flex-row items-center gap-3">
                {segment.icon}
                <div>
                  <CardTitle>{segment.name}</CardTitle>
                  <CardDescription className="mt-1">{segment.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-primary mb-2">Common Challenges:</h4>
                  <ul className="space-y-1 text-sm">
                    {segment.painPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-1">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-semibold text-sm text-primary mb-2">Our Solutions:</h4>
                  <ul className="space-y-1 text-sm">
                    {segment.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-1">•</span> {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="sm" className="w-full mt-2">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a growing tech company, established consultancy, or educational institution, 
            our AI communication platform adapts to your unique needs and voice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">Schedule Industry Consultation</Button>
            <Button variant="outline" className="border-primary text-primary">
              View Feature Comparison
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
