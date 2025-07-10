import Sidebar from '@/components/Sidebar';
import BlogSection from '@/components/BlogSection';

export const metadata = {
  title: "Blog - Nabhan Mazid",
  description: "Thoughts, insights, and updates from Nabhan Mazid",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-12">
          <div className="max-w-4xl">
            <BlogSection />
          </div>
        </main>
      </div>
    </div>
  );
} 