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

const BlogTwo = () => {
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
  }, []);

  const featuredBlog = blogDataOne[0];
  const sideBlogs = blogDataOne.slice(1, 3);

  const featDate = getDayAndMonth(featuredBlog?.publishedDate);

  return (
    <>
      <style>{`
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
          color: #e55b13 !important;
        }
        .read-more-btn:hover .arrow-circle {
          background-color: #e55b13 !important;
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
      `}</style>
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
                    {featuredBlog.image && (
                      <Image
                        src={featuredBlog.image}
                        alt={featuredBlog.title}
                        className="w-100 h-100 object-fit-cover rounded-4"
                        width={600}
                        height={320}
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
                      <span className="fw-bold" style={{ fontSize: '20px', lineHeight: '1.1' }}>
                        {featDate.day}
                      </span>
                      <span className="text-uppercase fw-semibold" style={{ fontSize: '11px' }}>
                        {featDate.month}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span
                      className="badge border text-secondary bg-transparent px-3 py-1.5 rounded-pill fw-semibold"
                      style={{ fontSize: '12px', borderColor: '#ddd' }}
                    >
                      {featuredBlog.category || 'Corporate'}
                    </span>
                    <span className="text-muted small">
                      By <strong className="text-dark">{featuredBlog.blogAuthor || 'Togeto Team'}</strong>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="fw-bold mb-3 flex-grow-1">
                    <Link
                      href={`/blog-details/${featuredBlog.id}`}
                      className="blog-title-link text-dark text-decoration-none"
                      style={{ fontSize: '24px', lineHeight: '1.3', fontWeight: 700 }}
                    >
                      {featuredBlog.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {featuredBlog.description}
                  </p>

                  {/* Read More */}
                  <div>
                    <Link
                      href={`/blog-details/${featuredBlog.id}`}
                      className="read-more-btn d-inline-flex align-items-center text-dark text-decoration-none fw-semibold"
                    >
                      <span style={{ fontSize: '15px' }}>Read More</span>
                      <span
                        className="arrow-circle ms-2 d-inline-flex align-items-center justify-content-center bg-dark text-white rounded-circle"
                        style={{
                          width: '28px',
                          height: '28px',
                          padding: '6px',
                          transition: 'background-color 0.2s ease',
                        }}
                      >
                        <RightArrowUpTwo />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Right stacked blogs */}
            <div className="col-lg-6 d-flex flex-column gap-4">
              {sideBlogs.map((blog) => {
                const bDate = getDayAndMonth(blog.publishedDate);
                return (
                  <div
                    key={blog.id}
                    className="blog-animation-item flex-grow-1"
                    style={{ opacity: 0 }}
                  >
                    <div className="blog-horizontal-card bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column flex-sm-row gap-4" style={{ border: 'none' }}>
                      {/* Left image wrapper */}
                      <div
                        className="position-relative flex-shrink-0"
                        style={{ width: '200px', height: '150px' }}
                      >
                        {blog.image && (
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            className="w-100 h-100 object-fit-cover rounded-4"
                            width={200}
                            height={150}
                          />
                        )}
                        {/* Date badge overlay */}
                        <div
                          className="position-absolute d-flex flex-column align-items-center justify-content-center text-white"
                          style={{
                            bottom: '10px',
                            right: '10px',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(4px)',
                            borderRadius: '8px',
                            width: '48px',
                            height: '48px',
                            zIndex: 2,
                          }}
                        >
                          <span className="fw-bold" style={{ fontSize: '16px', lineHeight: '1.1' }}>
                            {bDate.day}
                          </span>
                          <span className="text-uppercase fw-semibold" style={{ fontSize: '9px' }}>
                            {bDate.month}
                          </span>
                        </div>
                      </div>

                      {/* Right content details */}
                      <div className="d-flex flex-column justify-content-between flex-grow-1">
                        <div>
                          {/* Meta */}
                          <div className="d-flex align-items-center gap-3 mb-2.5">
                            <span
                              className="badge border text-secondary bg-transparent px-3 py-1 rounded-pill fw-semibold"
                              style={{ fontSize: '11px', borderColor: '#ddd' }}
                            >
                              {blog.category || 'Business'}
                            </span>
                            <span className="text-muted small">
                              By <strong className="text-dark">{blog.blogAuthor || 'Togeto Team'}</strong>
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="fw-bold mb-3">
                            <Link
                              href={`/blog-details/${blog.id}`}
                              className="blog-title-link text-dark text-decoration-none"
                              style={{ fontSize: '18px', lineHeight: '1.3', fontWeight: 700 }}
                            >
                              {blog.title}
                            </Link>
                          </h4>
                        </div>

                        {/* Read More */}
                        <div>
                          <Link
                            href={`/blog-details/${blog.id}`}
                            className="read-more-btn d-inline-flex align-items-center text-dark text-decoration-none fw-semibold"
                          >
                            <span style={{ fontSize: '14px' }}>Read More</span>
                            <span
                              className="arrow-circle ms-2 d-inline-flex align-items-center justify-content-center bg-dark text-white rounded-circle"
                              style={{
                                width: '28px',
                                height: '28px',
                                padding: '6px',
                                transition: 'background-color 0.2s ease',
                              }}
                            >
                              <RightArrowUpTwo />
                            </span>
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
    </>
  );
};

export default BlogTwo;
