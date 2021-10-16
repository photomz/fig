/* eslint-disable global-require */
import React, { useState, useRef, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import { Transition } from '../../components/Transition';
import { H2 } from '../../styles/shared-styled-components';
import { addKeys } from '../../util';

const FocusTab = styled.a(({ selected }) => [
  tw`shadow-md flex items-center text-lg p-5 rounded-2xl hover:shadow-2xl bg-gray-200 transition duration-300 ease-in-out mb-4`,
  selected && tw`shadow-xl bg-green-500 text-gray-100`,
]);
const FocusText = styled.p(({ selected }) => [
  tw`mt-2`,
  selected ? tw`text-gray-200` : tw`text-gray-700`,
]);

const tabButtonData = addKeys([
  {
    header: 'When safety nets fail 🧨',
    p: 'Politicians love promising social mobility for all: “you can do it if you try”. But we recognize the sobering reality: that these promises ring hollow. If nobody intervenes, deserving children in Northern Thailand, deprived of proper nutrition, have and will remain trapped in a poverty feedback loop. Nobody’s life should end up a statistic.',
  },
  {
    header: 'Teach a school to fish 🐟',
    p: 'Volunteers Without Borders strives to architect self-sustaining efforts to give children the nutrition they desperately need and deserve. We know that “aid” is not enough. We don’t give them fish; rather, we teach them how to fish, with mushroom houses and raised beds vegetable gardens.',
  },
  {
    header: 'The most efficient cause for your donation dollars 🌾',
    p: 'We need your help to sow the seeds of the children’s future. If you donate $50 now, we will name the gardens in your honor, as a thank you for your gracious generosity.',
  },
]);

export const Features = () => {
  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  useEffect(() => {
    if (tabs.current.children[tab]) {
      // eslint-disable-next-line operator-linebreak
      tabs.current.style.height = `${tabs.current.children[tab].offsetHeight}px`;
    }
  }, [tab]);

  return (
    <section tw="relative mb-8 mt-8">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        tw="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      />

      <div tw="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div tw="pt-12 md:pt-20">
          {/* Section header */}
          <div tw="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <H2 tw="text-4xl mb-4">
              Endemic malnutrition and COVID-19 are keeping Thai students
              in&nbsp;
              <u>poverty</u>.
            </H2>
          </div>

          {/* Section content */}
          <div tw="md:grid md:grid-cols-12 md:gap-6">
            <div
              data-aos="fade-right"
              tw="mb-8 md:mb-0 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            >
              {tabButtonData.map(({ header, p, key }, i) => (
                <FocusTab
                  key={key}
                  selected={tab === i}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(i);
                  }}
                >
                  <div>
                    <h4 tw="font-bold leading-snug tracking-tight mb-1">
                      {header}
                    </h4>
                    <FocusText selected={tab === i}>{p}</FocusText>
                  </div>
                </FocusTab>
              ))}
            </div>

            <div
              data-aos="zoom-y-out"
              tw="relative flex flex-col text-center lg:text-right max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              ref={tabs}
            >
              <Transition
                show={tab === 0}
                appear
                tw="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div tw="relative inline-flex flex-col md:max-w-none mx-auto rounded">
                  <StaticImage
                    src="../../assets/images/mushroom-house.jpg"
                    alt="Female Thai students standing in a mushroom house"
                  />
                </div>
              </Transition>
              <Transition
                show={tab === 1}
                appear
                tw="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div tw="relative inline-flex flex-col md:max-w-none mx-auto rounded">
                  <StaticImage
                    src="../../assets/images/plantation.jpg"
                    alt="Farmers crouching over rice plantation"
                  />
                </div>
              </Transition>
              <Transition
                show={tab === 2}
                appear
                tw="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div tw="relative inline-flex flex-col md:max-w-none mx-auto rounded">
                  <StaticImage
                    src="../../assets/images/bed.jpg"
                    alt="Volunteers raking a raised vegetable bed"
                  />
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
