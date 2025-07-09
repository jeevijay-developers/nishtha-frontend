import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery | Nishtha',
  description: 'Explore my visual journey through work, achievements, and memorable moments.',
  keywords: 'gallery, portfolio, achievements, work, technology, projects',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Gallery isStandalonePage={true} />
    </div>
  );
}