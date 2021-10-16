/* eslint-disable import/prefer-default-export */
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button, H1 } from '../../styles/shared-styled-components';

const BgGradient = styled.section`
  background-image: linear-gradient(
    to top left,
    #1db954 20%,
    #2f8cdf 40%,
    #56f 60%,
    #780ea7 100%
  );
  ${tw`relative w-screen px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20 flex justify-center items-center flex-col text-center h-screen`};
`;

const RightArrowIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
      fillRule="nonzero"
    />
  </svg>
);

// TODO: Alter logo
export const HeroHome = () => (
  <BgGradient tw="text-gray-100">
    <div data-aos="zoom-y-out" tw="w-24 h-24 sm:w-32 sm:h-32 mb-8 sm:mb-16">
      <RightArrowIcon />
    </div>
    <H1
      tw="text-5xl sm:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
      data-aos="zoom-y-out"
    >
      Song Bot
    </H1>
    <div tw="max-w-3xl mx-auto">
      <h2
        tw="font-medium text-xl sm:text-2xl md:text-3xl mb-12"
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        Bring order to your Spotify library.
        <br />
        Have an AI bot make smart & personal playlists.
      </h2>
      <div
        tw="max-w-xs mx-auto text-xl sm:max-w-none sm:flex sm:justify-center"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <Button
          small
          tw="ml-4 bg-black rounded py-4 px-2 sm:py-2 sm:px-0 md:py-6 md:px-4 shadow-md hover:shadow-2xl transition ease-in-out"
          href="#0"
        >
          Help them now
          <span tw="ml-2 fill-current w-4 h-4">
            <RightArrowIcon />
          </span>
        </Button>
      </div>
    </div>
  </BgGradient>
);
