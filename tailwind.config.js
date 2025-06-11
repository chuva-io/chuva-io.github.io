export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        gradient: 'animatedgradient 12s ease infinite alternate',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
      },
    },
  },
}
