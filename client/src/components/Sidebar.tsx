import { useState } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronRight, Book, Zap, Shield, Database, Users, Settings } from 'lucide-react';
import { cn } from './ui/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  {
    title: 'Getting Started',
    icon: Book,
    items: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'quickstart', title: 'Quick Start' },
      { id: 'authentication', title: 'Authentication' },
      { id: 'errors', title: 'Error Handling' }
    ]
  },
  {
    title: 'API Reference',
    icon: Zap,
    items: [
      { id: 'users', title: 'Users' },
      { id: 'posts', title: 'Posts' },
      { id: 'comments', title: 'Comments' },
      { id: 'media', title: 'Media' }
    ]
  },
  {
    title: 'Authentication',
    icon: Shield,
    items: [
      { id: 'oauth', title: 'OAuth 2.0' },
      { id: 'jwt', title: 'JWT Tokens' },
      { id: 'api-keys', title: 'API Keys' }
    ]
  },
  {
    title: 'Data Models',
    icon: Database,
    items: [
      { id: 'user-model', title: 'User Model' },
      { id: 'post-model', title: 'Post Model' },
      { id: 'comment-model', title: 'Comment Model' }
    ]
  }
];

export function Sidebar({ isOpen, onClose, activeSection, onSectionChange }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>(['Getting Started', 'API Reference']);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-16 z-50 h-[calc(100vh-4rem)] w-72 bg-background border-r transition-transform duration-200 ease-in-out md:sticky md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <ScrollArea className="h-full py-6">
          <div className="space-y-4 px-3">
            {navigationItems.map((section) => (
              <Collapsible
                key={section.title}
                open={openSections.includes(section.title)}
                onOpenChange={() => toggleSection(section.title)}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center space-x-2">
                    <section.icon className="h-4 w-4" />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  {openSections.includes(section.title) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1 pl-6">
                  {section.items.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start font-normal",
                        activeSection === item.id && "bg-accent text-accent-foreground"
                      )}
                      onClick={() => {
                        onSectionChange(item.id);
                        onClose();
                      }}
                    >
                      {item.title}
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}