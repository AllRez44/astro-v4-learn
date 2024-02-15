document.addEventListener('astro:after-swap', () => {
    document?.querySelector('.hamburger')?.addEventListener('click', () => {
        document?.querySelector('.nav-links')?.classList.toggle('expanded');
    });
})