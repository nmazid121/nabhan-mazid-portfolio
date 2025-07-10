import Sidebar from '@/components/Sidebar';
import ResumeSection from '@/components/ResumeSection';

export const metadata = {
  title: 'Resume - Nabhan Mazid',
  description: 'Resume and professional experience of Nabhan Mazid - Software Engineer and AI enthusiast',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-12">
          <div className="max-w-6xl">
            <ResumeSection />
          </div>
        </main>
      </div>
    </div>
  );
} 