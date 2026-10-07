// Feature switches for the public site. The orob consumer app is shown by default; set VITE_SHOW_CONSUMER_APP=false to hide its card, page and links.
export const showConsumerApp = (import.meta.env.VITE_SHOW_CONSUMER_APP || 'true').trim().toLowerCase() !== 'false'
