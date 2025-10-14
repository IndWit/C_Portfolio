module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          accent: "var(--primary-accent)"
        },
        // Secondary Colors
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          error: "var(--text-error)"
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
          accent: "var(--bg-accent)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          accent: "var(--border-accent)"
        },
        // Component-specific colors
        header: {
          background: "var(--header-bg)"
        },
        line: {
          background: "var(--line-bg)"
        },
        menu: {
          text: "var(--menu-text)"
        },
        link: {
          text: "var(--link-text)"
        }
      },
      // Typography
      fontSize: {
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)'
      },
      // Spacing
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)'
      },
      // Border Radius
      borderRadius: {
        'sm': 'var(--radius-sm)'
      },
      // Border Width
      borderWidth: {
        'sm': 'var(--border-width-sm)'
      },
      // Layout
      width: {
        'auto': 'var(--width-auto)',
        'full': 'var(--width-full)'
      },
      height: {
        'auto': 'var(--height-auto)'
      }
    }
  },
  plugins: []
};