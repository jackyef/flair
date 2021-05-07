export const NoFlashScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.body.setAttribute('data-theme', localStorage.getItem('flair-theme') || 'light')`,
      }}
    />
  );
};
