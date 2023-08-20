import Image from "next/image";

export default function allblogs() {
  return (
    <>
      <h3 class="text-2xl font text-orange-300 px-28 py-3">
        All from Bil Gates
      </h3>
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
                    He has achieved everything himself. He worked hard, spent a
                    lot of time reading and learning new things. And one day he
                    became very rich and very popular
                  </p>
                  <a class="mt-3 text-yellow-500 inline-flex items-center"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
