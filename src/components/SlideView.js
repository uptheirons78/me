import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { StyledMainWrapper } from "./styled/StyledSlide";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const SlideView = ({ projects }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <StyledMainWrapper>
      <Slider {...settings}>
        {projects.map(project => {
          const {
            title,
            description,
            displayDate,
            github,
            website,
            id,
          } = project.node;

          const thumbnail =
            project.node.thumbnailImage.childImageSharp.fluid.src;

          return (
            <Slide
              key={id}
              title={title}
              description={description}
              date={displayDate}
              github={github}
              website={website}
              thumbnail={thumbnail}
            />
          );
        })}
      </Slider>
    </StyledMainWrapper>
  );
};

export default SlideView;
