# Graph Report - .  (2026-07-31)

## Corpus Check
- Large corpus: 118 files · ~506,435 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 702 nodes · 983 edges · 115 communities (44 shown, 71 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.9)
- Token cost: 449,595 input · 0 output

## Community Hubs (Navigation)
- Vehicle Configurator UI
- shadcn/ui Form & Layout
- Landing Page & App Shell
- Project Docs & Crawler Policy
- Toast Notification System
- TypeScript App Config
- shadcn/ui Interactive Controls
- TypeScript Node/Vite Config
- Command Palette & Dialog
- shadcn/ui Setup Config
- shadcn/ui Button & Calendar
- Form Field & Label
- NPM Dependencies (Batch A)
- Carousel Component
- Supabase Client & DB Types
- Menubar Component
- Root TypeScript Config
- Build Tooling Dependencies
- Chart Component
- Context Menu Component
- Dropdown Menu Component
- Order Lookup E2E Tests
- Alert Dialog Component
- Table Component
- Breadcrumb Component
- Drawer Component
- Navigation Menu Component
- Package Metadata
- Toggle & Toggle Group
- NPM Scripts
- Alert Component
- OTP Input Component
- Avatar Component
- Badge Component
- Tabs Component
- Radio Group Component
- Credit Analysis Edge Function
- caniuse-lite Dependency
- class-variance-authority Dependency
- clsx Dependency
- cmdk Dependency
- eslint Dependency
- @eslint/js Dependency
- eslint-plugin-react-hooks Dependency
- eslint-plugin-react-refresh Dependency
- globals Dependency
- @hookform/resolvers Dependency
- input-otp Dependency
- lucide-react Dependency
- next-themes Dependency
- @radix-ui/react-alert-dialog Dependency
- @radix-ui/react-aspect-ratio Dependency
- @radix-ui/react-avatar Dependency
- @radix-ui/react-checkbox Dependency
- @radix-ui/react-collapsible Dependency
- @radix-ui/react-context-menu Dependency
- @radix-ui/react-dialog Dependency
- @radix-ui/react-dropdown-menu Dependency
- @radix-ui/react-hover-card Dependency
- @radix-ui/react-label Dependency
- @radix-ui/react-menubar Dependency
- @radix-ui/react-navigation-menu Dependency
- @radix-ui/react-popover Dependency
- @radix-ui/react-progress Dependency
- @radix-ui/react-radio-group Dependency
- @radix-ui/react-scroll-area Dependency
- @radix-ui/react-select Dependency
- @radix-ui/react-separator Dependency
- @radix-ui/react-slider Dependency
- @radix-ui/react-slot Dependency
- @radix-ui/react-tabs Dependency
- @radix-ui/react-toast Dependency
- @radix-ui/react-toggle Dependency
- @radix-ui/react-toggle-group Dependency
- @radix-ui/react-tooltip Dependency
- react-day-picker Dependency
- react-hook-form Dependency
- react-input-mask Dependency
- react-resizable-panels Dependency
- react-router-dom Dependency
- recharts Dependency
- sonner Dependency
- @supabase/supabase-js Dependency
- tailwind-merge Dependency
- tailwindcss-animate Dependency
- @tanstack/react-query Dependency
- @types/react-input-mask Dependency
- vaul Dependency
- zod Dependency
- zustand Dependency
- @playwright/test Dependency
- supabase Dependency
- tailwindcss Dependency
- @types/node Dependency
- @types/react Dependency
- typescript Dependency
- typescript-eslint Dependency
- vite Dependency
- Lunar White Variant & Product
- Android Chrome Icon (192x192)
- Android Chrome Icon 512x512 (Terminal...
- Apple Touch Icon (Terminal Symbol)
- Favicon 16x16 (Generic Document Icon)
- Favicon 32x32 (Terminal/Console Icon)
- Placeholder Image (SVG)
- Glacier Blue - Velô Sprint Color Variant

## God Nodes (most connected - your core abstractions)
1. `cn()` - 80 edges
2. `Velô Sprint Vehicle Configurator SPA` - 23 edges
3. `compilerOptions` - 19 edges
4. `compilerOptions` - 14 edges
5. `formatPrice()` - 11 edges
6. `Button` - 10 edges
7. `compilerOptions` - 9 edges
8. `react` - 8 edges
9. `useToast()` - 8 edges
10. `Order()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Velô Motors (brand / author, @VeloMotors)` --conceptually_related_to--> `Velô Sprint Vehicle Configurator SPA`  [INFERRED]
  index.html → README.md
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/components/ui/carousel.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  src/components/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/components/ui/form.tsx → package.json
- `useSidebar()` --references--> `react`  [EXTRACTED]
  src/components/ui/sidebar.tsx → package.json

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Velô Sprint Frontend/Backend Stack** — readme_react, readme_typescript, readme_vite, readme_tailwindcss, readme_shadcn_ui, readme_zustand, readme_react_hook_form, readme_zod, readme_tanstack_query, readme_supabase [EXTRACTED 1.00]
- **Application Navigation Flow (Landing to Confirmation)** — readme_route_landing, readme_route_configure, readme_route_order, readme_route_success, readme_main_flow [INFERRED 0.95]

## Communities (115 total, 71 thin omitted)

### Community 0 - "Vehicle Configurator UI"
Cohesion: 0.05
Nodes (64): Glacier Blue Aero Wheels (Product Image), Glacier Blue / Aero Wheels Vehicle Variant, Glacier Blue Sport Wheels, Lunar White Aero Wheels (Car Product Image), Lunar White Sport Wheels (Product Image), Midnight Black Aero Wheels (Vehicle Color/Wheel Variant Image), Midnight Black Sport Wheels (Product Image), CarStage() (+56 more)

### Community 1 - "shadcn/ui Form & Layout"
Cohesion: 0.05
Nodes (43): react, react, useCarousel(), useChart(), useFormField(), Separator, SheetContent, SheetContentProps (+35 more)

### Community 2 - "Landing Page & App Shell"
Cohesion: 0.09
Nodes (25): App(), queryClient, Velo Brand Logo (SVG), Hero Banner - Velô Sprint, Velô Sprint - Midnight Black Color Variant, CTASection(), faqs, FAQSection() (+17 more)

### Community 3 - "Project Docs & Crawler Policy"
Cohesion: 0.08
Nodes (34): index.html (App Shell), Application Entry Script (/src/main.tsx), SEO / Social Sharing Meta Tags (Velô by Papito, Open Graph, Twitter Card), #root Mount Element, Velô Motors (brand / author, @VeloMotors), Bingbot, robots.txt Crawler Access Policy, facebookexternalhit (+26 more)

### Community 4 - "Toast Notification System"
Cohesion: 0.12
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 5 - "TypeScript App Config"
Cohesion: 0.08
Nodes (24): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules (+16 more)

### Community 6 - "shadcn/ui Interactive Controls"
Cohesion: 0.10
Nodes (11): NavLink, NavLinkCompatProps, HoverCardContent, PopoverContent, Progress, ScrollArea, ScrollBar, Slider (+3 more)

### Community 7 - "TypeScript Node/Vite Config"
Cohesion: 0.11
Nodes (17): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+9 more)

### Community 8 - "Command Palette & Dialog"
Cohesion: 0.12
Nodes (15): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+7 more)

### Community 9 - "shadcn/ui Setup Config"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 10 - "shadcn/ui Button & Calendar"
Cohesion: 0.20
Nodes (14): buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLink() (+6 more)

### Community 11 - "Form Field & Label"
Cohesion: 0.15
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 12 - "NPM Dependencies (Batch A)"
Cohesion: 0.15
Nodes (13): baseline-browser-mapping, date-fns, embla-carousel-react, dependencies, baseline-browser-mapping, date-fns, embla-carousel-react, @radix-ui/react-accordion (+5 more)

### Community 13 - "Carousel Component"
Cohesion: 0.15
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 14 - "Supabase Client & DB Types"
Cohesion: 0.17
Nodes (11): supabase, CompositeTypes, Constants, Database, DatabaseWithoutInternals, DefaultSchema, Enums, Json (+3 more)

### Community 15 - "Menubar Component"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 16 - "Root TypeScript Config"
Cohesion: 0.17
Nodes (11): compilerOptions, allowJs, baseUrl, noImplicitAny, noUnusedLocals, noUnusedParameters, paths, skipLibCheck (+3 more)

### Community 17 - "Build Tooling Dependencies"
Cohesion: 0.18
Nodes (11): autoprefixer, devDependencies, autoprefixer, postcss, @tailwindcss/typography, @types/react-dom, @vitejs/plugin-react-swc, postcss (+3 more)

### Community 18 - "Chart Component"
Cohesion: 0.20
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 19 - "Context Menu Component"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 20 - "Dropdown Menu Component"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 21 - "Order Lookup E2E Tests"
Cohesion: 0.28
Nodes (3): generateOrderCode(), OrderLockupPage, OrderStatus

### Community 22 - "Alert Dialog Component"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 23 - "Table Component"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 24 - "Breadcrumb Component"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 25 - "Drawer Component"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 26 - "Navigation Menu Component"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 27 - "Package Metadata"
Cohesion: 0.29
Nodes (6): name, overrides, caniuse-lite, private, type, version

### Community 28 - "Toggle & Toggle Group"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 29 - "NPM Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, build:dev, dev, lint, preview

### Community 30 - "Alert Component"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 31 - "OTP Input Component"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 32 - "Avatar Component"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 33 - "Badge Component"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 34 - "Tabs Component"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

## Knowledge Gaps
- **381 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+376 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **71 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `NPM Dependencies (Batch A)` to `shadcn/ui Form & Layout`, `Package Metadata`, `caniuse-lite Dependency`, `class-variance-authority Dependency`, `clsx Dependency`, `cmdk Dependency`, `@hookform/resolvers Dependency`, `input-otp Dependency`, `lucide-react Dependency`, `next-themes Dependency`, `@radix-ui/react-alert-dialog Dependency`, `@radix-ui/react-aspect-ratio Dependency`, `@radix-ui/react-avatar Dependency`, `@radix-ui/react-checkbox Dependency`, `@radix-ui/react-collapsible Dependency`, `@radix-ui/react-context-menu Dependency`, `@radix-ui/react-dialog Dependency`, `@radix-ui/react-dropdown-menu Dependency`, `@radix-ui/react-hover-card Dependency`, `@radix-ui/react-label Dependency`, `@radix-ui/react-menubar Dependency`, `@radix-ui/react-navigation-menu Dependency`, `@radix-ui/react-popover Dependency`, `@radix-ui/react-progress Dependency`, `@radix-ui/react-radio-group Dependency`, `@radix-ui/react-scroll-area Dependency`, `@radix-ui/react-select Dependency`, `@radix-ui/react-separator Dependency`, `@radix-ui/react-slider Dependency`, `@radix-ui/react-slot Dependency`, `@radix-ui/react-tabs Dependency`, `@radix-ui/react-toast Dependency`, `@radix-ui/react-toggle Dependency`, `@radix-ui/react-toggle-group Dependency`, `@radix-ui/react-tooltip Dependency`, `react-day-picker Dependency`, `react-hook-form Dependency`, `react-input-mask Dependency`, `react-resizable-panels Dependency`, `react-router-dom Dependency`, `recharts Dependency`, `sonner Dependency`, `@supabase/supabase-js Dependency`, `tailwind-merge Dependency`, `tailwindcss-animate Dependency`, `@tanstack/react-query Dependency`, `@types/react-input-mask Dependency`, `vaul Dependency`, `zod Dependency`, `zustand Dependency`?**
  _High betweenness centrality (0.307) - this node is a cross-community bridge._
- **Why does `react` connect `shadcn/ui Form & Layout` to `NPM Dependencies (Batch A)`, `Toast Notification System`?**
  _High betweenness centrality (0.266) - this node is a cross-community bridge._
- **Why does `cn()` connect `shadcn/ui Button & Calendar` to `Vehicle Configurator UI`, `shadcn/ui Form & Layout`, `Landing Page & App Shell`, `Toast Notification System`, `shadcn/ui Interactive Controls`, `Command Palette & Dialog`, `Form Field & Label`, `Carousel Component`, `Menubar Component`, `Chart Component`, `Context Menu Component`, `Dropdown Menu Component`, `Alert Dialog Component`, `Table Component`, `Breadcrumb Component`, `Drawer Component`, `Navigation Menu Component`, `Toggle & Toggle Group`, `Alert Component`, `OTP Input Component`, `Avatar Component`, `Badge Component`, `Tabs Component`, `Radio Group Component`?**
  _High betweenness centrality (0.221) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _381 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Vehicle Configurator UI` be split into smaller, more focused modules?**
  _Cohesion score 0.05387861084063616 - nodes in this community are weakly interconnected._
- **Should `shadcn/ui Form & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.04591836734693878 - nodes in this community are weakly interconnected._
- **Should `Landing Page & App Shell` be split into smaller, more focused modules?**
  _Cohesion score 0.08717948717948718 - nodes in this community are weakly interconnected._