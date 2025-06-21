import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, School } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application form with all required information.",
      deadline: "Rolling"
    },
    {
      step: 2,
      title: "Records & Interview",
      description: "Provide academic records and attend a brief interview with our team.",
      deadline: "Scheduled"
    },
    {
      step: 3,
      title: "Decision",
      description: "Receive admission decision and complete enrollment process.",
      deadline: "2-3 Weeks"
    },
    {
      step: 4,
      title: "Enrollment",
      description: "Complete the final enrollment steps to join our community.",
      deadline: "By August 1"
    }
  ];

  const requirements = {
    elementary: ["Application Form", "Birth Certificate", "Immunization Records"],
    middle: ["Application Form", "Transcripts (2 years)", "Teacher Recommendations"],
    high: ["Application Form", "Transcripts", "Personal Statement", "Test Scores"]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Admissions</h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              Join our community of learners! We welcome students who are eager to learn and grow.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Application Process</h2>
              <p className="text-xl text-muted-foreground">
                A streamlined process designed to get to know you better.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((step) => (
                <Card key={step.step} className="relative hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <Badge variant="secondary">{step.deadline}</Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Admission Requirements</h2>
              <p className="text-xl text-muted-foreground">
                Requirements vary by grade level for age-appropriate assessment.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-primary mr-3" />
                    <CardTitle>Elementary (K-5)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.elementary.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-8 w-8 text-primary mr-3" />
                    <CardTitle>Middle School (6-8)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.middle.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <School className="h-8 w-8 text-primary mr-3" />
                    <CardTitle>High School (9-12)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.high.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="max-w-3xl mx-auto bg-primary/10 border-primary/20">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-primary mb-4">Ready to Apply?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Take the first step towards an exceptional education. Our admissions team is ready to guide you.
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start Your Application
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

export default Admissions;
