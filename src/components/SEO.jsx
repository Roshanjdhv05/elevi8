import { Helmet } from "react-helmet-async";
import siteConfig from "../config/site.config";

export default function SEO({ 
  title, 
  description, 
  canonicalPath, 
  ogType = "website",
  ogImage = siteConfig.seo.ogImage
}) {
  const pageTitle = title 
    ? siteConfig.seo.titleTemplate.replace("%s", title)
    : siteConfig.seo.defaultTitle;
    
  const pageDescription = description || siteConfig.seo.defaultDescription;
  const canonicalUrl = canonicalPath ? `${siteConfig.domain}${canonicalPath}` : siteConfig.domain;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteConfig.domain}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
}
