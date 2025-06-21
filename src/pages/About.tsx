import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Excellence Academy</h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              Discover our rich history, mission, and commitment to educational excellence.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission & Vision</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To provide an exceptional educational experience that empowers students to become critical thinkers, compassionate leaders, and lifelong learners who contribute positively to our global community. Our vision is to be the premier educational institution that sets the standard for academic excellence and innovative learning.
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Excellence:</strong> We strive for the highest standards in everything we do.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Integrity:</strong> We act with honesty and ethical principles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Innovation:</strong> We embrace new ideas and creative solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Community:</strong> We foster a supportive and inclusive environment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our History</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From humble beginnings to educational excellence - the Excellence Academy story.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">1970</div>
                  <h3 className="text-xl font-semibold mb-3">Foundation</h3>
                  <p className="text-muted-foreground">
                    Founded with a vision to provide world-class education.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">1995</div>
                  <h3 className="text-xl font-semibold mb-3">Expansion</h3>
                  <p className="text-muted-foreground">
                    Major campus expansion to serve our growing student body.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">2020</div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Launch of our cutting-edge STEM and digital learning initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground">
                Meet the dedicated professionals who guide our school's mission.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-primary mb-3">Principal</p>
                  <p className="text-muted-foreground text-sm">
                    Ed.D. in Educational Leadership
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Mr. David Chen</h3>
                  <p className="text-primary mb-3">Vice Principal</p>
                  <p className="text-muted-foreground text-sm">
                    M.Ed. in Curriculum & Instruction
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Ms. Lisa Rodriguez</h3>
                  <p className="text-primary mb-3">Academic Director</p>
                  <p className="text-muted-foreground text-sm">
                    Ph.D. in Educational Psychology
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
