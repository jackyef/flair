# next-preact-typescript template

A very simple template for starting a project with Next.js + Preact + TypeScript
Based on [using-preact example](https://github.com/vercel/next.js/tree/canary/examples/using-preact)

Includes:

- TypeScript
- Prettier
- Eslint

Bring whatever else you want on your own.

Meant personal usage, but you can use it too, I guess.

## Open questions

- Components we need in our own docs site:
  - Toast feedback
  - Tooltip on button?
  - Allow icon on the right of the button

## References

- https://github.com/adobe/react-spectrum/tree/main/packages/%40react-spectrum
- https://medium.com/sfl-newsroom/typography-scaling-from-the-design-perspective-45d82f77ba95
- https://www.invisionapp.com/inside-design/guide-to-design-systems/
- https://www.youtube.com/watch?v=Hx02SaL_IH0&ab_channel=Netlify
- https://www.figma.com/community/file/857042825430121164
- https://www.figma.com/file/a3d84cjuqRO3E7BdcdpbpL/Build-it-in-Figma%3A-Design-Systems-%E2%80%94%C2%A0Components-Continued...-(Community)?node-id=10%3A68
- https://www.figma.com/file/RJ7UawmJppVqby1o3qbkBK/Starter-Design-System-(Community)?node-id=0%3A1
- https://coolors.co/ffee88-758bfd-00cc99-ef233c-2d3047

## Deploying on Vercel
- Set build command to:
  ```
  cd ../../ && pnpm build
  ```

- Set install command to:
  ```
  npm i pnpm -g && cd ../../ && pnpm i
  ```

- Set root directory to:
  ```
  packages/website
  ```