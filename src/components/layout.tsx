import * as React from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';

const GlobalWrapper = styled.div(({ gutter }) => [
  tw`mx-auto max-w-2xl py-8 px-8 overflow-hidden overflow-y-scroll lg:overflow-x-scroll`,
  gutter && tw`mb-16`,
]);

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const header = isRootPath ? (
    <section tw="flex items-center justify-center min-h-screen max-h-screen min-w-full max-w-full bg-green-700">
      <h1
        className="main-heading"
        tw="text-pastel-pear text-6xl sm:text-8xl md:text-9xl mx-8"
      >
        <Link to="/">{title}</Link>
      </h1>
    </section>
  ) : (
    <Link className="header-link-home" to="/" tw="mx-8 text-green-500">
      {title}
    </Link>
  );

  return (
    <>
      <header className="global-header">{header}</header>
      <GlobalWrapper gutter={isRootPath}>
        <main>{children}</main>
        <footer>Made by the FIG team with love 💛</footer>
      </GlobalWrapper>
    </>
  );
};

export default Layout;
