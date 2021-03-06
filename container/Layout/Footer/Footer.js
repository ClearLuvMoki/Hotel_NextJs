import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import Footers from 'components/Footer/Footer';
import FooterMenu from './FooterMenu';

const Footer = ({ path, indexData }) => {
  return (
    <Footers
      path={path}
      logo={
        <Logo
          withLink
          linkTo="/"
          src={indexData?.logoSmallUrl}
          title={indexData?.title}
        />
      }
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} ReaQ, Inc.`}
    />
  );
};

export default Footer;
