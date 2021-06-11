import Editor from '@monaco-editor/react';
import { withLive } from 'react-live';
import { Language, PrismTheme } from 'prism-react-renderer';
import { useTheme } from 'flair-kit';

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
      theme={colorScheme === 'light' ? 'light' : 'vs-dark'}
      loading={'Loading editor...'}
    />
  );
};

export const MonacoEditor = withLive(({ live }: { live?: LiveProps }) => {
  if (!live) return null;

  return <_MonacoEditor {...live} />;
});
