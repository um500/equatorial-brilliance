import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Why Every Business Needs a Professional Website in 2024',
    excerpt: 'In today\'s digital age, having a professional website is no longer optional. Learn why a strong online presence is crucial for business success.',
    category: 'Web Development',
    author: 'Equatorial IT Team',
    date: 'January 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Digital Marketing Strategies That Actually Work',
    excerpt: 'Discover proven digital marketing strategies that can help your business grow. From SEO to paid advertising, we cover all the essentials.',
    category: 'Digital Marketing',
    author: 'Marketing Team',
    date: 'January 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'The Importance of SEO for Local Businesses',
    excerpt: 'Local SEO can transform your business visibility. Learn how to optimize your online presence for local searches and attract more customers.',
    category: 'SEO',
    author: 'SEO Specialists',
    date: 'January 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Securing Your Business with CCTV Solutions',
    excerpt: 'Protect your business assets with modern CCTV and security systems. We explain the latest technologies and best practices for business security.',
    category: 'Security',
    author: 'Security Team',
    date: 'December 28, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'How AI is Transforming Content Creation',
    excerpt: 'Artificial Intelligence is revolutionizing how businesses create content. Explore the benefits and possibilities of AI-powered content.',
    category: 'AI & Technology',
    author: 'Tech Team',
    date: 'December 20, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Building a Strong Brand Identity',
    excerpt: 'Your brand identity sets you apart from competitors. Learn the key elements of creating a memorable and effective brand for your business.',
    category: 'Branding',
    author: 'Creative Team',
    date: 'December 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Blog
            </span>
            <h1 className="section-title mb-6">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, tips, and insights in technology, 
              digital marketing, and business growth strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-primary text-sm font-medium mb-3">
                  Featured • {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <button className="btn-primary inline-flex items-center gap-2 self-start">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Have Questions? <span className="gradient-text">Let's Talk</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you need advice on IT solutions or want to discuss a project, 
              our team is here to help.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
