import Image from 'next/image'
import stockGift from '@/images/screenshots/gift.svg'

const stats = [
    { label: 'Past Winners', value: '50' },
    { label: 'Prizes Awarded', value: '$1,000+' },
]

export function InfoTwo() {
    return (
        <section
            id="what"
        >
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    What's in it for you?
                                </h1>
                                <div className="max-w-xl">
                                    <p className="mt-6">
                                        We understand that your time is valuable, and we just want to make it worth your while to share your thoughts and feedback with us!
                                    </p>
                                    <p className="mt-6">
                                        We're excited to announce that we're giving away $1,000 in small denominational gift cards as a token of appreciation for completing our survey. Winners will be randomly selected from collected responses after the survey has closed.
                                    </p>
                                    <p className="mt-6">
                                        Be sure to leave your email at the end of the survey so we can contact you!
                                    </p>
                                </div>
                            </div>
                            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                                {stats.map((stat, statIdx) => (
                                    <div key={statIdx}>
                                        <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="lg:pr-4">
                            <div className="relative rounded-3xl overflow-hidden lg:max-w-lg">
                                <Image
                                    src={stockGift}
                                    alt=""
                                    className="w-full h-auto lg:h-[500px] md:h-[300px] sm:h-[300px] object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}