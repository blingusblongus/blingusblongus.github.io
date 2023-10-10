/** @type {import('tailwindcss').Config} */

function withOpacity(variableName, colorSystem = "rgba") {
    return ({ opacityValue = 1 }) => {
        return `${colorSystem}(var(${variableName}), ${opacityValue})`;
    };
}

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                "inclusive-sans": ['"Inclusive Sans"', "sans-serif"],
            },
            screens: {
                xs: "480px",
            },
            textColor: {
                skin: {
                    base: withOpacity("--color-text-base", "hsla"),
                    muted: withOpacity("--color-text-muted", "hsla"),
                    link: {
                        DEFAULT: withOpacity("--color-text-link", "hsla"),
                        active: withOpacity("--color-text-link-active", "hsla"),
                    },
                },
            },
            backgroundColor: {
                skin: {
                    base: withOpacity("--color-bg-base", "hsla"),
                    muted: withOpacity("--color-bg-muted", "hsla"),
                    accent: withOpacity("--color-bg-accent", "hsla"),
                    primary: withOpacity("--color-bg-primary", "hsla"),
                },
            },

            gradientColorStops: {
                skin: {
                    base: withOpacity("--color-bg-base", "hsla"),
                    muted: withOpacity("--color-bg-muted", "hsla"),
                    primary: withOpacity("--color-bg-primary", "hsla"),
                },
            },
            borderColor: {
                link: withOpacity("--color-text-link-active", "hsla"),
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
