import React from 'react';
import { NavContextProvider } from './src/common/context/NavContext';

export const wrapRootElement = ({ element }) => <NavContextProvider>{element}</NavContextProvider>;

export const onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <link
      rel="preconnect dns-prefetch"
      key="preconnect-google-analytics"
      href="https://www.google-analytics.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google"
      href="https://www.google.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-marketingplatform"
      href="https://marketingplatform.google.com"
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
        console.log("Hit script tag");
        navigator.serviceWorker.getRegistrations()
        .then(function(registrations) {
            registrations.forEach(function(registration) { 
                console.log("Delete service worker");
                registration.unregister(); 
            })
        });
            `,
      }}
    />
  ]);
};
