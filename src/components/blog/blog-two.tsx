import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Image from 'next/image';
import Link from 'next/link';
import { blogDataOne } from '@/data/blog-data';
import { RightArrowUpTwo } from '@/components/svg';

gsap.registerPlugin(ScrollTrigger);

// Helper function to extract day and month from standard dates
const getDayAndMonth = (dateString?: string) => {
  if (!dateString) return { day: '01', month: 'OCT' };
  const cleanDate = dateString.replace(',', ' ').trim();
  const parts = cleanDate.split(/\s+/);
  
  let day = '01';
  let month = 'OCT';
  
  if (parts.length >= 2) {
    if (/^\d+$/.test(parts[0])) {
      day = parts[0];
      month = parts[1].substring(0, 3).toUpperCase();
    } else if (/^\d+$/.test(parts[1])) {
      day = parts[1];
      month = parts[0].substring(0, 3).toUpperCase();
    }
  }
  return { day, month };
};

interface BlogTwoProps {
  blogs?: any[];
}

const BlogTwo = ({ blogs }: BlogTwoProps) => {
  const data = blogs && blogs.length > 0 ? blogs : blogDataOne;

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.blog-animation-item');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, [data]);

  const featuredBlog = data[0];
  const sideBlogs = data.slice(1, 3);
  const featDate = getDayAndMonth(featuredBlog?.publishedDate);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-large-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .blog-large-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important;
        }
        .blog-horizontal-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .blog-horizontal-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important;
        }
        .blog-title-link {
          transition: color 0.2s ease;
        }
        .blog-title-link:hover {
          color: var(--it-theme-1) !important;
        }
        .read-more-btn:hover .arrow-circle {
          background-color: var(--it-theme-1) !important;
        }
        @media (max-width: 575px) {
          .blog-horizontal-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .blog-horizontal-card > div:first-child {
            width: 100% !important;
            height: 200px !important;
          }
        }
      ` }} />
      <div id="blog" className="it-blog-area pt-130 pb-130 gray-bg">
        <div className="container">
          {/* Header */}
          <div className="row justify-content-center mb-65">
            <div className="col-12">
              <div className="it-section-title-box text-center mb-0">
                <span
                  className="it-section-subtitle mb-10"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#0f766e',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '14px',
                  }}
                >
                  Read Blogs
                </span>
                <h4
                  className="it-section-title mb-0 fw-bold"
                  style={{ fontSize: '46px', fontWeight: 800 }}
                >
                  Strategies and Insights.
                </h4>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row">
            {/* Left featured blog */}
            {featuredBlog && (
              <div className="col-lg-6 mb-4 mb-lg-0 blog-animation-item" style={{ opacity: 0 }}>
                <div className="blog-large-card bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column" style={{ border: 'none' }}>
                  {/* Image container */}
                  <div className="position-relative w-100 mb-4" style={{ height: '320px' }}>
                    {featuredBlog.detailsImage && (
                      <Image
                        src={featuredBlog.detailsImage}
                        alt={featuredBlog.title}
                        className="w-100 h-100 object-fit-cover rounded-4"
                        width={600}
                        height={320}
                        unoptimized={true}
                      />
                    )}
                    {/* Date badge overlay */}
                    <div
                      className="position-absolute d-flex flex-column align-items-center justify-content-center text-white"
                      style={{
                        bottom: '15px',
                        right: '15px',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(4px)',
                        borderRadius: '8px',
                        width: '56px',
                        height: '56px',
                        zIndex: 2,
                      }}
                    >
                      <span className="fw-bold" style={{ fontSize: '18px', lineHeight: '1.2' }}>{featDate.day}</span>
                      <span className="text-uppercase" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>{featDate.month}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="d-flex flex-column flex-grow-1">
                    {/* Meta info */}
                    <div className="d-flex align-items-center gap-3 mb-3 text-muted" style={{ fontSize: '13px' }}>
                      <span className="d-flex align-items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        By {featuredBlog.blogAuthor}
                      </span>
                      <span>•</span>
                      <span className="d-flex align-items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        {featuredBlog.commentCount || 0} Comments
                      </span>
                    </div>

                    {/* Title */}
                    <h5 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1.4' }}>
                      <Link href={`/blog-details-left-sidebar?id=${featuredBlog.id}`} className="blog-title-link text-dark text-decoration-none">
                        {featuredBlog.title}
                      </Link>
                    </h5>

                    {/* Excerpt */}
                    <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      {featuredBlog.description}
                    </p>

                    {/* Read More button */}
                    <div className="mt-auto">
                      <Link 
                        href={`/blog-details-left-sidebar?id=${featuredBlog.id}`} 
                        className="read-more-btn text-[#0077b6] text-decoration-none d-inline-flex align-items-center gap-2 fw-semibold"
                        style={{ fontSize: '14px' }}
                      >
                        {featuredBlog.btnText || 'Read More'}
                        <div 
                          className="arrow-circle d-flex align-items-center justify-content-center text-white"
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: '#0f766e',
                            transition: 'background-color 0.2s ease',
                          }}
                        >
                          <RightArrowUpTwo />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right side blogs column */}
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-4 h-100">
                {sideBlogs.map((blog, idx) => {
                  const dateInfo = getDayAndMonth(blog.publishedDate);
                  return (
                    <div 
                      key={blog.id || idx} 
                      className="blog-animation-item flex-grow-1" 
                      style={{ opacity: 0 }}
                    >
                      <div 
                        className="blog-horizontal-card bg-white p-4 rounded-4 shadow-sm h-100 d-flex gap-4 align-items-center"
                        style={{ border: 'none' }}
                      >
                        {/* Image wrapper */}
                        <div className="position-relative flex-shrink-0" style={{ width: '180px', height: '150px' }}>
                          {blog.image && (
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              className="w-100 h-100 object-fit-cover rounded-4"
                              width={180}
                              height={150}
                              unoptimized={true}
                            />
                          )}
                          {/* Small date badge */}
                          <div
                            className="position-absolute d-flex flex-column align-items-center justify-content-center text-white"
                            style={{
                              top: '10px',
                              left: '10px',
                              backgroundColor: 'rgba(0,0,0,0.6)',
                              backdropFilter: 'blur(4px)',
                              borderRadius: '6px',
                              width: '44px',
                              height: '44px',
                            }}
                          >
                            <span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2' }}>{dateInfo.day}</span>
                            <span className="text-uppercase" style={{ fontSize: '9px' }}>{dateInfo.month}</span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="d-flex flex-column h-100 justify-content-center">
                          {/* Meta */}
                          <div className="d-flex align-items-center gap-3 mb-2 text-muted" style={{ fontSize: '12px' }}>
                            <span className="d-flex align-items-center gap-1">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                              By {blog.blogAuthor}
                            </span>
                            <span>•</span>
                            <span className="d-flex align-items-center gap-1">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                              {blog.commentCount || 0}
                            </span>
                          </div>

                          {/* Title */}
                          <h6 className="mb-2" style={{ fontSize: '17px', fontWeight: '700', lineHeight: '1.4' }}>
                            <Link href={`/blog-details-left-sidebar?id=${blog.id}`} className="blog-title-link text-dark text-decoration-none">
                              {blog.title}
                            </Link>
                          </h6>

                          {/* Read More */}
                          <div>
                            <Link 
                              href={`/blog-details-left-sidebar?id=${blog.id}`} 
                              className="read-more-btn text-[#0077b6] text-decoration-none d-inline-flex align-items-center gap-2 fw-semibold"
                              style={{ fontSize: '13px' }}
                            >
                              {blog.btnText || 'Read More'}
                              <div 
                                className="arrow-circle d-flex align-items-center justify-content-center text-white"
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  backgroundColor: '#0f766e',
                                  transition: 'background-color 0.2s ease',
                                }}
                              >
                                <RightArrowUpTwo />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTwo;
