import Editor from '@monaco-editor/react';
import { withLive } from 'react-live';
import { Language, PrismTheme } from 'prism-react-renderer';
import { useTheme } from 'flair-kit';
import { nightOwl } from './themes/nightOwl';

interface LiveProps {
  code: string;
  disabled: boolean;
  language: Language;
  onChange: (newCode?: string) => void;
  style: PrismTheme['styles'][number]['style'];
  theme: PrismTheme;
}

const _MonacoEditor = ({ code, onChange }: LiveProps) => {
  const { colorScheme } = useTheme();

  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={onChange}
      theme={colorScheme === 'light' ? 'light' : 'night-owl'}
      onMount={(_, monaco) => {
        monaco.editor.defineTheme('night-owl', nightOwl);
        monaco.editor.setTheme(colorScheme === 'light' ? 'light' : 'night-owl');
      }}
      loading={'Loading editor...'}
    />
  );
};

export const MonacoEditor = withLive(({ live }: { live?: LiveProps }) => {
  if (!live) return null;

  return <_MonacoEditor {...live} />;
});
