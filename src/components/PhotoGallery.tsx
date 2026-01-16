import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const photos = [
  '/gallary/20260115225630_588_254.jpg',
  '/gallary/20260115230541_589_254.jpg',
  '/gallary/20260115232200_590_254.jpg',
  '/gallary/20260115234115_592_254.jpg',
  '/gallary/G39jmIsWcAA6nPz.jpeg',
  '/gallary/G7aJFhQaIAAHYx1.jpeg',
  '/gallary/G7RW1jYbkAAVS13.jpeg',
  '/gallary/G8Qxk_2a4AAThs5.jpeg',
  '/gallary/G-KT0oCaUAANr9i.jpeg',
];

const PhotoGallery = () => {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-light mb-10 text-center">
        {t('Life Moments', '生活瞬间')}
      </h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <img
                src={photo}
                alt={`Life moment ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Selected photo"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
