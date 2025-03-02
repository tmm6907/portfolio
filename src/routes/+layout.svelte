<script context="module" lang="ts">
    import "../global.css"; // Import the global styles with Tailwind
</script>

<div class="layout-container bg-dark">
    <header
        class="header-container flex justify-between py-6 px-2 border-b border-neutral-400"
    >
        <div class="logo-wrapper text-xl">
            <a href="/">LOGO</a>
        </div>
        <div class="flex text-light text-xl gap-4">
            <a id="email" href="mailto:tmm6907@gmail.com">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <div>
                <a href="https://github.com/tmm6907">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    </header>

    <main class="bg-neutral-700 text-neutral-100">
        <button class="fab"><i class="fa-solid fa-arrow-down"></i></button>
        <slot />
    </main>
</div>
