import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      author: "Sarah Johnson",
      date: "2024-12-15",
      category: "Web Development",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Building Scalable Applications with Modern JavaScript Frameworks",
      excerpt: "A comprehensive guide to choosing the right framework for your next project and building for scale.",
      author: "Mike Chen", 
      date: "2024-12-10",
      category: "Development",
      readTime: "8 min read",
      image: "/placeholder.svg"
    },
    {
      title: "UX Design Principles That Drive Business Growth",
      excerpt: "Learn how effective UX design can directly impact your business metrics and customer satisfaction.",
      author: "John Smith",
      date: "2024-12-05",
      category: "Design",
      readTime: "6 min read", 
      image: "/placeholder.svg"
    },
    {
      title: "Cybersecurity Best Practices for Modern Web Applications",
      excerpt: "Essential security measures every development team should implement to protect user data and maintain trust.",
      author: "Sarah Johnson",
      date: "2024-11-28",
      category: "Security",
      readTime: "7 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Performance Optimization: Making Your Website Lightning Fast",
      excerpt: "Proven techniques to improve your website's loading speed and provide better user experiences.",
      author: "Mike Chen",
      date: "2024-11-20",
      category: "Performance",
      readTime: "10 min read",
      image: "/placeholder.svg"
    },
    {
      title: "The ROI of Digital Transformation for Small Businesses",
      excerpt: "How small businesses can leverage digital transformation to compete with larger enterprises and drive growth.",
      author: "John Smith",
      date: "2024-11-15",
      category: "Business",
      readTime: "9 min read",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Web Development", "Design", "Security", "Performance", "Business"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on modern web development and digital strategy
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;