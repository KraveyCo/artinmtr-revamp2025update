import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  image,
  url,
  type = 'website',
}) => {
  const siteTitle = 'MTR Art Vista';
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultDescription = 'Explore the art installations across Hong Kong MTR stations.';
  const defaultImage = '/og-image.jpg';
  const defaultUrl = 'https://mtr-art-vista.com';

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebSite',
          name: fullTitle,
          description: description || defaultDescription,
          image: image || defaultImage,
          url: url || defaultUrl,
        })}
      </script>
    </Helmet>
  );
};

export default Head; 