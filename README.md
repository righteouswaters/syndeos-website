# Syndeos Website

This is the official website for Syndeos, a powerful desktop application for managing VPS servers across various cloud platforms. Built with SvelteKit and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Fast performance with SvelteKit
- Modern styling with Tailwind CSS
- SEO optimized
- Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/syndeos-website.git
cd syndeos-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `build` directory.

## Project Structure

```
syndeos-website/
├── src/
│   ├── lib/
│   │   ├── components/       # Reusable Svelte components
│   │   │   ├── FeatureCard.svelte
│   │   │   └── CodeSnippet.svelte
│   ├── routes/
│   │   ├── +page.svelte      # Home page
│   │   └── +layout.svelte    # Main layout
│   └── app.css               # Global styles and Tailwind directives
├── static/
│   └── images/               # Static images
├── app.html                  # HTML template
├── svelte.config.js          # SvelteKit configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js            # Vite configuration
```

## Customization

### Colors

You can customize the color scheme by editing the `tailwind.config.js` file. The primary colors used in this template are:

- `primary`: Used for most UI elements, with various shading levels
- `accent`: Used for buttons, links, and call-to-action elements

### Adding Pages

To add a new page, create a new file in the `src/routes` directory. For example, to add an "About" page, create `src/routes/about/+page.svelte`.

### Adding Components

Reusable components should be added to the `src/lib/components` directory.

## Deployment

This website can be deployed to any static hosting service. Here are some options:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## License

This project is licensed under the GNU GPL3 License - see the LICENSE file for details.