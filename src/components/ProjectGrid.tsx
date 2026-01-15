import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  titleZh: string;
  url: string;
  size: 'large' | 'medium' | 'small';
  isInternal?: boolean;
}

const projects: Project[] = [
  {
    title: 'AI Algo Trading Bot Builder',
    titleZh: 'AI 算法交易机器人',
    url: 'https://arcane-ai.net/',
    size: 'large',
  },
  {
    title: 'Gold vs Bitcoin',
    titleZh: '黄金 vs 比特币',
    url: 'https://btc-vs-gold.lovable.app/',
    size: 'medium',
  },
  {
    title: 'BTC Buy/Sell Indicator',
    titleZh: 'BTC 买卖指标',
    url: 'https://btcdash-9iwhupw6.manus.space',
    size: 'medium',
  },
  {
    title: 'BinanceLife',
    titleZh: 'BinanceLife',
    url: 'https://binancelife.net/',
    size: 'medium',
  },
  {
    title: 'Life Reversal',
    titleZh: '命运逆转',
    url: 'https://fate-reversal.lovable.app',
    size: 'small',
  },
  {
    title: 'Voice Clone',
    titleZh: '语音克隆',
    url: '/voice-clone',
    size: 'small',
    isInternal: true,
  },
  {
    title: 'BNB Terminal',
    titleZh: 'BNB Terminal',
    url: '/bnb-terminal',
    size: 'medium',
    isInternal: true,
  },
];

const sizeClasses = {
  large: 'md:col-span-2 md:row-span-2',
  medium: 'md:col-span-1 md:row-span-2',
  small: 'md:col-span-1 md:row-span-1',
};

const ProjectGrid = () => {
  const { t } = useLanguage();

  const cardClasses = `group relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 
                       hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/10 
                       transition-all duration-300 flex flex-col justify-between`;

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-light mb-10 text-center">
        {t('Projects', '项目作品')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[120px]">
        {projects.map((project, index) =>
          project.isInternal ? (
            <Link
              key={index}
              to={project.url}
              className={`${cardClasses} ${sizeClasses[project.size]}`}
            >
              <span className="text-lg font-medium group-hover:text-primary transition-colors">
                {t(project.title, project.titleZh)}
              </span>
            </Link>
          ) : (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClasses} ${sizeClasses[project.size]}`}
            >
              <span className="text-lg font-medium group-hover:text-primary transition-colors">
                {t(project.title, project.titleZh)}
              </span>
              <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 
                                       transition-opacity absolute bottom-6 right-6" />
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
