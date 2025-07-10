import Sidebar from '@/components/Sidebar';
import BlogPost from '@/components/BlogPost';
import { notFound } from 'next/navigation';
import { supabase, BlogPost as BlogPostType } from '@/lib/supabase';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string): Promise<BlogPostType | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Nabhan Mazid`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Transform the Supabase data to match the BlogPost component's expected format
  const transformedPost = {
    id: post.id,
    slug: post.slug,
    title: post.title,
    content: post.content,
    excerpt: post.excerpt,
    date: post.created_at,
    readTime: post.read_time,
    tags: post.tags,
    author: post.author
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-6 lg:p-12">
          <div className="max-w-4xl">
            <BlogPost post={transformedPost} />
          </div>
        </main>
      </div>
    </div>
  );
} 