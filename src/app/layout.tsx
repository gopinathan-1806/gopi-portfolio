import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";

const title = `${profile.name} | ${profile.title}`;
const description = profile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Senior Cloud DevOps Engineer",
    "AI Infrastructure Engineer",
    "Platform Engineer",
    "Site Reliability Engineer",
    "MLOps Engineer",
    "DevOps GenAI Engineer",
    "AWS",
    "Azure",
    "IBM Cloud",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "GitOps",
    "RAG",
    "LangChain",
    "LangGraph",
    "AI Agents",
    "n8n",
    profile.name,
  ],
  authors: [{ name: profile.name, url: profile.links.linkedin }],
  creator: profile.name,
  applicationName: `${profile.name} Portfolio`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    siteName: `${profile.name} | Portfolio`,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.summary,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.links.linkedin, profile.links.github],
  knowsAbout: [
    "Cloud Computing",
    "AWS",
    "Microsoft Azure",
    "IBM Cloud",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "GitOps",
    "DevOps",
    "Site Reliability Engineering",
    "Generative AI",
    "Retrieval-Augmented Generation",
    "LangChain",
    "AI Agents",
    "MLOps",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
