import Sidebar from '@/components/Sidebar';
import ProjectsSection from '@/components/ProjectsSection';

export const metadata = {
  title: 'Projects - Nabhan Mazid',
  description: 'Explore the diverse portfolio of projects by Nabhan Mazid - from AI applications to web development',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-12">
          <div className="max-w-6xl">
            <ProjectsSection />
          </div>
        </main>
      </div>
    </div>
  );
} 