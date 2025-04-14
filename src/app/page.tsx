import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="font-mono tracking-tighter text-gradient-brand text-4xl md:text-5xl lg:text-6xl font-bold">
            Andrew Gardner
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary-700">
            Full Stack Developer
          </p>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Passionate developer focused on creating intuitive web applications
            and solving complex problems. Experienced in full-stack development
            with expertise in modern web technologies.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-base bg-gradient-brand hover:opacity-90"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base border-primary-600 text-primary-700 hover:bg-primary-50"
              asChild
            >
              <a href="mailto:agard1205@gmail.com">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary-500">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-primary-700">
                  Core Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>JavaScript/TypeScript</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary-500">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-secondary-700">
                  Development Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Full Stack Development</li>
                  <li>UI/UX Design</li>
                  <li>Testing & Debugging</li>
                  <li>System Architecture</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent-500">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-accent-700">
                  Professional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Project Management</li>
                  <li>Problem Solving</li>
                  <li>Technical Leadership</li>
                  <li>Client Communication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Projects */}
        <section className="py-12" id="projects">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Highlander Hustle</CardTitle>
                <CardDescription>System Design & UX Research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Led the design and development of a comprehensive information
                  system for athletics management. Conducted user research,
                  designed system architecture, and delivered a scalable
                  solution.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                  <li>User-centered design approach</li>
                  <li>System architecture planning</li>
                  <li>Cross-functional team leadership</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dynamic Contact Platform</CardTitle>
                <CardDescription>Web Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Engineered a modern web platform for professional networking
                  and contact management, featuring responsive design and
                  seamless information delivery.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                  <li>Responsive web design</li>
                  <li>Modern JavaScript implementation</li>
                  <li>Performance optimization</li>
                </ul>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://atg25.github.io/LinksPage/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Professional Experience
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Technical Operations Lead</CardTitle>
                <CardDescription>
                  NJIT Office of Admissions | Oct 2024 - Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Streamlined data processing workflows for improved
                    efficiency in student admissions
                  </li>
                  <li>
                    Coordinated cross-functional teams for successful event
                    execution
                  </li>
                  <li>
                    Implemented process improvements resulting in enhanced user
                    satisfaction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Systems Administrator</CardTitle>
                <CardDescription>
                  American Campus Communities | Oct 2023 - May 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Leveraged CRM systems to optimize communication and data
                    analysis
                  </li>
                  <li>
                    Developed automated solutions for business process
                    optimization
                  </li>
                  <li>
                    Maintained 95% customer satisfaction rate through technical
                    support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section - Moved down */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>NJIT - Ying Wu College of Computing</CardTitle>
              <CardDescription>
                B.S. in Web & Information Systems | Minor in Computer Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>GPA:</strong> 3.64 | Dean{"'"}s List
                </p>
                <div>
                  <p className="font-medium mb-2">Key Areas of Study:</p>
                  <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li>System Architecture</li>
                    <li>User Experience Design</li>
                    <li>Software Development</li>
                    <li>Database Management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Me Section */}
        <section className="py-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-medium-contrast mb-6">
            I{"'"}m a full-stack developer passionate about creating innovative
            digital solutions. With a strong foundation in web technologies and
            system design, I focus on delivering high-quality, user-centered
            applications. I{"'"}m actively involved in the tech community
            through the Financial Technology Club and various development
            projects.
          </p>
          <Button
            size="lg"
            className="text-base bg-gradient-brand hover:opacity-90"
            asChild
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-8 py-16">
          <h2 className="text-3xl font-bold">Let{"'"}s Connect</h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Whether you{"'"}re interested in discussing potential opportunities
            or learning more about my projects, feel free to reach out.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="text-base bg-gradient-innovation hover:opacity-90"
              asChild
            >
              <a href="mailto:agard1205@gmail.com">Email Me</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a
                href="https://linkedin.com/in/andrew-gardner2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a
                href="https://github.com/atg25"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
