export const pageview = (url) => {
    window.gtag('config', 'G-8Z6ZM2RZEL', {
      page_path: url,
    })
  }