import { useLanguage } from '@/hooks/useLanguage';
import avatar from '@/assets/avatar.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-8">
      <div className="flex items-center gap-4 md:gap-6 mb-5">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg shadow-primary/20">
          <img 
            src={avatar} 
            alt="Olivia Pan" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Olivia Pan
        </h1>
      </div>
      <p className="max-w-2xl text-muted-foreground leading-relaxed text-lg">
        {t(
          "I joined crypto space since 2018. From crypto to AI — I dove into the vibe coding rabbit hole in 2024. I build AI projects for top exchanges and for myself. Here on this page, I share my personal projects. Some are serious, some are just for fun.",
          "我自 2018 年起投身加密货币领域。从 Crypto 到 AI —— 2024 年，我一头扎进了 Vibe Coding 的兔子洞。我既为顶级交易所开发 AI 项目，也做自己的独立开发。本页面主要分享我的个人项目：有些是严肃的实战作品，有些纯粹是为了好玩。"
        )}
      </p>
    </section>
  );
};

export default Hero;
