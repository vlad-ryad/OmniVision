import React from 'react';
import aboutImg from '../assets/pana2.png';
import employeeEngagement from '../assets/employeeEngagement1.png';

// Импортируем логотипы компаний
import Company1 from '../assets/company1.png';
import Company2 from '../assets/company2.png';
import Company3 from '../assets/company3.png';
import Company4 from '../assets/company4.png';
import Company5 from '../assets/company5.png';
import Company6 from '../assets/company6.png';

const Products = () => {
  const companies = [Company1, Company2, Company3, Company4, Company5, Company6];

  return (
    <div>
      {/* информация о компании */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} alt="О нашей платформе" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Увеличивайте эффективность продаж с помощью нашей платформы</h2>
            <p className='md:w-3/4 text-lg text-neutralGrey mb-8'> Мы предлагаем решение для омниканальной коммуникации с вашими клиентами, интегрируя все каналы связи в одной системе. Это позволяет ускорить обработку запросов, вести общение с клиентами на их удобных условиях, повысить уровень их удовлетворенности и значительно увеличить объемы продаж.</p>
            <button className='btn-primary'>Узнать больше</button>
          </div>
        </div>
      </div>

      {/* Статистика компании */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/3'>
            <img src={employeeEngagement} alt="Вовлечение сотрудников" />
          </div>

          {/* Статистика */}
          <div className='md:w-2/3 mx-auto'>
            <div>
              <p className='md:w-4/5 text-xl text-neutralGrey mb-8 leading-7'>Омниканальная модель работы успешно сочетается с работой в CRM — при поступлении обращений автоматически создаются карточки с информацией о покупателях и сделках. Омниканальные виртуальные системы коммуникаций UIS поддерживают интеграцию с большинством CRM.
                Омниканальная аналитика при наличии интеграции с CRM — это полноценный анализ рекламы и продуктовых предложений «от клика до сделки», поскольку учитывает все этапы воронки и весь путь клиента.</p>
              <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Партнеры</h5>

              <div>
                <div className='flex items-center gap-8 flex-wrap'>
                  {companies.map((company, index) => (
                    <img
                      key={index}
                      src={company}
                      alt={`Партнер ${index + 1}`}
                      className='cursor-pointer h-8 md:h-12'
                    />
                  ))}
                </div>
                <div className='flex items-center gap-8 mt-4'>
                  <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                    Подробнее
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className='inline-block ml-2'
                    >
                      <path d="M11.7139 11.4093L14.006 9.11723C14.2778 8.8454 14.2778 8.40467 14.006 8.13284L11.7139 5.84076M13.8021 8.62504L4.05713 8.62504" stroke="#4CAF4F"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;