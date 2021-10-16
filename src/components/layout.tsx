import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';
import 'aos/dist/aos.css';

import { StaticImage } from 'gatsby-plugin-image';
import GradientCircle from './GradientCircle';
import { Button } from '../styles/shared-styled-components';

const GlobalWrapper = styled.div(({ blog, blank }) => [
  !blank && tw`mx-auto max-w-2xl py-8 px-8`,
  blog && tw`mb-16`,
]);

const GlobalHeader = styled.div(({ notRoot }) => [
  tw`mb-4`,
  notRoot && tw`-mt-4`,
]);

const StickyHeader = styled.header(({ top }) => [
  tw`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out`,
  !top && tw`bg-white blur shadow-lg`,
]);

const WhiteHeaderButton = styled.a(({ top }) => [
  tw`py-2 font-medium items-center md:bg-opacity-90 transition duration-300 ease-in-out text-gray-600 rounded hover:text-gray-900 px-5 flex`,
  top && tw`bg-white blur`,
]);

const RightArrowIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
      fillRule="nonzero"
    />
  </svg>
);

const Navbar = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollHandler = () =>
        window.pageYOffset > 10 ? setTop(false) : setTop(true);

      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }
    return () => {};
  }, [top]);

  return (
    <StickyHeader top={top}>
      <div tw="max-w-6xl mx-auto px-5 sm:px-6">
        <div tw="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div tw="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" tw="block w-8 h-8" aria-label="Cruip">
              <GradientCircle />
            </Link>
          </div>

          {/* Site navigation */}
          <nav tw="flex flex-grow">
            <ul tw="flex flex-grow m-0 mt-4 justify-end flex-wrap items-center">
              <li tw="mr-4">
                <Link to="/blog">
                  <WhiteHeaderButton top={top}>Blog</WhiteHeaderButton>
                </Link>
              </li>
              <li>
                <WhiteHeaderButton
                  top={top}
                  href="https://give.asia/campaign/help-thai-schoolchildren-eat#/"
                >
                  Donate
                </WhiteHeaderButton>
              </li>
              {/* <li>
                <Link to="/">
                  <GrayButton small>
                    <span>Get Beta</span>
                    <svg
                      tw="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </GrayButton>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </StickyHeader>
  );
};

const Layout = ({ location, title, children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const header = (
    <>
      <Navbar />
      {isRootPath && (
        <section tw="flex flex-col items-center justify-center min-h-screen max-h-screen min-w-full max-w-full bg-green-700">
          <div
            data-aos="zoom-y-out"
            tw="ml-4 w-32 h-32 sm:w-48 sm:h-48 mb-16 sm:mb-24"
          >
            <StaticImage src="../assets/images/fig.png" alt="FIG logo" />
          </div>
          <h1
            data-aos="zoom-y-out"
            tw="text-pastel-pear text-6xl text-center sm:text-7xl md:text-8xl mx-8 my-0"
          >
            {title}
          </h1>
          <h2
            tw="font-medium text-2xl sm:text-3xl mb-12 text-white"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Help Thai schoolchildren eat now.
            <br />
          </h2>
          <div tw="flex flex-row justify-center">
            <Link to="/blog">
              <Button
                small
                tw="ml-4 bg-black text-white font-sans text-xl rounded py-4 px-2 sm:py-2 sm:px-0 md:py-6 md:px-4 transition ease-in-out"
              >
                Wait, why?
              </Button>
            </Link>
            <Button
              as="a"
              small
              tw="ml-4 bg-green-200 text-black font-bold font-sans text-xl rounded py-4 px-2 sm:py-2 sm:px-0 md:py-6 md:px-4 shadow-xl hover:shadow-2xl transition ease-in-out"
              href="https://give.asia/campaign/help-thai-schoolchildren-eat#/"
            >
              Donate Now
              <span tw="ml-2 fill-current w-4 h-4">
                <RightArrowIcon />
              </span>
            </Button>
          </div>
        </section>
      )}
    </>
  );

  return (
    <>
      <GlobalHeader notRoot={!isRootPath}>{header}</GlobalHeader>
      <GlobalWrapper blog={location.pathname === '/blog'} blank={isRootPath}>
        <main>{children}</main>
        <footer tw="ml-4">Made by the FIG team with love 💛</footer>
      </GlobalWrapper>
    </>
  );
};

export default Layout;
