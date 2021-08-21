import * as React from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';

const GlobalWrapper = styled.div(({ gutter }) => [
  tw`mx-auto max-w-2xl py-8 px-8`,
  gutter && tw`mb-16`,
]);

const GlobalHeader = styled.div(({ notRoot }) => [
  tw`mb-4`,
  notRoot && tw`mt-8`,
]);

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const header = isRootPath ? (
    <section tw="flex items-center justify-center min-h-screen max-h-screen min-w-full max-w-full bg-green-700">
      <h1 tw="text-pastel-pear text-6xl sm:text-8xl md:text-9xl mx-8 my-0">
        <Link to="/">{title}</Link>
      </h1>
    </section>
  ) : (
    <Link tw="font-bold text-xl no-underline mx-12 text-green-500" to="/">
      {title}
    </Link>
  );

  return (
    <>
      <GlobalHeader notRoot={!isRootPath}>{header}</GlobalHeader>
      <GlobalWrapper gutter={isRootPath}>
        <main>{children}</main>
        <footer>Made by the FIG team with love 💛</footer>
      </GlobalWrapper>
    </>
  );
};

export default Layout;
