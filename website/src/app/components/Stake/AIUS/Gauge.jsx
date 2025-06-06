import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import polygon from '../../../assets/images/polygon.png';
import info_icon from '../../../assets/images/info_icon.png';
import mistral_icon from '../../../assets/images/mistral_icon.png';
import nemotron_icon from '../../../assets/images/nemotron_icon.png';
import deepseek_icon from '../../../assets/images/deepseek_icon.png';
import llama_icon from '../../../assets/images/llama.png';
import search_icon from '../../../assets/images/search_icon.png';
import PopUp from './PopUp';
import cross_icon from '../../../assets/images/cross_icon.png';
import arbius_logo_without_name from '@/app/assets/images/arbius_logo_without_name.png';
import clock_icon from '../../../assets/images/clock_icon.png';
import skeleton from '../../../assets/images/skeleton.png';
import prompts from '../../../assets/images/prompts.png';
import thunder from '../../../assets/images/thunder.png';
import governance from '../../../assets/images/governance.png';
import info_red from '../../../assets/images/info_red.png';

const getVoteStartDate = () => {
  return new Date('08/23/2024');
};
function Gauge() {
  const data = [
    {
      model_name: 'Mistral-large-2407',
      model_id: 'Mistral-large-2407',
      description: 'Text Generator',
      emissions: '21.1244%',
      prompts: '121,412',
      icon: mistral_icon,
    },
    {
      model_name: 'Nemotron-4-340b',
      model_id: 'Nemotron-4-340b',
      description: 'Text Generator',
      emissions: '21.1244%',
      prompts: '121,412',
      icon: nemotron_icon,
    },
    {
      model_name: 'Llama-3.1-405b',
      model_id: 'Llama-3.1-405b',
      description: 'Text Generator',
      emissions: '21.1244%',
      prompts: '121,412',
      icon: llama_icon,
    },
    {
      model_name: 'Deepseek-coder-v2',
      model_id: 'Deepseek-coder-v2',
      description: 'Code Generator',
      emissions: '21.1244%',
      prompts: '121,412',
      icon: deepseek_icon,
    },
  ];

  const [selectedModel, setSelectedModel] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState('');
  console.log('filteredData', filteredData);
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    // debounce the function call
    let time = setTimeout(() => {
      setFilteredData(
        data.filter((item) =>
          item.model_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      clearTimeout(time);
    }, 300);
  };

  const [timeRemaining, setTimeRemaining] = useState({});
  useEffect(() => {
    updateTimeRemaining(getVoteStartDate());
    const intervalId = setInterval(() => {
      updateTimeRemaining(getVoteStartDate());
      console.log('updateTimeRemaining');
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const updateTimeRemaining = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    setTimeRemaining({ days, hours, minutes });
  };

  return (
    <div className='mx-auto w-mobile-section-width max-w-center-width py-10 text-black-text lg:w-section-width lg:py-16'>
      {showPopUp && selectedModel !== null && (
        <PopUp setShowPopUp={setShowPopUp}>
          <>
            <div className='my-2 flex items-center justify-between'>
              <div className='flex items-center justify-start gap-3'>
                <div className='rounded-full bg-purple-background p-3'>
                  <Image
                    src={selectedModel?.icon}
                    className='h-[14px] w-[14px]'
                  />
                </div>
                <h1>{selectedModel?.model_name}</h1>
              </div>
              <div
                className='cursor-pointer'
                onClick={() => setShowPopUp(false)}
              >
                <Image src={cross_icon} className='h-[10px] w-[10px]' />
              </div>
            </div>

            <p className='mb-6 text-xs opacity-60'>
              {selectedModel?.description}
            </p>

            <div className='my-2 flex items-center justify-start gap-10'>
              <div>
                <div className='flex items-center justify-start gap-1'>
                  <Image src={thunder} className='h-[20px] w-[20px]' />
                  <h3 className='text-xs opacity-50'>Emissions</h3>
                </div>
                {/* <h1 className='mt-1'>{selectedModel?.emissions}</h1> */}
                <Image
                  src={skeleton}
                  className='mt-1 h-[20px] w-[100%] rounded-lg'
                />
              </div>
              <div>
                <div className='flex items-center justify-start gap-1'>
                  <Image src={governance} className='h-[16px] w-[16px]' />
                  <h3 className='text-xs opacity-50'>
                    Alloted Governance Power
                  </h3>
                </div>
                {/* <h1 className='mt-1'>{0}</h1> */}
                <Image
                  src={skeleton}
                  className='mt-1 h-[20px] w-[100%] rounded-lg'
                />
              </div>
            </div>
            <div className='my-4 flex items-center justify-start gap-10'>
              <div>
                <div className='flex items-center justify-start gap-1'>
                  <Image src={prompts} className='h-[20px] w-[20px]' />
                  <h3 className='text-xs opacity-50'>
                    Total Prompts Requested
                  </h3>
                </div>
                {/* <h1 className='mt-1'>{selectedModel?.prompts}</h1> */}
                <Image
                  src={skeleton}
                  className='mt-1 h-[20px] w-[100%] rounded-lg'
                />
              </div>
            </div>

            <div className='my-1 mt-6 flex items-center justify-between'>
              <h1>Add veAIUS</h1>
              <p className='text-xs'>Available Governance Power 0</p>
            </div>

            <div className='my-4'>
              <div className='flex items-center rounded-3xl border border-[#2F2F2F]'>
                <div className='box-border flex items-center justify-center gap-2 rounded-l-3xl bg-stake-input p-1 px-2'>
                  <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white-background'>
                    <Image
                      src={arbius_logo_without_name}
                      width={15}
                      alt='arbius'
                    />
                  </div>
                  <p className='pr- lato-bold text-[12px] text-aius'>veAIUS</p>
                </div>
                <div className='w-[94%]'>
                  <input
                    className='lato-bold w-[100%] rounded-r-3xl border-0 p-1 px-2 text-[15px] outline-none focus:ring-0'
                    type='number'
                    placeholder='0.0'
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-full rounded-[10px] border-[1.6px] border-[#DB000033] border-opacity-20 bg-[#FF555508] bg-opacity-5 p-3'>
                <div className='flex items-center justify-between gap-2'>
                  <Image src={info_red} className='h-[16px] w-[16px]' />
                  <h1 className='text-center text-[16px] text-[#DB0000]'>
                    Voting is currently closed!
                  </h1>
                  <div></div>
                </div>
              </div>
            </div>
            {/* <div className='flex justify-end'>
                                <button
                                    type="button"
                                    className="relative group bg-black-background py-[6px] px-8 lg:px-8 rounded-full flex items-center gap-3 "
                                >
                                    <div className="absolute w-[100%] h-[100%] left-0 z-0 py-2 px-5 rounded-full bg-buy-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="lato-bold  relative z-10 text-original-white mb-[3.3px] lg:mb-0 text-sm lg:text-[90%]">
                                        Vote
                                    </div>

                                </button>

                            </div> */}
          </>
        </PopUp>
      )}

      <div className='hidden w-full items-center justify-between lg:flex'>
        <div className='flex h-auto w-full items-center justify-start gap-4'>
          <h1 className='lato-bold mb-2 text-[40px] text-purple-text'>Gauge</h1>
          <div className='stake-box-shadow flex h-auto w-[70%] items-center justify-between rounded-md bg-white-background px-2 pr-3'>
            <input
              placeholder='Search Model name or ID'
              className='h-full w-full border-0 bg-transparent p-2 px-3 py-3 focus:outline-none'
              value={searchText}
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <Image src={search_icon} className='h-4 w-4' />
          </div>
        </div>

        <div className='flex w-[30%] items-center justify-end gap-2 text-end text-[14px] font-semibold text-purple-text'>
          <Image src={clock_icon} className='h-4 w-4' />
          {/* <h1 className='xl:text-[12px] 2xl:text-[16px]'>Voting starts in {timeRemaining.days} D : {timeRemaining.hours} Hr : {timeRemaining.minutes} Min</h1> */}

          <div className='flex items-center justify-start gap-2'>
            <h1 className='xl:text-[12px] 2xl:text-[16px]'>Voting starts in</h1>
            <Image
              src={skeleton}
              className='h-[20px] w-[100px] rounded-lg opacity-70 contrast-[90%] md:w-[80px] xl:w-[140px]'
            />
          </div>
        </div>
      </div>
      <div className='mb-2 flex flex-col items-start justify-between font-semibold um:mb-0 um:flex-row um:items-center lg:hidden'>
        <h1 className='lato-bold mb-2 text-[40px] text-purple-text'>Gauge</h1>
        <div className='flex items-center justify-end gap-2 text-end text-[.85rem] text-purple-text'>
          <Image src={clock_icon} className='h-4 w-4' />
          {/* <h1>Voting starts in   02 D : 13 Hr : 16 Min</h1> */}
          <div className='flex items-center justify-start gap-2'>
            <h1 className=''>Voting starts in</h1>
            <Image
              src={skeleton}
              className='h-[20px] w-[100px] rounded-lg opacity-70 contrast-[90%] md:w-[80px] xl:w-[140px]'
            />
          </div>
        </div>
      </div>
      <div className='stake-box-shadow flex h-auto items-center justify-between rounded-md bg-white-background px-2 pr-3 lg:hidden'>
        <input
          placeholder='Search Model name or ID'
          className='placeholder:lato-regular h-full w-full border-0 bg-transparent p-2 px-3 py-3 focus:outline-none'
          value={searchText}
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <Image src={search_icon} className='h-4 w-4' />
      </div>
      <div className='w-full overflow-x-auto xl:overflow-x-visible'>
        <div className='gauge-table-headings mb-4 mt-2 flex min-w-[1000px] items-center justify-between gap-8 rounded-lg bg-white-background px-5 pb-2 pt-2 font-semibold lg:px-10 lg:pb-6 lg:pt-6'>
          <div className='w-[25%]'>
            <h1>Model Name</h1>
          </div>
          <div className='w-[20%]'>
            <h1>Description</h1>
          </div>
          <div className='w-[20%]'>
            <h1>Emissions</h1>
          </div>
          <div className='w-[20%]'>
            <h1>Total Prompts Requested</h1>
          </div>
          <div className='w-[15%]'></div>
        </div>

        {filteredData?.map((item, key) => {
          return (
            <div
              className='gauge-table-item relative my-3 flex min-w-[1000px] items-center justify-between gap-8 rounded-lg bg-white-background px-5 pb-4 pt-4 font-semibold lg:px-10'
              key={key}
            >
              <div
                className='absolute left-[-125px] top-[10%] z-20 flex hidden items-center justify-start'
                id={key}
              >
                <div className='w-[108px] w-auto rounded-xl bg-white-background p-3'>
                  <h1 className='mb-1 text-[.6rem] text-aius-tabs-gray'>
                    Model ID
                  </h1>
                  <p className='text-[.6rem]'>{item?.model_id}</p>
                </div>
                <Image src={polygon} className='-ml-2' />
              </div>
              <div className='flex w-[25%] items-center justify-start gap-2'>
                <div className='flex h-[28px] w-[28px] items-center justify-center rounded-full bg-purple-background'>
                  <div className='relative flex h-[16px] w-[16px] items-center justify-center'>
                    <Image
                      src={item?.icon}
                      fill
                      className='h-full w-full object-contain'
                    />
                  </div>
                </div>
                <h1 className='text-[0.85rem] 2xl:text-base'>
                  {item?.model_name}
                </h1>
                <div
                  className='mt-[1px] cursor-pointer opacity-30 grayscale-[1] hover:opacity-100 hover:grayscale-0'
                  onMouseOver={() => {
                    document.getElementById(key).style.display = 'flex';
                  }}
                  onMouseLeave={() => {
                    document.getElementById(key).style.display = 'none';
                  }}
                >
                  <Image src={info_icon} height={12} width={12} />
                </div>
              </div>
              <div className='w-[20%]'>
                <h1 className='text-[0.85rem] 2xl:text-base'>
                  {item?.description}
                </h1>
              </div>
              <div className='w-[20%]'>
                <Image
                  src={skeleton}
                  className='h-[24px] w-[100%] rounded-lg'
                />
                {/* <h1>{item?.emissions}</h1> */}
              </div>
              <div className='w-[20%]'>
                <Image
                  src={skeleton}
                  className='h-[24px] w-[100%] rounded-lg'
                />
                {/* <h1>{item?.prompts}</h1> */}
              </div>
              <div className='flex w-[15%] justify-end'>
                {/* <button className='rounded-full bg-[#F1F0F3] text-[#AFAFB0] p-1 text-sm px-6' onClick={() => {
                                    setSelectedModel(item)
                                    setShowPopUp(true);


                                }}>Vote</button> */}
                <button
                  className='group relative flex items-center gap-3 rounded-full bg-black-background px-8 py-[6px] lg:px-8'
                  onClick={() => {
                    setSelectedModel(item);
                    setShowPopUp(true);
                  }}
                >
                  <div className='absolute left-0 z-0 h-[100%] w-[100%] rounded-full bg-buy-hover px-5 py-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                  <div className='lato-bold relative z-10 mb-[3.5px] text-sm text-original-white lg:mb-0 lg:text-[90%]'>
                    Vote
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gauge;
