import { useState } from 'react';
import { Button } from './ui/button';
import { Copy, Check } from 'lucide-react';
import { cn } from './ui/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'javascript', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group">
      {title && (
        <div className="flex items-center justify-between bg-muted px-4 py-2 border border-b-0 rounded-t-lg">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-muted-foreground uppercase">{language}</span>
        </div>
      )}
      <div className={cn(
        "relative bg-muted/50 border overflow-x-auto",
        title ? "rounded-b-lg" : "rounded-lg"
      )}>
        <Button
          size="sm"
          variant="secondary"
          className="absolute right-2 top-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
        <pre className="p-4 text-sm overflow-x-auto">
          <code className={cn(
            "font-mono",
            language === 'json' && "text-blue-600 dark:text-blue-400",
            language === 'bash' && "text-green-600 dark:text-green-400"
          )}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}