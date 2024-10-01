import React from 'react'

const Card = ({image, titleHref, CardTitle, CardDescription, author, publishedAt, btnHref }) => {
    return (
        <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
            <img src={image} alt="" className="h-80 object-cover" />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a
                        href={titleHref ? titleHref : "/#"}
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        {CardTitle}
                    </a>
                </h3>
                <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                    {CardDescription}
                </p>
                <p className="mb-7 text-xs text-body-color dark:text-dark-6">
                    By {!author ? "Unknown" : author}, Date published: {new Date(publishedAt).toGMTString()}
                </p>

                <a href={btnHref ? btnHref : "#"} target='_blank' className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-blue-800 dark:border-dark-3 dark:text-dark-6">
                    View more
                </a>
            </div>
        </div>
    );
};
export default Card
