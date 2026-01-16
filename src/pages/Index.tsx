import { LanguageProvider } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import PhotoGallery from '@/components/PhotoGallery';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <ProjectGrid />
          <PhotoGallery />
        </main>
        <footer className="py-12 text-center text-sm text-muted-foreground">
          © 2025 Olivia Pan
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
