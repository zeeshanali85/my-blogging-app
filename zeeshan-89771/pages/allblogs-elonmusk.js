import Image from "next/image";
export default function allblogs() {
    return (
<><h3 class="text-2xl font text-orange-300 px-28 py-3">All from Elon Musk</h3><section class="text-gray-600 body-font">
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
                            className="rounded-lg" />
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
                        <a class="mt-3 text-yellow-500 inline-flex items-center">

                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></>
    )
}