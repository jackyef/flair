export const NoFlashScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.setAttribute('data-theme', localStorage.getItem('flair-theme') || 'light')`,
      }}
    />
  );
};
