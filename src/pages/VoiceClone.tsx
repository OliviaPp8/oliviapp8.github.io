import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const tweets = [
  'https://x.com/0xOliviaPp/status/2009544064929345786',
  'https://x.com/0xOliviaPp/status/2002287517010440391',
  'https://x.com/0xOliviaPp/status/2002633577851461772',
];

const VoiceCloneContent = () => {
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

      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Voice Clone
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          {t('CZ Voice Clone Project', 'CZ 语音克隆项目')}
        </p>

        <div className="space-y-6">
          {tweets.map((tweetUrl, index) => (
            <div
              key={index}
              className="border border-border/40 rounded-2xl overflow-hidden bg-card/50"
            >
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href={tweetUrl}></a>
              </blockquote>
            </div>
          ))}
        </div>
      </main>

      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
};

const VoiceClone = () => {
  return (
    <LanguageProvider>
      <VoiceCloneContent />
    </LanguageProvider>
  );
};

export default VoiceClone;
