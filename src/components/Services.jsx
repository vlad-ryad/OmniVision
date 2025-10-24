import React from 'react';

// Импорт иконок сервисов
import Icon11 from '../assets/icons/Icons11.png';
import Icon22 from '../assets/icons/Icons22.png';
import Icon33 from '../assets/icons/Icons33.png';

// Импорт логотипов компаний
import Company1 from '../assets/company1.png';
import Company2 from '../assets/company2.png';
import Company3 from '../assets/company3.png';
import Company4 from '../assets/company4.png';
import Company5 from '../assets/company5.png';
import Company6 from '../assets/company6.png';

const Services = () => {
    const services = [
        { id: 1, title: 'Импорт и экспорт телефонной базы', description: "Импортируйте или экспортируйте ваши базы абонентов в нашу CRM быстро и удобно.", image: Icon11 },
        { id: 2, title: 'Настраивайте воронку продаж', description: "Настраивайте разные воронки под разные проекты, используя библиотеку шаблонов и сценариев.", image: Icon22 },
        { id: 3, title: 'Нормализация номеров', description: "Получите вашу базу в едином формате после автоматического преобразования загруженных номеров.", image: Icon33 },
    ];

    const companies = [Company1, Company2, Company3, Company4, Company5, Company6];

    return (
      <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
          <div className='text-center my-8'>
              <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Наши клиенты</h2>
              <p className='text-neutralGrey'> Мы работаем с некоторыми клиентами из списка</p>

              {/* Лого компаний */}
              <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                  {companies.map((logo, index) => (
                    <img key={index} src={logo} alt={`Company ${index + 1}`} />
                  ))}
              </div>

              {/* Информация сервиса */}
              <div className='mt-20 md:w-1/2 mx-auto text-center'>
                  <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Управляйте всеми маркетинговыми каналами с помощью единой платформы</h2>
                  <p className='text-neutralGrey'> Кому подходит наша омниканальная маркетинговая платформа?</p>
              </div>

              {/* Карточки продуктов */}
              <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                  {services.map(service => (
                    <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                                <img src={service.image} alt={service.title} className='-ml-5'/>
                            </div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    );
};

export default Services;
