export const siteContent = {
  kr: {
    meta: {
      title: "Achro | Me",
      description: "Achro의 개인 홈페이지"
    },
    home: {
      name: "나윤서",
      role: "Software Engineer",
      intro:
        "안녕하세용",
      links: [
        { label: "GitHub", href: "https://github.com/seonooy" },
        { label: "Email", href: "mailto:nys67933@gmail.com" }
      ]
    },
    nav: {
      me: "ME",
      archive: "ARCHIVE",
      langKr: "KOR",
      langEn: "EN"
    },
    footer: "© 2026 Achro. All rights reserved."
  },
  en: {
    meta: {
      title: "Achro | Me",
      description: "Personal website of Achro"
    },
    home: {
      name: "NA YOONSEO",
      role: "Software Engineer",
      intro:
        "hihihi",
      links: [
        { label: "GitHub", href: "https://github.com/seonooy" },
        { label: "Email", href: "mailto:nys67933@gmail.com" }
      ]
    },
    nav: {
      me: "ME",
      archive: "ARCHIVE",
      langKr: "KOR",
      langEn: "EN"
    },
    footer: "© 2026 Achro. All rights reserved."
  }
} as const;

export type SiteLanguage = keyof typeof siteContent;
