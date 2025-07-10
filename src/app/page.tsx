import Sidebar from '@/components/Sidebar';
import ProfileSection from '@/components/ProfileSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="h-screen flex items-center justify-center p-6 lg:p-12">
          <ProfileSection />
        </main>
      </div>
    </div>
  );
}
