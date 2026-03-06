tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                heading: ['Roboto', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            },
            colors: {
                dark: '#0a0f16',
                panel: '#111827',
                neon: '#10b981', // Emerald 500
                neonDark: '#047857',
            },
            boxShadow: {
                'neon': '0 0 10px rgba(16, 185, 129, 0.5)',
                'neon-hover': '0 0 20px rgba(16, 185, 129, 0.8), inset 0 0 10px rgba(16, 185, 129, 0.3)',
                'panel': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 0 15px rgba(16, 185, 129, 0.1)',
            }
        }
    }
}
