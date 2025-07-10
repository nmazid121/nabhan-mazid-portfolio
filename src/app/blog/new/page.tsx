import Sidebar from '@/components/Sidebar';
import BlogEditor from '@/components/BlogEditor';

export const metadata = {
  title: 'Create New Post - Nabhan Mazid',
  description: 'Create a new blog post',
};

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-12">
          <div className="max-w-4xl">
            <BlogEditor mode="create" />
          </div>
        </main>
      </div>
    </div>
  );
} 