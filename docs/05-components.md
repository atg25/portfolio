# Component System: The Creator Archetype (Genuine & Approachable)

## Psychological Foundation

Our component system is designed to be inventive, expressive, and visually dynamic. Each component is crafted to make digital experiences feel creative, inspiring, and accessible to everyone, regardless of background or technical expertise.

## shadcn/ui Integration

This project uses [shadcn/ui](https://ui.shadcn.com/) as its component library foundation. shadcn/ui provides a collection of beautifully designed, accessible components built with Radix UI and Tailwind CSS.

### Key Benefits of shadcn/ui

- Accessibility-first design
- Consistent, friendly user experience
- Easy to customize for a welcoming look and feel
- Reliable and well-documented

### Adding New shadcn/ui Components

- Choose components that solve real, everyday user needs
- Prioritize clarity, simplicity, and ease of use
- Ensure all new components meet accessibility standards

## Creator Component Principles

- Components should be creative and expressive, but always easy to use.
- Use animation and color to guide, not to show off.
- Show real examples and honest feedback.
- Make every component accessible and friendly.

## Example Enhancements

- Animated buttons, cards, and navigation
- Portfolio/gallery with creative filtering or presentation
- "Behind the Scenes" or "Process" components
- Use of SVGs, hand-drawn icons, or custom illustrations

## Usage Guidelines

- Prioritize clarity and comfort in every component.
- Use creative details to invite interaction, not to distract.
- Document how components help users, not just how they look.

### Base Components (shadcn/ui)

#### Button

- Located at `src/components/ui/button.tsx`.
- Supports variants: default, destructive, outline, ghost, link.
- Sizes: default, sm, lg, icon.
- Uses `cn` utility for className merging.
- Example:

```tsx
<Button variant="primary" size="default" className="group">
  <span className="relative transition-transform duration-200 group-hover:translate-x-1">
    Take Action
  </span>
</Button>
```

#### Card

- Located at `src/components/ui/card.tsx`.
- Composition: CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
- Example:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
    <CardDescription>Short description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Project details here</p>
  </CardContent>
  <CardFooter>
    <Button>Learn More</Button>
  </CardFooter>
</Card>
```

#### Dropdown Menu Component

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="sm">
      <span>Options</span>
      <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Menu Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-500">
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**Properties:**

- Hierarchical organization reduces cognitive load
- Progressive disclosure minimizes decision fatigue
- Spatial organization creates mental mapping
- Visual separation enhances decision clarity

#### Input Fields

```tsx
<div className="space-y-2">
  <Label
    htmlFor="email"
    className="text-sm font-medium text-gray-700 transition-colors"
  >
    Email Address
  </Label>
  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
    className="transition-shadow duration-200 focus:shadow-md"
  />
  <p className="text-sm text-gray-500">We respect your privacy</p>
</div>
```

**Properties:**

- Clear placeholder text and labels
- Error and success states are easy to understand
- Sufficient spacing for comfortable interaction

#### Sheet (Drawer)

- Located at `src/components/ui/sheet.tsx`.
- Used for mobile navigation in `main-nav.tsx`.
- Built with shadcn/ui and Radix Dialog for accessibility and focus management.
- Example:

```tsx
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" aria-label="Open menu">
      <MenuIcon />
    </Button>
  </SheetTrigger>
  <SheetContent side="right">
    <nav>{/* Navigation links */}</nav>
  </SheetContent>
</Sheet>;
```

### Complex Components

#### Dialogs

```tsx
<Dialog>
  <DialogTrigger className="psychological-trigger">Open Dialog</DialogTrigger>
  <DialogContent className="cognitive-focus-container">
    <DialogHeader>
      <DialogTitle>Psychologically Optimized Title</DialogTitle>
      <DialogDescription>
        Content structured for cognitive processing
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">Main content with optimal spacing</div>
    <DialogFooter className="action-clarity-zone">
      <Button type="submit">Confirm Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Properties:**

- Provide clear, supportive messaging
- Easy to dismiss or confirm actions
- Focus management for accessibility

#### Navigation Components

##### Main Navigation Example

The project includes a responsive navigation component (`MainNav`) that uses the dropdown menu for mobile devices:

```tsx
<nav className="flex items-center justify-between w-full py-4">
  {/* Desktop navigation */}
  <div className="hidden md:flex items-center gap-6">
    {routes.map((route) => (
      <Link
        key={route.href}
        href={route.href}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        {route.label}
      </Link>
    ))}
  </div>

  {/* Mobile navigation with dropdown */}
  <div className="md:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Open menu" className="p-2">
          <Menu className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {routes.map((route) => (
          <DropdownMenuItem key={route.href} asChild>
            <Link href={route.href}>{route.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</nav>
```

**Properties:**

- Logical grouping and clear hierarchy
- Consistent placement for easy recognition
- Responsive layouts for all devices

##### Mobile Navigation (Sheet/Drawer)

The mobile navigation uses a custom Sheet (Drawer) component built with shadcn/ui and Radix Dialog. This provides a full-screen, touch-friendly, and accessible menu for mobile users. The Sheet component is located at `src/components/ui/sheet.tsx` and is used in `src/components/main-nav.tsx`.

**Usage Example:**

```tsx
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" aria-label="Open menu">
      <MenuIcon />
    </Button>
  </SheetTrigger>
  <SheetContent side="right">
    <nav>{/* Navigation links */}</nav>
  </SheetContent>
</Sheet>;
```

- All navigation links are large, easy to tap, and accessible.
- The Sheet closes automatically when a link is tapped or the close button is pressed.
- The desktop navigation remains unchanged and uses a horizontal button group.

### Utility Functions

- Only `cn` from `src/lib/utils.ts` is present and used for className merging in all components.

##### Tabs

```tsx
<Tabs defaultValue="account" className="cognitive-organization">
  <TabsList className="visual-hierarchy">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="content-clarity">
    Account settings content
  </TabsContent>
  <TabsContent value="password" className="content-clarity">
    Password settings content
  </TabsContent>
</Tabs>
```

**Properties:**

- Clear mental model mapping
- Reduced cognitive overhead
- Progressive information disclosure
- Context maintenance

### Form Components

- Simple, step-by-step guidance
- Clear validation and feedback
- Support for keyboard and screen reader users

#### Select Component

```tsx
<Select>
  <SelectTrigger className="cognitive-trigger">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent className="choice-architecture">
    <SelectGroup>
      <SelectLabel>Choices</SelectLabel>
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

**Properties:**

- Option grouping for cognitive processing
- Clear visual hierarchy
- Optimal number of choices (5-7)
- Progressive disclosure patterns

### Feedback Components

```tsx
<Toast>
  <ToastTitle className="cognitive-alert">Action Completed</ToastTitle>
  <ToastDescription className="processing-clarity">
    Your changes have been saved successfully
  </ToastDescription>
</Toast>
```

**Properties:**

- Friendly, constructive error and success messages
- Use icons and color for clarity, not just decoration

### Loading States

#### Skeleton Components

```tsx
<div className="cognitive-loading-state">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
  <Skeleton className="h-4 w-[150px]" />
</div>
```

**Properties:**

- Use spinners or skeletons to reassure users
- Provide context for what is loading and why

### Implementation Guidelines

- All components use responsive Tailwind classes.
- Follow the design system for spacing, color, and typography.
- Test for accessibility and usability.

### ProjectCard Component

#### Overview

- **Location:** `src/components/ui/ProjectCard.tsx`
- **Purpose:** Encapsulates all project showcase card UI and logic for the Projects page, reducing duplication and improving maintainability.
- **Props:**
  - `title` (string): Project title
  - `description` (string): Main project description
  - `cardDescription` (string, optional): Subtitle or context
  - `features` (string[]): List of key features
  - `technologies` (string[]): List of technologies used
  - `github` (string, optional): GitHub URL
  - `demo` (string, optional): Live demo URL
  - `figma` (string, optional): Figma prototype URL
  - `variant` (string, optional): Card style variant
  - `whatILearned` (string, optional): Reflection/learning summary
  - `children` (ReactNode, optional): For custom actions or content

#### Usage Example

```tsx
<ProjectCard
  title="Personal Portfolio Website"
  description="Designed and built this portfolio to share my work and process."
  cardDescription="Frontend Development"
  features={["Responsive design", "Dark mode support"]}
  technologies={["Next.js", "TailwindCSS"]}
  github="https://github.com/atg25/portfolio"
  whatILearned="What I learned: Sharing my process helps others."
/>
```

#### Notes

- Used in `src/app/projects/page.tsx` for all project showcases.
- Accepts all relevant project data as props, making it easy to add or update projects.
- Follows the same composition and styling conventions as other shadcn/ui components.

### Psychological Testing Protocol

- Validate for approachability, clarity, and universal usability
- Test for accessibility and comfort across devices

### Research References

- "Component Usability in Digital Products" – UX Psychology Journal
- "Inclusive Design Patterns" – Digital Design Psychology Review
- "Accessible UI Systems" – Interface Psychology Studies
