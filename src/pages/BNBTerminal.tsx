import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BNBTerminalContent = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 p-6 flex items-center justify-between z-50">
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">{t('Back', '返回')}</span>
        </Link>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1.5 text-sm font-medium border border-border/50 rounded-full 
                     hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
        >
          {language === 'en' ? '中文' : 'EN'}
        </button>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            BNB Terminal
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            {t('Upcoming', '即将上线')}
          </p>
        </div>
      </main>
    </div>
  );
};

const BNBTerminal = () => {
  return (
    <LanguageProvider>
      <BNBTerminalContent />
    </LanguageProvider>
  );
};

export default BNBTerminal;
