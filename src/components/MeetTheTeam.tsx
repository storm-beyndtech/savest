import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from 'react';
import bgImg from "../assets/img/bg/team-v1-bg.jpg"
import { teamMembers } from "@/lib/utils";


const MeetTheTeam: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1200) {
        setSlidesPerView(4);
      } else if (windowWidth >= 992) {
        setSlidesPerView(3);
      } else if (windowWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="team-one">
      <div
        className="team-one__bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="container">
        <div className="team-one__top flex flex-wrap">
          <div className="sec-title">
            <div className="sub-title">
              <h5>
                Our Workers
              </h5>
            </div>
            <h2 className="max-sm:!text-3xl my-6">Meet The Team</h2> 
          </div>
          <div className="btn-box">
            <button className="primaryBtn">More Team Members <span className="pl-6">&rarr;</span></button>
          </div>
        </div>
        <div className="team-one__bottom">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000 }}
            modules={[Autoplay, Navigation, Pagination]}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="flex h-auto">
                <div className="team-one__single">
                  <div className="team-one__single-img">
                    <div className="inner">
                      <img src={member.imageUrl} alt={member.name} />
                      <div className="social-links">
                        {member.socialLinks.map((link, linkIndex) => (
                          <a key={linkIndex} href={link.url}>
                            <span className={`icon-${link.platform}`} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="team-one__single-content">
                    <h3>
                      <a href="team-details.html">{member.name}</a>
                    </h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
