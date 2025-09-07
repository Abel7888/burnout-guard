import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  Cpu,
  Globe,
  Calendar,
  DollarSign,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  Settings
} from "lucide-react";

const Technical = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Technical Architecture & Implementation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Detailed roadmap, technology stack, and ROI analysis for healthcare leaders
            </p>
          </div>
        </div>
      </section>

      {/* MVP Stack Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">MVP Technology Stack</h2>
            <p className="text-xl text-muted-foreground">
              Production-ready architecture built for healthcare compliance and scalability
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Data Infrastructure</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Data Sources</span>
                  <Badge variant="outline">CSV/API Ready</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • Historical admissions & discharge records<br/>
                  • Staff scheduling logs & shift patterns<br/>
                  • Patient acuity scores & department metrics<br/>
                  • External factors (weather, events, holidays)
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">Storage & Processing</span>
                  <Badge className="bg-healthcare-blue text-white">Cloud Native</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • HIPAA-compliant cloud database<br/>
                  • Real-time data pipeline processing<br/>
                  • Automated data validation & cleansing<br/>
                  • Secure API endpoints with encryption
                </div>
              </div>
            </Card>

            <Card className="p-8 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-6">
                <Code2 className="h-8 w-8 text-success mr-3" />
                <h3 className="text-2xl font-bold">Backend Architecture</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">API Framework</span>
                  <Badge variant="outline">FastAPI/Node.js</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • RESTful API with OpenAPI documentation<br/>
                  • JWT authentication & role-based access<br/>
                  • Rate limiting & request validation<br/>
                  • Comprehensive error handling & logging
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">Machine Learning</span>
                  <Badge className="bg-success text-white">scikit-learn</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • Time series forecasting models<br/>
                  • Ensemble methods for accuracy<br/>
                  • Automated model retraining pipeline<br/>
                  • A/B testing framework for improvements
                </div>
              </div>
            </Card>

            <Card className="p-8 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-healthcare-blue mr-3" />
                <h3 className="text-2xl font-bold">Frontend Platform</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">User Interface</span>
                  <Badge variant="outline">React + TypeScript</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • Responsive design for mobile & desktop<br/>
                  • Interactive calendar & scheduling UI<br/>
                  • Real-time notifications & alerts<br/>
                  • Accessibility compliance (WCAG 2.1)
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">Data Visualization</span>
                  <Badge className="bg-healthcare-blue text-white">Advanced Charts</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • Interactive heatmaps & demand forecasts<br/>
                  • Drill-down analytics & filtering<br/>
                  • Custom dashboard configuration<br/>
                  • Export capabilities for reports
                </div>
              </div>
            </Card>

            <Card className="p-8 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-warning mr-3" />
                <h3 className="text-2xl font-bold">Security & Compliance</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Healthcare Compliance</span>
                  <Badge variant="outline">HIPAA Ready</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • End-to-end encryption (AES-256)<br/>
                  • Audit logging for all user actions<br/>
                  • Role-based access controls<br/>
                  • PHI de-identification protocols
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">Infrastructure Security</span>
                  <Badge className="bg-warning text-white">Enterprise Grade</Badge>
                </div>
                <div className="text-sm text-muted-foreground pl-4">
                  • Multi-factor authentication<br/>
                  • VPN & firewall protection<br/>
                  • Regular penetration testing<br/>
                  • SOC 2 Type II compliance pathway
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">25-Week Development Roadmap</h2>
            <p className="text-xl text-muted-foreground">
              Structured approach from research to full deployment
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Research & Discovery Phase</h3>
                    <Badge variant="outline">Weeks 1-4</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Healthcare stakeholder interviews, data assessment, and compliance requirements analysis.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Staff & administrator interviews
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Current system evaluation
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Data quality assessment
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-healthcare-blue flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Design & Architecture Phase</h3>
                    <Badge variant="outline">Weeks 5-8</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    UI/UX design, system architecture planning, and technical specification documentation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      User experience design
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      System architecture planning
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Database schema design
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Core Development Phase</h3>
                    <Badge variant="outline">Weeks 9-18</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Backend API development, machine learning model training, and frontend interface creation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      API & database development
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      ML model training & testing
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Frontend interface build
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 4 */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-warning flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Testing & Pilot Phase</h3>
                    <Badge variant="outline">Weeks 19-25</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Comprehensive testing, security audits, and pilot deployment with selected healthcare partners.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Security & compliance testing
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Pilot deployment & training
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Performance optimization
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost & ROI Analysis */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment & ROI Analysis</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive cost breakdown and projected return on investment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Development Investment</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Research & Design</span>
                  <span className="font-medium">$75,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Backend Development</span>
                  <span className="font-medium">$150,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Frontend Development</span>
                  <span className="font-medium">$100,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>ML Model Development</span>
                  <span className="font-medium">$125,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Testing & Security</span>
                  <span className="font-medium">$85,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Compliance & Documentation</span>
                  <span className="font-medium">$65,000</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-lg font-bold">
                  <span>Total Development Cost</span>
                  <span className="text-primary">$600,000</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-8 w-8 text-success mr-3" />
                <h3 className="text-2xl font-bold">Projected Savings (Annual)</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Reduced Overtime (35%)</span>
                  <span className="font-medium text-success">$850,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Decreased Turnover (50%)</span>
                  <span className="font-medium text-success">$1,200,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Improved Efficiency</span>
                  <span className="font-medium text-success">$400,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span>Reduced Agency Staff</span>
                  <span className="font-medium text-success">$600,000</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-lg font-bold">
                  <span>Total Annual Savings</span>
                  <span className="text-success">$3,050,000</span>
                </div>
                <div className="mt-6 p-4 bg-success/5 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">ROI Break-even</p>
                  <p className="text-2xl font-bold text-success">2.4 months</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Functionality */}
      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Platform Functionality</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive feature set for modern healthcare workforce management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Predictive Analytics</h3>
              <p className="text-sm text-muted-foreground">
                7-14 day demand forecasting with 85%+ accuracy using machine learning
              </p>
            </Card>

            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <Calendar className="h-12 w-12 text-healthcare-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Schedule Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Automated scheduling with constraint satisfaction and staff preferences
              </p>
            </Card>

            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <Shield className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Burnout Prevention</h3>
              <p className="text-sm text-muted-foreground">
                Early warning system for staff fatigue and workload management
              </p>
            </Card>

            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <Settings className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Scenario Planning</h3>
              <p className="text-sm text-muted-foreground">
                What-if analysis for different staffing strategies and outcomes
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 healthcare-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with Us to Build the Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join leading healthcare systems in revolutionizing workforce management. 
            Let's collaborate to create a healthier, more sustainable future for healthcare workers and patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Technical Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/dashboard">See Live Demo</Link>
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

export default Technical;