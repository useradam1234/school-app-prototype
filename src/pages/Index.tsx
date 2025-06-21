import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { BookOpen, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Excellence in Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Nurturing young minds for a brighter future. Join our community of learners and leaders.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={1200} />
                </div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <div className="text-muted-foreground">College Acceptance</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-muted-foreground">Expert Faculty</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Excellence Academy?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide a comprehensive education that prepares students for success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">Academic Excellence</h3>
                  <p className="text-muted-foreground">
                    A rigorous curriculum designed to challenge and inspire students.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border">
                <CardContent className="p-8 text-center">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">Small Class Sizes</h3>
                  <p className="text-muted-foreground">
                    Personalized attention to ensure every student gets the support they need.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border">
                <CardContent className="p-8 text-center">
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">Award-Winning Programs</h3>
                  <p className="text-muted-foreground">
                    Nationally recognized programs in STEM, arts, and athletics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Take the first step towards an exceptional education.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/admissions">Start Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Schedule Tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
