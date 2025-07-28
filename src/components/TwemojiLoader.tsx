'use client'

import Script from 'next/script'

export default function TwemojiLoader() {
  return (
    <Script
      src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && (window as any).twemoji) {
          (window as any).twemoji.parse(document.body, {
            folder: 'svg',
            ext: '.svg'
          });
        }
      }}
    />
  )
}
