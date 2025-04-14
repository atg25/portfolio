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
            Frontend Developer & Web Enthusiast
          </p>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            I create engaging web experiences with modern technology.
            Specializing in responsive design and interactive web applications.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-base bg-gradient-brand hover:opacity-90"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base border-primary-600 text-primary-700 hover:bg-primary-50"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary-500">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-primary-700">
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>React.js & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary-500">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-secondary-700">
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>npm/yarn</li>
                  <li>REST APIs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent-500">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-accent-700">
                  Additional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>UI/UX Design</li>
                  <li>Web Performance</li>
                  <li>SEO Basics</li>
                  <li>Problem Solving</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Projects */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Project Name 1</CardTitle>
                <CardDescription>Web Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A brief description of the project and its key features.
                  Technologies used and problems solved.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Live
                  </Button>
                  <Button variant="outline" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Name 2</CardTitle>
                <CardDescription>Frontend Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A brief description of the project and its key features.
                  Technologies used and problems solved.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Live
                  </Button>
                  <Button variant="outline" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-medium-contrast mb-6">
            I'm a passionate web developer and student at NJIT, focused on
            creating intuitive and performant web applications. With a strong
            foundation in frontend development, I'm constantly learning and
            exploring new technologies to build better digital experiences.
          </p>
          <Button
            size="lg"
            className="text-base bg-gradient-brand hover:opacity-90"
          >
            Download Resume
          </Button>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-8 py-16">
          <h2 className="text-3xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <Button
            size="lg"
            className="text-base bg-gradient-innovation hover:opacity-90"
          >
            Get in Touch
          </Button>
        </section>
      </main>
    </div>
  );
}
