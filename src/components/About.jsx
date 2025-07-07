import React from 'react';
import aboutImg from '../assets/about11.png'

const About = () => {

    return (
        <div>
            {/* информация о компании */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Экосистема IT-решений для вашего бизнеса с простым внедрением и гибким масштабированием</h2>
                        <p className='md:w-3/4 text-lg text-neutralGrey mb-8'>Мы предоставляем бизнесу возможность создать прозрачную систему коммуникаций на всех уровнях. Наши решения способствуют увеличению продаж, улучшению клиентского обслуживания и сервиса, а также ускорению взаимодействия в команде. Благодаря этому бизнес растет, а выручка увеличивается.</p>
                        <button className='btn-primary'>Узнать больше</button>
                    </div>
                </div>
            </div>

            {/* Статистика компании */}

            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>
                        Помогаем вашему бизнесу  <span className='text-brandPrimary'> расти и развиваться</span></h2>
                        <p className='md:w-3/4 text-lg text-neutralGrey mb-8'>Мы достигаем этого благодаря нашей омниканальной маркетинговой платформе, упорному труду и преданности делу.</p>
                    </div>
                    {/* Статистика */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/omnichannel1.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>12,345</h4>
                                    <p>Пользователей</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/growthChart1.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>678</h4>
                                    <p>Маркетинговых кампаний</p>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/multipleDevices1.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>45</h4>
                                    <p>Каналов коммуникации</p>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/Integrations1.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>123</h4>
                                    <p>Интеграций</p>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>

                </div>

            </div>

        </div>
    );
};
export default About; 