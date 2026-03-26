export const siteContent = {
  kr: {
    meta: {
      title: "Achro | Me",
      description: "Achro의 개인 홈페이지"
    },
    home: {
      name: "나윤서",
      role: "Software Engineer",
      headline: "기록하면서 배우고, 정리하면서 나아갑니다.",
      intro:
        "이 홈페이지는 저를 소개하는 짧은 메인 페이지와, 공부한 내용을 쌓아두는 아카이브로 구성되어 있습니다.",
      paragraphs: [
        "복잡한 내용을 그대로 흘려보내기보다, 다시 정리해서 내 문장으로 바꾸는 과정을 좋아합니다.",
        "프로젝트를 하면서 마주친 문제, 공부하며 이해한 개념, 나중에 다시 보고 싶은 메모를 한곳에 쌓아가려고 합니다."
      ],
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
      headline: "I learn by writing things down and revisiting them clearly.",
      intro:
        "This site is split into a minimal main page about me and an archive where I keep study notes and project records.",
      paragraphs: [
        "I like taking messy ideas and rewriting them into something simpler and easier to return to later.",
        "The archive is where I plan to keep concepts I studied, implementation notes, and small troubleshooting records."
      ],
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
