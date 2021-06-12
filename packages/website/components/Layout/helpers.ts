export type Page = {
  label: string;
  href: string;
};

export type Section = {
  sectionTitle: string;
  pages: Page[];
};

export const isSection = (
  sectionOrPage: Section | Page
): sectionOrPage is Section => {
  // @ts-expect-error
  return Boolean(sectionOrPage?.sectionTitle);
};

export const docsSections: Array<Section | Page> = [
  { label: 'Getting started', href: '/docs/getting-started' },
  { label: 'Principles', href: '/docs/principles' },
  { label: 'Tokens', href: '/docs/tokens' },
  {
    sectionTitle: 'Foundation',
    pages: [
      { label: 'Space', href: '/docs/space' },
      { label: 'Typography', href: '/docs/typography' },
      { label: 'Colors', href: '/docs/colors' },
    ],
  },
  {
    sectionTitle: 'Primitives',
    pages: [
      { label: 'Box', href: '/docs/box' },
      { label: 'Text', href: '/docs/text' },
    ],
  },
  {
    sectionTitle: 'Form',
    pages: [
      { label: 'Button', href: '/docs/button' },
      // TODO: Enable this once we have better Input components
      // { label: 'Input', href: '/docs/input' },
      { label: 'Switch', href: '/docs/switch' },
    ],
  },
  {
    sectionTitle: 'Feedback',
    pages: [
      { label: 'Tooltip', href: '/docs/tooltip' },
      { label: 'Toast', href: '/docs/toast' },
    ],
  },
  {
    sectionTitle: 'Overlay',
    pages: [
      { label: 'Dialog', href: '/docs/dialog' },
      { label: 'Drawer', href: '/docs/drawer' },
    ],
  },
];
