import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Activity, 
  Users, 
  Clock, 
  TrendingUp, 
  Shield, 
  Heart,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  BarChart3
} from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 hero-gradient">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI-Powered Staffing for a{" "}
                <span className="text-primary-lighter">Healthier</span> Workforce
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Predict patient volume, prevent burnout, and optimize staffing schedules 
                with our intelligent healthcare workforce management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/dashboard">
                    See How It Works
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
                  <Link to="/technical">View Technical Details</Link>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="Healthcare AI Staffing Platform"
                className="w-full rounded-2xl healthcare-shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Healthcare Staffing Crisis</h2>
            <p className="text-xl text-muted-foreground">Current challenges vs. growing future demands</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 healthcare-shadow animate-slide-in">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-warning mr-3" />
                <h3 className="text-2xl font-bold">Today's Reality</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  Healthcare worker burnout at 76%
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  $9B annual cost from nursing turnover
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  15% increase in mandatory overtime
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  Patient wait times averaging 3+ hours
                </li>
              </ul>
            </Card>

            <Card className="p-8 healthcare-shadow animate-slide-in">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Future Challenges</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Aging population growing 3x faster
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  1.2M additional nurses needed by 2030
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Unpredictable demand spikes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Complex scheduling requirements
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Our AI Works</h2>
            <p className="text-xl text-muted-foreground">Intelligent prediction meets practical scheduling</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predict Patient Volume</h3>
              <p className="text-muted-foreground">
                Analyze historical data, seasonal patterns, and local events to forecast ED visits and admissions 7-14 days ahead.
              </p>
            </Card>

            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-healthcare-blue/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-healthcare-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Optimize Staff Levels</h3>
              <p className="text-muted-foreground">
                Match predicted demand with optimal staffing ratios, considering skill levels, certifications, and availability.
              </p>
            </Card>

            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prevent Burnout</h3>
              <p className="text-muted-foreground">
                Monitor workload patterns and alert managers to potential burnout risks before they impact patient care.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Benefits for Every Stakeholder</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 healthcare-shadow animate-scale-in">
              <div className="flex items-center mb-6">
                <Activity className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">For Hospitals</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>35% reduction</strong> in overtime costs
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>50% improvement</strong> in staff retention
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>$2M+ annual savings</strong> per facility
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 healthcare-shadow animate-scale-in">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-healthcare-blue mr-3" />
                <h3 className="text-2xl font-bold">For Patients</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>60% shorter</strong> wait times
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>Higher quality</strong> care delivery
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>Better outcomes</strong> from rested staff
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 healthcare-shadow animate-scale-in">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-warning mr-3" />
                <h3 className="text-2xl font-bold">For Leadership</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>Predictive insights</strong> for workforce planning
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>Data-driven</strong> decision making
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <strong>Reduced turnover</strong> and recruitment costs
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 healthcare-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Workforce Management?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading healthcare systems already using AI to create healthier, more sustainable staffing practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/dashboard">
                See Platform Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/technical">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-secondary">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 HealthStaff AI. Transforming healthcare workforce management through intelligent technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;