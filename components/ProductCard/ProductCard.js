import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import Rating from 'components/UI/Rating/Rating';
import Favourite from 'components/UI/Favorite/Favorite';
import GridCard from '../GridCard/GridCard';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
export default function ProductCard({
  title,
  rating,
  location,
  price,
  logoUrl,
  type,
  ratingCount,
  gallery,
  slug,
  link,
  deviceType,
}) {
  return (
    <GridCard
      title={'title'}
      price={`$${price}/元`}
      viewDetailsBtn={
        <Link href={`link/[slug]`} prefetch={false}>
          <a>
            <FiExternalLink /> View Details
          </a>
        </Link>
      }
    >
      <img
          src={logoUrl}
      />
    </GridCard>
  );
}
