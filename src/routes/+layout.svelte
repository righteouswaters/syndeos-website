<!-- src/routes/+layout.svelte -->
<script>
    import '../app.css';
</script>

<div class="flex flex-col min-h-screen p-4">
    <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-accent">
        <div class="container-custom py-4">
            <nav class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <img src="/images/syndeos-logo.svg" alt="Syndeos Logo" class="h-10 w-10" />
                    <span class="text-2xl font-semibold text-primary-900">Syndeos</span>
                </div>

                <div class="hidden md:flex items-center gap-8">
                    <a href="#features" class="link transition-colors">Features</a>
                    <a href="#getting-started" class="link transition-colors">Getting Started</a>
                    <a href="#documentation" class="link transition-colors">Documentation</a>
                    <a href="https://github.com/righteouswaters/syndeos" target="_blank" rel="noopener noreferrer"
                       class="link transition-colors">GitHub</a>
                </div>

                <div class="flex md:hidden">
                    <!-- Mobile menu button -->
                    <button type="button" class="p-2 text-primary-800" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    <main class="flex-grow">
        <slot />
    </main>

    <footer class="bg-primary-900 py-12">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <div class="flex items-center gap-2 mb-4">
                        <img src="/images/syndeos-logo.svg" alt="Syndeos Logo" class="h-8 w-8" />
                        <span class="text-xl font-semibold">Syndeos</span>
                    </div>
                    <p class="text-primary-200 max-w-md">
                        A powerful desktop application for managing VPS servers across various cloud platforms.
                        Built with modern technologies for a seamless experience.
                    </p>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Resources</h3>
                    <ul class="space-y-2 text-primary-300">
                        <li><a href="https://github.com/righteouswaters/syndeos" class="link transition-colors">GitHub</a></li>
                        <li><a href="https://github.com/righteouswaters/syndeos/releases" class="link transition-colors">Releases</a></li>
                        <li><a href="https://github.com/righteouswaters/syndeos/issues" class="link transition-colors">Issues</a></li>
                        <li><a href="https://github.com/righteouswaters/syndeos/blob/main/CONTRIBUTING.md" class="link transition-colors">Contributing</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Legal</h3>
                    <ul class="space-y-2 text-primary-300">
                        <li><a href="#" class="link transition-colors">License</a></li>
                        <li><a href="#" class="link transition-colors">Privacy Policy</a></li>
                        <li><a href="#" class="link transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div class="mt-12 pt-8 border-t border-accent text-center text-primary-400">
                <p>© {new Date().getFullYear()} Syndeos. All rights reserved. Released under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" class="link transition-colors">GNU GPL3 License</a>.</p>
            </div>
        </div>
    </footer>
</div>