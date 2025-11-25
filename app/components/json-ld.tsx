import { siteConfig } from "@/config/site";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteConfig.name,
        "url": siteConfig.url,
        "description": siteConfig.description,
        "author": {
            "@type": "Organization",
            "name": "Lucid Homes",
            "url": siteConfig.url
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
