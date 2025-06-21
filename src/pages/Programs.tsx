import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, School, Palette, Dumbbell, Users } from "lucide-react";

const Programs = () => {
  const academicPrograms = [
    {
      title: "Advanced Placement (AP)",
      level: "Grades 9-12",
      description: "College-level courses in 15+ subjects, allowing students to earn college credit.",
      icon: BookOpen,
    },
    {
      title: "STEM Excellence",
      level: "Grades 6-12",
      description: "Integrated Science, Technology, Engineering, and Mathematics curriculum.",
      icon: School,
    },
    {
      title: "International Baccalaureate (IB)",
      level: "Grades 11-12",
      description: "A globally recognized diploma program for comprehensive university preparation.",
      icon: Calendar,
    },
  ];

  const extracurriculars = [
    { category: "Arts & Culture", icon: Palette },
    { category: "STEM & Technology", icon: School },
    { category: "Sports & Athletics", icon: Dumbbell },
    { category: "Service & Leadership", icon: Users },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Academic Programs</h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              Discover our comprehensive range of programs designed to challenge and inspire.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Academic Programs</h2>
              <p className="text-xl text-muted-foreground">
                Rigorous pathways that prepare students for university success.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {academicPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="h-12 w-12 text-primary" />
                        <Badge variant="secondary">{program.level}</Badge>
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Extracurricular Activities</h2>
              <p className="text-xl text-muted-foreground">
                Beyond academics—opportunities for personal growth and discovery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {extracurriculars.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-8">
                      <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold">{category.category}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="max-w-3xl mx-auto bg-primary/10 border-primary/20">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-primary mb-4">Discover Your Potential</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Explore our programs and find the perfect path for your educational journey.
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Download Curriculum Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
