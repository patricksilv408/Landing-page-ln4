import { useEffect } from 'react';

const WEBHOOK_URL = 'https://n8n-n8n.sbhkzt.easypanel.host/webhook/a588904f-10da-4845-bcfa-da334334bcb5';
const TRACKING_KEYWORDS = ['wa.me', 'whatsapp', 'contato', 'orcamento', 'lead', 'fale', 'atendimento'];

// This lets TypeScript know that window.fbq might exist.
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Helper function to read a specific cookie by name
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
};

export const useButtonTracker = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // We look for the closest link tag (<a>) around the clicked element.
      const anchor = target.closest('a');

      if (anchor && anchor.href) {
        const href = anchor.href.toLowerCase();
        const isTracked = TRACKING_KEYWORDS.some(keyword => href.includes(keyword));

        if (isTracked) {
          // Capture Meta cookies and user agent
          const fbp = getCookie('_fbp');
          const fbc = getCookie('_fbc');
          const userAgent = navigator.userAgent;

          const payload = {
            button_type: href.includes('wa.me') || href.includes('whatsapp') ? 'whatsapp' : 'contact_lead',
            button_text: anchor.innerText?.trim() || 'No text found',
            button_link: anchor.href,
            timestamp: new Date().toISOString(),
            page_url: window.location.href,
            // Add new data for Meta Conversions API
            fbp: fbp,
            fbc: fbc,
            user_agent: userAgent,
          };

          // 1. Send data to the webhook
          fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            keepalive: true, // Ensures the request is sent even if the user navigates away
          }).catch(error => {
            console.error('Webhook Error:', error);
          });

          // 2. Trigger the Meta Pixel 'Lead' event
          if (typeof window.fbq === 'function') {
            window.fbq('track', 'Lead');
          } else {
            console.warn('Meta Pixel (fbq) is not available on this page.');
          }
        }
      }
    };

    document.body.addEventListener('click', handleClick, true);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleClick, true);
    };
  }, []); // The empty array means this effect runs only once.
};