import React from 'react';
import { Footer } from "flowbite-react";
import { BsGithub} from "react-icons/bs";
import logo from '../assets/logoNew.png';
const MyFooter = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='space-y-4 mb-8'>
                        <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]'>OmniVision</span></a>
                        <div>
                            <p className='mb-1'>Все права защищены © 2024</p>


                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Компания" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">О нас</Footer.Link>
                                <Footer.Link href="#">Вопросы</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Продукты" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Кейсы</Footer.Link>
                                <Footer.Link href="#">Инструменты</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Контаткы" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Обратная связь</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Цены" />

                        </div>

                        <div>
                            <Footer.Title title="Блог" />
                        </div>

                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Vladislav Ryadinsky™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

                        <Footer.Icon href="https://github.com/vlad-ryad" icon={BsGithub} />

                    </div>
                </div>
            </div>
        </Footer>
    );
};
export default MyFooter; 