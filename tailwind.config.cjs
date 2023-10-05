/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue = 1 }) => {
        return `rgba(var(${variableName}), ${opacityValue})`;
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
                    base: withOpacity("--color-text-base"),
                    muted: withOpacity("--color-text-muted"),
                    // "button-muted": withOpacity("--color-button-muted"),
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
