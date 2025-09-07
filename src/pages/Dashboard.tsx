import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  AlertTriangle,
  TrendingUp,
  Clock,
  Activity,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Interactive Platform Demo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the power of AI-driven healthcare staffing management
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <Card className="p-8 healthcare-shadow-strong animate-scale-in">
            <img 
              src={dashboardMockup} 
              alt="HealthStaff AI Dashboard Interface"
              className="w-full rounded-lg mb-6"
            />
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Full interactive demo - Experience real-time staffing optimization
              </p>
              <Button size="lg" className="text-lg px-8">
                Launch Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools for intelligent workforce management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar Interface */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Smart Scheduling Calendar</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <div>
                    <p className="font-medium">Monday, Dec 9</p>
                    <p className="text-sm text-muted-foreground">High demand predicted</p>
                  </div>
                  <Badge variant="secondary">+3 Staff Needed</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-success/5 rounded-lg">
                  <div>
                    <p className="font-medium">Tuesday, Dec 10</p>
                    <p className="text-sm text-muted-foreground">Normal capacity</p>
                  </div>
                  <Badge className="bg-success text-white">Optimal</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-warning/5 rounded-lg">
                  <div>
                    <p className="font-medium">Wednesday, Dec 11</p>
                    <p className="text-sm text-muted-foreground">Potential overstaffing</p>
                  </div>
                  <Badge variant="outline">-2 Staff Suggested</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Interactive Feature:</strong> Drag and drop staff assignments, view shift conflicts, and get real-time optimization suggestions.
              </p>
            </Card>

            {/* Predictive Heatmap */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-healthcare-blue mr-3" />
                <h3 className="text-2xl font-bold">Demand Prediction Heatmap</h3>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {/* Simulated heatmap */}
                <div className="text-center text-xs font-medium p-2">Mon</div>
                <div className="text-center text-xs font-medium p-2">Tue</div>
                <div className="text-center text-xs font-medium p-2">Wed</div>
                <div className="text-center text-xs font-medium p-2">Thu</div>
                <div className="text-center text-xs font-medium p-2">Fri</div>
                <div className="text-center text-xs font-medium p-2">Sat</div>
                <div className="text-center text-xs font-medium p-2">Sun</div>
                
                <div className="h-8 bg-primary/20 rounded flex items-center justify-center text-xs">85%</div>
                <div className="h-8 bg-success/20 rounded flex items-center justify-center text-xs">65%</div>
                <div className="h-8 bg-success/20 rounded flex items-center justify-center text-xs">70%</div>
                <div className="h-8 bg-warning/20 rounded flex items-center justify-center text-xs">95%</div>
                <div className="h-8 bg-primary/20 rounded flex items-center justify-center text-xs">80%</div>
                <div className="h-8 bg-destructive/20 rounded flex items-center justify-center text-xs">110%</div>
                <div className="h-8 bg-success/20 rounded flex items-center justify-center text-xs">60%</div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>AI Insights:</strong> Hover over any day to see detailed predictions, contributing factors, and recommended staffing adjustments.
              </p>
            </Card>

            {/* Real-time Alerts */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-warning mr-3" />
                <h3 className="text-2xl font-bold">Intelligent Alerts</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-destructive/5 rounded-lg border-l-4 border-destructive">
                  <AlertCircle className="h-5 w-5 text-destructive mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-sm">Critical Staffing Gap</p>
                    <p className="text-xs text-muted-foreground">ICU: 3 nurses short for weekend shift</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-warning/5 rounded-lg border-l-4 border-warning">
                  <Shield className="h-5 w-5 text-warning mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-sm">Burnout Risk Alert</p>
                    <p className="text-xs text-muted-foreground">Sarah Johnson: 60+ hours this week</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-success/5 rounded-lg border-l-4 border-success">
                  <CheckCircle className="h-5 w-5 text-success mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-sm">Optimization Success</p>
                    <p className="text-xs text-muted-foreground">25% reduction in overtime this month</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Smart Notifications:</strong> Customizable alert thresholds with recommended actions for each scenario.
              </p>
            </Card>

            {/* KPI Dashboard */}
            <Card className="p-6 healthcare-shadow animate-fade-in">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-success mr-3" />
                <h3 className="text-2xl font-bold">Performance Metrics</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-2xl font-bold text-primary">32%</p>
                  <p className="text-sm text-muted-foreground">Overtime Reduction</p>
                </div>
                <div className="text-center p-4 bg-success/5 rounded-lg">
                  <p className="text-2xl font-bold text-success">18 min</p>
                  <p className="text-sm text-muted-foreground">Avg Wait Time</p>
                </div>
                <div className="text-center p-4 bg-healthcare-blue/5 rounded-lg">
                  <p className="text-2xl font-bold text-healthcare-blue">8.2/10</p>
                  <p className="text-sm text-muted-foreground">Staff Well-being</p>
                </div>
                <div className="text-center p-4 bg-warning/5 rounded-lg">
                  <p className="text-2xl font-bold text-warning">$1.2M</p>
                  <p className="text-sm text-muted-foreground">Annual Savings</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Real-time Analytics:</strong> Track key performance indicators with detailed breakdowns and trend analysis.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Explore how administrators and staff interact with the platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Scenario Planning</h3>
              <p className="text-muted-foreground mb-4">
                Model different staffing scenarios and see predicted outcomes before implementation.
              </p>
              <Button variant="outline" size="sm">Try Scenario Builder</Button>
            </Card>

            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <Activity className="h-12 w-12 text-healthcare-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Shift Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Automatically generate optimized schedules based on predictions and staff preferences.
              </p>
              <Button variant="outline" size="sm">View Auto-Schedule</Button>
            </Card>

            <Card className="p-6 text-center healthcare-shadow animate-fade-in">
              <Clock className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Real-time Adjustments</h3>
              <p className="text-muted-foreground mb-4">
                Make live schedule changes with instant impact analysis and conflict detection.
              </p>
              <Button variant="outline" size="sm">Test Live Updates</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 healthcare-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Pilot the Platform?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your free 30-day pilot program and experience the future of healthcare staffing management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/technical">View Technical Specs</Link>
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

export default Dashboard;