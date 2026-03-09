# Portfolio

This is a personal portfolio website built with Next.js. The project showcases a developer's skills, including work experience, projects, skills, and contact information.

## Technologies

- **Next.js** - React framework for web applications
- **TypeScript** - Typed JavaScript
- **Tailwind CSS** - CSS framework for styling
- **Framer Motion** - Animation library
- **pnpm** - Package manager

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- pnpm

### Installing Dependencies

```bash
pnpm install
```

### Running in Development Mode

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── projects/[slug]/    # Dynamic project pages
├── components/             # React components
│   ├── sections/           # Home page sections
│   ├── projects/           # Project page components
│   ├── ui/                 # UI components
│   └── ...                 # Other components
├── lib/                    # Utilities
├── shared/                 # Shared data and hooks
│   ├── constants/          # Data (experience, projects, skills)
│   └── hooks/              # Custom hooks
└── public/                 # Static files
```

## Content Configuration

The project uses static data from the `shared/constants/` folder:

- `data.ts` - Basic information
- `experience.ts` - Work experience
- `projectsDb.ts` - Projects
- `skills.tsx` - Skills

Edit these files to update the portfolio content.

## Deployment

The project can be deployed on Vercel, Netlify, or any other hosting that supports Next.js.

For Vercel:

1. Connect your repository to Vercel
2. Set the build command: `pnpm build`
3. Set the directory: `./`

## License

This project is a personal portfolio and is not intended for commercial use.
