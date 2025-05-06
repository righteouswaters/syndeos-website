<!-- src/routes/+page.svelte -->
<script>
    import FeatureCard from '$lib/components/FeatureCard.svelte';
    import CodeSnippet from '$lib/components/CodeSnippet.svelte';

    const features = [
        {
            title: 'Server Management',
            description: 'Connect to and manage multiple VPS instances across different providers like Digital Ocean, Linode, and more.',
            icon: 'server'
        },
        {
            title: 'Database Management',
            description: 'Create, configure, and maintain databases and database users all from a single interface.',
            icon: 'database'
        },
        {
            title: 'SSH Key Management',
            description: 'Generate SSH keys and securely connect to your servers with easy key management.',
            icon: 'key'
        },
        {
            title: 'Web Server Configuration',
            description: 'Configure and manage Nginx/Apache settings without touching the command line.',
            icon: 'globe'
        },
        {
            title: 'Backup Management',
            description: 'Schedule and manage backups of your server data with automated schedules.',
            icon: 'backup'
        },
        {
            title: 'PHP Version Management',
            description: 'Easily switch between different PHP versions for your applications.',
            icon: 'php'
        }
    ];

    const installCode = `# Clone the repository
git clone https://github.com/righteouswaters/syndeos.git
cd syndeos

# Install dependencies
bun install

# Build the application
bun run tauri build`;
</script>

<svelte:head>
    <title>Syndeos - VPS Server Management Made Easy</title>
    <meta name="description" content="Syndeos is a powerful desktop application for managing VPS servers across various cloud platforms like Digital Ocean, Linode, and more." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-b from-primary-100 to-white py-20 md:py-32">
    <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
                    VPS Server Management <span class="text-accent-600">Made Easy</span>
                </h1>
                <p class="text-lg md:text-xl text-primary-700 mb-8 max-w-xl">
                    Syndeos is a powerful desktop application that simplifies managing servers across Digital Ocean, Linode, and other cloud providers.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="https://github.com/righteouswaters/syndeos/releases" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Latest Release
                    </a>
                    <a href="#getting-started" class="btn btn-outline">
                        Getting Started
                    </a>
                </div>
            </div>

            <div class="hidden lg:block">
                <img src="/images/syndeos-dashboard.png" alt="Syndeos Dashboard" class="rounded-lg shadow-xl" />
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 bg-white">
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p class="text-lg text-primary-600 max-w-2xl mx-auto">
                Syndeos comes packed with everything you need to manage your server infrastructure efficiently.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each features as feature}
                <FeatureCard {feature} />
            {/each}
        </div>
    </div>
</section>

<!-- Technology Stack Section -->
<section class="py-20 bg-primary-50">
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Modern Technology Stack</h2>
            <p class="text-lg text-primary-600 max-w-2xl mx-auto">
                Built with cutting-edge technologies to provide a fast, reliable, and native desktop experience.
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
            <div class="flex flex-col items-center">
                <img src="/images/tech/tauri.svg" alt="Tauri" class="h-16 mb-4" />
                <span class="font-medium">Tauri v2</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="/images/tech/rust.svg" alt="Rust" class="h-16 mb-4" />
                <span class="font-medium">Rust</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="/images/tech/typescript.svg" alt="TypeScript" class="h-16 mb-4" />
                <span class="font-medium">TypeScript</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="/images/tech/react.svg" alt="React" class="h-16 mb-4" />
                <span class="font-medium">React v19</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="/images/tech/tailwindcss.svg" alt="Tailwind CSS" class="h-16 mb-4" />
                <span class="font-medium">Tailwind CSS v4</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="/images/tech/bun.svg" alt="Bun" class="h-16 mb-4" />
                <span class="font-medium">Bun</span>
            </div>
        </div>
    </div>
</section>

<!-- Getting Started Section -->
<section id="getting-started" class="py-20 bg-white">
    <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Getting Started</h2>
                <p class="text-lg mb-6">
                    Follow these steps to get Syndeos up and running on your system:
                </p>

                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-semibold mb-2">1. Prerequisites</h3>
                        <p>Before installing Syndeos, ensure you have the following installed:</p>
                        <ul class="list-disc pl-5 space-y-1 text-primary-700">
                            <li>Bun.js (v1.2 or later)</li>
                            <li>Rust (latest stable)</li>
                            <li>Platform-specific dependencies for Tauri development</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold mb-2">2. Installation</h3>
                        <CodeSnippet code={installCode} />
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold mb-2">3. First Launch</h3>
                        <p>The built application will be available in the <code>src-tauri/target/release</code> directory.</p>
                    </div>
                </div>

                <div class="mt-8">
                    <a href="https://github.com/righteouswaters/syndeos#readme" class="btn btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Read Full Documentation
                    </a>
                </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-xl">
                <img src="/images/syndeos-dashboard.png" alt="Syndeos Screenshot" class="w-full" />
            </div>
        </div>
    </div>
</section>

<!-- Documentation Section -->
<section id="documentation" class="py-20 bg-primary-50">
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Documentation & Resources</h2>
            <p class="text-lg text-primary-600 max-w-2xl mx-auto">
                Everything you need to get the most out of Syndeos.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://github.com/righteouswaters/syndeos#readme"
               class="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="bg-primary-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 class="ml-4 text-xl font-semibold">Documentation</h3>
                </div>
                <p class="text-primary-600">
                    Comprehensive guides for installation, configuration, and using all features of Syndeos.
                </p>
            </a>

            <a href="https://github.com/righteouswaters/syndeos/releases"
               class="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="bg-primary-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                    <h3 class="ml-4 text-xl font-semibold">Releases</h3>
                </div>
                <p class="text-primary-600">
                    Download the latest version of Syndeos for your operating system.
                </p>
            </a>

            <a href="https://github.com/righteouswaters/syndeos/issues"
               class="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="bg-primary-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                    </div>
                    <h3 class="ml-4 text-xl font-semibold">Issues</h3>
                </div>
                <p class="text-primary-600">
                    Report bugs, request features, or get help with any problems you encounter.
                </p>
            </a>

            <a href="https://github.com/righteouswaters/syndeos/blob/main/CONTRIBUTING.md"
               class="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="bg-primary-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <h3 class="ml-4 text-xl font-semibold">Contributing</h3>
                </div>
                <p class="text-primary-600">
                    Learn how to contribute to the Syndeos project and help make it even better.
                </p>
            </a>

            <a href="https://github.com/righteouswaters/syndeos"
               class="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="bg-primary-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 class="ml-4 text-xl font-semibold">Source Code</h3>
                </div>
                <p class="text-primary-600">
                    Browse the source code on GitHub and see how Syndeos is built.
                </p>
            </a>

            <a href="https://www.gnu.org/licenses/gpl-3.0.en.html"
               class="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                    <div class="bg-primary-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 class="ml-4 text-xl font-semibold">License</h3>
                </div>
                <p class="text-primary-600">
                    Syndeos is licensed under the GNU GPL3 License, ensuring it remains free and open-source.
                </p>
            </a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-primary-900 text-white">
    <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Simplify Your Server Management?</h2>
            <p class="text-lg text-primary-200 mb-8">
                Download Syndeos today and experience the power of managing your servers with a modern, intuitive interface.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/righteouswaters/syndeos/releases" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Latest Release
                </a>
                <a href="https://github.com/righteouswaters/syndeos" class="btn btn-outline border-white text-white hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    View on GitHub
                </a>
            </div>
        </div>
    </div>
</section>