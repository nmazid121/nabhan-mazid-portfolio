import Sidebar from '@/components/Sidebar';
import BlogEditor from '@/components/BlogEditor';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return {
    title: `Edit Post - Nabhan Mazid`,
    description: `Edit blog post: ${slug}`,
  };
}

export default async function EditPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-12">
          <div className="max-w-4xl">
            <BlogEditor mode="edit" slug={slug} />
          </div>
        </main>
      </div>
    </div>
  );
} 