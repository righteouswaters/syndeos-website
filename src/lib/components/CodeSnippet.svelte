<!-- src/lib/components/CodeSnippet.svelte -->
<script>
    export let code = '';
    export let language = 'bash';

    let copied = false;

    function copyToClipboard() {
        navigator.clipboard.writeText(code).then(() => {
            copied = true;

            // Reset the copied state after 2 seconds
            setTimeout(() => {
                copied = false;
            }, 2000);
        });
    }
</script>

<div class="relative bg-primary-900 rounded-lg overflow-hidden">
    <!-- Header bar -->
    <div class="flex items-center justify-between px-4 py-2 bg-primary-800 text-primary-200 text-sm">
        <div class="flex space-x-2">
            <div class="h-3 w-3 rounded-full bg-red-500"></div>
            <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div class="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <div class="absolute left-1/2 transform -translate-x-1/2 font-mono text-xs">
            {language}
        </div>

        <button
                on:click={copyToClipboard}
                class="text-primary-300 hover:text-white transition-colors focus:outline-none"
                aria-label="Copy code"
        >
            {#if copied}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
            {/if}
        </button>
    </div>

    <!-- Code content -->
    <pre class="p-4 text-primary-100 overflow-x-auto font-mono text-sm">
    <code>{code}</code>
  </pre>
</div>

<style>
    pre {
        margin: 0;
        white-space: pre-wrap;
        word-break: break-word;
        line-height: 1.6;
    }
</style>