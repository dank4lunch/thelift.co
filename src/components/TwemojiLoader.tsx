'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function TwemojiLoader() {
  useEffect(() => {
    // Clean up any existing twemoji instances on component mount
    if (typeof window !== 'undefined' && (window as any).twemoji) {
      try {
        (window as any).twemoji.parse(document.body, {
          folder: 'svg',
          ext: '.svg'
        });
      } catch (error) {
        console.warn('Twemoji parsing error:', error);
      }
    }
  }, []);

  return (
    <Script
      src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && (window as any).twemoji) {
          try {
            (window as any).twemoji.parse(document.body, {
              folder: 'svg',
              ext: '.svg'
            });
          } catch (error) {
            console.warn('Twemoji loading error:', error);
          }
        }
      }}
      onError={(error) => {
        console.warn('Failed to load Twemoji script:', error);
      }}
    />
  )
}
