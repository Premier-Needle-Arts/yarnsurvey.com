import Image from 'next/image'
import stockData from '@/images/screenshots/data.svg'

const stats = [
    { label: 'Founded', value: '2023' },
    { label: 'Surveys', value: '2' },
    { label: 'Responses', value: '14,000+' },
]

export function Info() {
    return (
        <section id="why">
            <div className="relative bg-blue-600 py-24 sm:py-32 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                            <div className="relative rounded-3xl overflow-hidden lg:max-w-lg">
                                <Image
                                    src={stockData}
                                    alt=""
                                    className="w-full h-auto lg:h-[500px] md:h-[300px] sm:h-[300px] object-contain"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="text-base leading-7 text-gray-700 lg:max-w-lg text-white">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
                                    Why are we doing this?
                                </h1>
                                <div className="max-w-xl">
                                    <p className="mt-6">
                                        As a cherished member of our yarn-loving community, your insights are the secret fiber 
                                        that weaves success into our brand's fabric. By participating in 
                                        this survey, you're not only helping us tailor our offerings to your unique tastes but also 
                                        shaping the future of the yarn industry.
                                    </p>
                                    <p className="mt-8">
                                        Your voice will have a direct impact to the yarn industry at large. The outcome of this 
                                        survey will be presented at the H+H Americas 2024 conference by Jan Horowitz of Berroco.
                                        Together, let's knit a brighter, more vibrant future for yarn enthusiasts everywhere. 
                                        Share your thoughts, and watch them transform into action!
                                    </p>
                                </div>
                            </div>
                            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-white pt-10 sm:grid-cols-4">
                                {stats.map((stat, statIdx) => (
                                    <div key={statIdx}>
                                        <dt className="text-sm font-semibold leading-6 text-white">{stat.label}</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}