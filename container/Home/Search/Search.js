import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Container from 'components/UI/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import GlideCarousel, {
  GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import SearchForm from './SearchForm';
import BannerWrapper, { SearchWrapper } from './Search.style';
import { Radio } from 'antd'


const HomeSearch = ({ searchTitleStyle, searchDescriptionStyle,indexData }) => {
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={indexData?.attachments?.length}
      >
        <>
          {indexData?.attachments?.map((item,index)=>(
              <GlideSlide key={`${item}-${index}`}>
                <img
                    src={item.url}
                    alt={`Home banner ${index+1}`}
                />
              </GlideSlide>
          ))}
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          <Heading
            {...searchTitleStyle}
            content={indexData?.indexTitle}
          />
          
          {/* <Text
            {...searchDescriptionStyle}
            content={indexData.indexTitle}
          /> */}
          <Text
              {...searchDescriptionStyle}
              content={indexData.indexSubtitle}
          />
          <Radio.Group defaultValue="hotels" >
            <Radio value="tree_time" key="tree_time">Tree Time</Radio>
            <Radio value="hotels" key="hotels">Hotels</Radio>
          </Radio.Group>
          <SearchForm />
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

HomeSearch.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    m: '20px 0px'
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '18px',
    m: '20px 0px'
  },
};

export default HomeSearch;
