import { Carousel } from "flowbite-react";
import React from 'react';
import bannerTest from "../assets/banner11.png"
import banner2 from "../assets/banner22.png"
import banner3 from "../assets/banner3.png"

const Home = () => { 
    return (
        <div className='bg-neutralSilver' id="home">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className="w-full mx-auto">
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={bannerTest} alt="banner1" />
                        </div>
                        {/*Главный текст */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Добро пожаловать в OmniVision! <span className="text-brandPrimary leading-snug">Платформа для вашего успеха.</span></h1>
                            <p className="text-xl text-neutralGrey mb-8">Рады приветствовать вас на сайте OmniVision — вашей омниканальной маркетинговой платформы. Начните трансформацию вашего маркетинга с нами!</p>
                            <button className="btn-primary">Обсудить проект</button>
                        </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner2} alt="banner2" />
                        </div>
                        {/*Главный текст */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Все инструменты для вашего маркетинга <span className="text-brandPrimary leading-snug"> в одном месте</span></h1>
                            <p className="text-xl text-neutralGrey mb-8">OmniVision предлагает широкий спектр инструментов для управления кампаниями, аналитики и автоматизации. Достигайте лучших результатов с нашим интуитивным интерфейсом!</p>
                            <button className="btn-primary">Обсудить проект</button>
                        </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner3} alt="banner3" />
                        </div>
                        {/*Главный текст */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Успешные кейсы <span className="text-brandPrimary leading-snug"> и довольные клиенты </span></h1>
                            <p className="text-xl text-neutralGrey mb-8">Узнайте, как лидеры рынка используют OmniVision для повышения эффективности своих маркетинговых кампаний. Читайте наши кейсы и отзывы довольных клиентов.</p>
                            <button className="btn-primary">Обсудить проект</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};
export default Home; 