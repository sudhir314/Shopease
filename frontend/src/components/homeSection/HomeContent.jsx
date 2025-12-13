import React from "react";
import { Link } from "react-router-dom";
import "./homeContent.css";
import { Categories, Newarrivals } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

const HomeContent = () => {
  return (
    <section className="home">
      <div className="home_container">
        
        {/* 1. HERO BANNER - Main Visual */}
        <div className="home_hero">
          <Link to="/products">
            <img
              src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1519,dpr-1"
              alt="Hero Banner"
              className="hero_img"
            />
          </Link>
        </div>

        {/* 2. CATEGORIES CAROUSEL */}
        <div className="section_container">
          <div className="section_header">
            <h2 className="section_title">SHOP BY CATEGORY</h2>
            <p className="section_subtitle">Curated for your lifestyle</p>
            <div className="title_underline"></div>
          </div>

          <div className="carousel_wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {Categories.map(({ id, image, title }) => (
                <SwiperSlide key={id}>
                  <Link to="/products">
                    <div className="category_card">
                      <div className="category_img_box">
                        <img src={image} alt={title} className="category_img" />
                      </div>
                      <h3 className="category_title">{title}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* 3. FEATURED BANNER */}
        <div className="promo_banner">
          <Link to="/products">
            <img
              src="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1"
              alt="Featured Collection"
            />
          </Link>
        </div>

        {/* 4. EXCLUSIVE COLLECTIONS (Grid Layout) */}
        <div className="section_container">
          <div className="section_header">
            <h2 className="section_title">EXCLUSIVE COLLECTIONS</h2>
            <div className="title_underline"></div>
          </div>

          <div className="collection_grid">
            <div className="collection_card">
              <div className="collection_img_box">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-475,dpr-1"
                  alt="Dreamspace"
                />
                <div className="overlay">
                  <button className="shop_btn">Shop Dreamspace</button>
                </div>
              </div>
              <div className="collection_info">
                <h3>DREAMSPACE</h3>
                <p>Carry your dreams into real life.</p>
              </div>
            </div>

            <div className="collection_card">
              <div className="collection_img_box">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-475,dpr-1"
                  alt="Zodiac"
                />
                <div className="overlay">
                  <button className="shop_btn">Shop Zodiac</button>
                </div>
              </div>
              <div className="collection_info">
                <h3>ZODIAC</h3>
                <p>Reflect your unique personality.</p>
              </div>
            </div>

            <div className="collection_card">
              <div className="collection_img_box">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-475,dpr-1"
                  alt="Pixel"
                />
                <div className="overlay">
                  <button className="shop_btn">Shop Pixel</button>
                </div>
              </div>
              <div className="collection_info">
                <h3>PIXEL</h3>
                <p>Modern pop-culture with vintage appeal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. NEW ARRIVALS */}
        <div className="section_container bg_gray">
          <div className="section_header">
            <h2 className="section_title">NEW ARRIVALS</h2>
            <p className="section_subtitle">The latest drops you can't miss</p>
            <div className="title_underline"></div>
          </div>

          <div className="carousel_wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {Newarrivals.map(({ id, image, title, subtitle }) => (
                <SwiperSlide key={id}>
                  <Link to="/products">
                    <div className="product_card">
                      <div className="product_img_box">
                        <img src={image} alt={title} />
                        <span className="badge">New</span>
                      </div>
                      <div className="product_details">
                        <span className="product_sub">{subtitle}</span>
                        <h3 className="product_title">{title}</h3>
                        <button className="text_btn">View Details</button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* 6. SOLUTIONS GRID (Charging / Work) */}
        <div className="section_container">
          <div className="two_banner_grid">
            <div className="banner_card">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1"
                alt="Charging"
              />
              <div className="banner_content">
                <h3>CHARGING SOLUTIONS</h3>
                <Link to="/products" className="shop_link">Shop Now</Link>
              </div>
            </div>
            <div className="banner_card">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1"
                alt="Work"
              />
              <div className="banner_content">
                <h3>WORK ESSENTIALS</h3>
                <Link to="/products" className="shop_link">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* 7. OUR STORY
        <div className="story_section">
          <div className="story_content">
            <h2 className="story_heading">OUR STORY</h2>
            <div className="story_line"></div>
            <p className="story_text">
              Established in 2025, <b>Shopease</b> is a design-obsessed lifestyle
              accessories brand managed by <b>Sudhir Kumar</b>. We are committed
              to making your everyday carry #lessordinary.
            </p>
            <p className="story_text">
              You can look forward to a carefully-crafted range of products,
              made from long-lasting materials, with designs that stand out
              and make your life easy.
            </p>
            <Link to="/about" className="story_btn">Read Our Journey</Link>
          </div>
          <div className="story_visual">
            <img
              src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,w-958,dpr-1"
              alt="Our Story"
            />
          </div>
        </div> */}

        {/* 8. NEWSLETTER */}
        <footer className="newsletter_section">
          <div className="newsletter_container">
            <h3>JOIN THE CLUB</h3>
            <p>Get exclusive access to new products, deals & surprise treats.</p>
            <div className="newsletter_form">
              <input type="email" placeholder="Enter your email address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default HomeContent;