import Sidebar from '@/components/Sidebar';
import ResourcesSection from '@/components/ResourcesSection';

export const metadata = {
  title: 'Resources - Nabhan Mazid',
  description: 'Curated collection of development tools, AI resources, and learning materials',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-12">
          <div className="max-w-6xl">
            <ResourcesSection />
          </div>
        </main>
      </div>
    </div>
  );
} 