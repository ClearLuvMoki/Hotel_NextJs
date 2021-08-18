import React from 'react';
import Head from 'next/head';
import SignUp from 'container/Auth/SignUp/SignUp';
import { getSettingInfo } from 'pages/api/getWay/index' //接口

export default function signUpPage({indexData}) {
  return (
    <>
      <Head>
        <title>{`Sin Up |  + ${indexData?.title}`}</title>
      </Head>
      <SignUp indexData={indexData}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const indexData=await getSettingInfo();
  return {
    props: { indexData },
  };
}
