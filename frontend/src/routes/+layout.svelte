<script context="module" lang="ts">
    import "../global.css"; // Import the global styles with Tailwind
</script>

<div class="layout-container">
    <header class="bg-primary text-white">
        <div class="header-container flex justify-between p-2 text-black">
            <div class="logo-wrapper">
                <a href="/">LOGO</a>
            </div>
            <nav class="main-nav">
                <ul>
                    <div class="flex gap-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    </header>

    <main class="bg-neutral-700 text-neutral-100">
        <button class="fab"><i class="fa-solid fa-arrow-down"></i></button>
        <slot />
    </main>

    <footer>
        <p class="text-black">Footer</p>
    </footer>
</div>
