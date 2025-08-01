'use client'

export default function SkipNav() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="absolute top-4 left-4 z-[60] bg-primary-500 text-neutral-950 px-4 py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all duration-200 transform -translate-y-full focus:translate-y-0"
        onFocus={(e) => {
          e.currentTarget.classList.remove('-translate-y-full')
        }}
        onBlur={(e) => {
          e.currentTarget.classList.add('-translate-y-full')
        }}
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className="absolute top-4 left-4 ml-32 z-[60] bg-accent-500 text-neutral-950 px-4 py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all duration-200 transform -translate-y-full focus:translate-y-0"
        onFocus={(e) => {
          e.currentTarget.classList.remove('-translate-y-full')
        }}
        onBlur={(e) => {
          e.currentTarget.classList.add('-translate-y-full')
        }}
      >
        Skip to navigation
      </a>
      <a
        href="#packages"
        className="absolute top-4 left-4 ml-64 z-[60] bg-primary-400 text-neutral-950 px-4 py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all duration-200 transform -translate-y-full focus:translate-y-0"
        onFocus={(e) => {
          e.currentTarget.classList.remove('-translate-y-full')
        }}
        onBlur={(e) => {
          e.currentTarget.classList.add('-translate-y-full')
        }}
      >
        Skip to packages
      </a>
    </div>
  )
}
