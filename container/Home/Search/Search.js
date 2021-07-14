import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Container from 'components/UI/Container/Container';
// import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import GlideCarousel, {
  GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import SearchForm from './SearchForm';
import BannerWrapper, { SearchWrapper } from './Search.style';
import { Radio } from 'antd'


const HomeSearch = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={3}
      >
        <>
          <GlideSlide>
            <Image
              src="/images/banner/1.jpg"
              alt="Home banner 1"
              layout="fill"
              objectFit="cover"
            />
          </GlideSlide>
          <GlideSlide>
            <Image
              src="/images/banner/2.jpg"
              alt="Home banner 2"
              layout="fill"
              objectFit="cover"
            />
          </GlideSlide>
          <GlideSlide>
            <Image
              src="/images/banner/3.jpg"
              alt="Home banner 3"
              layout="fill"
              objectFit="cover"
            />
          </GlideSlide>
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          {/* <Heading
            {...searchTitleStyle}
            content="Latest reviews. Lowest prices."
          /> */}
          <Radio.Group defaultValue="hotels" >
            <Radio value="tree_time" key="tree_time">Tree Time</Radio>
            <Radio value="hotels" key="hotels">Hotels</Radio>
          </Radio.Group>
          <Text
            {...searchDescriptionStyle}
            content="动态获取"
          />
          <SearchForm />
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

HomeSearch.propTypes = {
  // searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

HomeSearch.defaultProps = {
  // searchTitleStyle: {
  //   color: '#2C2C2C',
  //   fontSize: ['20px', '24px', '28px'],
  //   lineHeight: ['28px', '30px', '30px'],
  //   mb: '9px',
  // },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '18px',
    m: '20px 0px'
  },
};

export default HomeSearch;
