import React from 'react';


const Memories = () => {
    const memories = [
        { id: 1, title: "Как найти подход к конфликтным клиентам", image: "/src/assets/memories11.png" },
        { id: 2, title: "Как создать шаблон для Email-рассылок в Контакт-Центре?", image: "/src/assets/memories22.png" },
        { id: 3, title: "Как создать аутсорсинговый контакт-центр?", image: "/src/assets/memories33.png" },
    ];

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Мощная платформа для вашего маркетинга</h2>
                <p className='text-base text-neutralGrey mb-8 md:w-3/4 mx-auto'>Откройте для себя блог OmniVision, где мы делимся последними новостями о технологиях, трендах и инновациях в маркетинге. Узнайте, как наша платформа помогает увеличить доход от членства, оптимизировать коммуникации и расширять сообщество</p>

            </div>

            {/* Блог */}

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    memories.map(memories => <div key={memories.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={memories.image} alt='' className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{memories.title}</h3>
                            <div className='flex items-center justify-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Читать далее
                                    <svg width="18"
                                        height="17"
                                        viewBox="0 0 18 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='inline-block ml-2'
                                    >

                                        <path d="M11.7139 11.4093L14.006 9.11723C14.2778 8.8454 14.2778 8.40467 14.006 8.13284L11.7139 5.84076M13.8021 8.62504L4.05713 8.62504" stroke="#4CAF4F" />
                                    </svg></a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};
export default Memories; 