import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <>
      <p class="m-10 text-xl text-center font-normal text-Orange-400 lg:text-xl sm:px-16 xl:px-60 dark:text-gray-400 bg-gray-200 w-500 h-500  hover:text-orange-300 rounded  ">
        Good Morning Reader!
      </p>

      <h3 class="text-2xl font text-orange-300 px-28">All Blogs</h3>

      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              <div class="p-4  md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <Image
                      src="/img1.jpg"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-lg"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Steve Jobs - Introducing
                    </h2>
                    <p class="leading-relaxed text-base">
                      Steven Paul Jobs (February 24, 1955 October 5, 2011) was
                      an American business magnate, inventor, and investor. He
                      was the co-founder, chairman, and CEO of Apple; the
                      chairman and majority shareholder of Pixar; a member of
                      The Walt Disney Companys board of directors following its
                      acquisition of Pixar; and the founder, chairman, and CEO
                      of NeXT. He was a pioneer of the personal computer
                      revolution of the 1970s and 1980s, along with his early
                      business partner and fellow Apple co-founder Steve
                      Wozniak.
                    </p>
                    <span class="mt-3 text-yellow-500 inline-flex items-center">
                      <Link href="/allblogs-steve">see all from this user</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              <div class="p-4  md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <Image
                      src="/img4.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-lg"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Elon Musk - Success
                    </h2>
                    <p class="leading-relaxed text-base">
                      Elon Musk is a South African-born American entrepreneur
                      who is the CEO of Tesla, Inc. and SpaceX.He is also a
                      cofounder of PayPal and a major investor in electric
                      vehicles and renewable energy.Musk is the richest person
                      in history and a visionary leader in the fields of
                      automobile, aerospace, and energy.He has a passion for
                      exploring space and reaching Mars.
                    </p>
                    <span class="mt-3 text-yellow-500 inline-flex items-center">
                      <Link
                        href="/allblogs-elonmusk
                      "
                      >
                        see all from this user
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              <div class="p-4  md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <Image
                      src="/img6.jpg"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-lg"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Bil Gates - Softwares
                    </h2>
                    <p class="leading-relaxed text-base">
                      Bill Gates is a great man in our society. His contribution
                      to development of information technologies is simply huge.
                      He has achieved everything himself. He worked hard, spent
                      a lot of time reading and learning new things. And one day
                      he became very rich and very popular
                    </p>
                    <span class="mt-3 text-yellow-500 inline-flex items-center">
                      <Link href="/allblogs-bilgates">
                        see all from this user
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              <div class="p-4  md:w-full">
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <Image
                      src="/img1.jpg"
                      width={500}
                      height={800}
                      alt="Picture of the author"
                      className="rounded-0g "
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Steve Jobs - Strulgge
                    </h2>
                    <p class="leading-relaxed text-base">
                      Steve Jobs was known to be a difficult, hard to work with
                      personality who didn t tolerate failure. When it came to
                      him admitting he made a mistake, he wasn t very good at
                      it. The famous example of an obvious Apple mistake was
                      #Antennagate.
                    </p>
                    <span class="mt-3 text-yellow-500 inline-flex items-center">
                      <Link href="/allblogs-steve">see all from this user</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
