import Head from "next/head";

const Header = (props) => {
  const title = props.title;
  return (
    <Head>
      <title>{title} | Learn NextJS</title>
    </Head>
  );
};

export default Header;
