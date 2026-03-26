# seonooy.github.io

Astro 기반의 개인 사이트입니다.

## Structure

- `src/pages/index.astro`: KR 메인 페이지
- `src/pages/en/index.astro`: EN 메인 페이지
- `src/pages/archive/index.astro`: KR 아카이브 목록
- `src/pages/en/archive/index.astro`: EN 아카이브 목록
- `src/content/posts/*`: 포스트 Markdown
- `templates/post-template.md`: 새 글 작성용 템플릿

## Commands

```bash
npm install
npm run dev
```

## Direction

- 상단 네비게이션은 `ME / ARCHIVE`
- 언어 전환은 `EN / KR`
- 라이트 / 다크 모드 지원
- 글은 Markdown 파일 추가 방식으로 관리
