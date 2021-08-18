import React from 'react';
import Head from 'next/head';
import { getSettingInfo } from 'pages/api/getWay/index' //接口
import SignIn from 'container/Auth/SignIn/SignIn';

export default function signInPage({indexData}) {
  return (
    <>
      <Head>
        <title>{`Sin Up |  + ${indexData?.title}`}</title>
      </Head>
      <SignIn indexData={indexData}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const indexData=await getSettingInfo();
  return {
    props: { indexData },
  };
}
