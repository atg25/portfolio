import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  cardDescription?: string;
  border?: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  figma?: string;
  variant?: string;
  whatILearned?: string;
  children?: ReactNode;
}

export function ProjectCard({
  title,
  description,
  cardDescription,
  border = "",
  features,
  technologies,
  github,
  demo,
  figma,
  variant,
  whatILearned,
  children,
}: ProjectCardProps) {
  return (
    <Card className={variant ? variant : border}>
      <CardHeader>
        <CardTitle className="font-heading text-gradient-brand">
          {title}
        </CardTitle>
        {cardDescription && (
          <CardDescription>{cardDescription}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-muted-foreground">{description}</p>
        {whatILearned && (
          <div className="italic text-muted-foreground text-sm pb-2">
            {whatILearned}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Technologies Used:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {technologies.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 pt-4">
            {github && (
              <Button variant="outline" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            )}
            {figma && (
              <Button variant="outline" asChild>
                <a href={figma} target="_blank" rel="noopener noreferrer">
                  View on Figma
                </a>
              </Button>
            )}
            {demo && (
              <Button variant="default" asChild>
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            )}
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
