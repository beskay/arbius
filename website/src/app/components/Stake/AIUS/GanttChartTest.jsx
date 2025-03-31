'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import info_icon from '../../../assets/images/info_icon.png';
import votingEscrow from '../../../abis/votingEscrow.json';
// import config from "../../../../sepolia_config.json"
import loadConfig from './loadConfig';
import { useAccount, useContractRead, useContractReads } from 'wagmi';

import {
  getTokenIDs,
  getTotalEscrowBalance,
  init,
} from '../../../Utils/gantChart/contractInteractions';
const CustomGanttChart = ({ allStakingData }) => {
  /*const tasks = [
    {
        "staked": 1.6139999999,
        "endDate": "2025-03-13",
        "startDate": "2024-11-18",
        "currentDate": "12/2/2024",
        "governancePower": 0.222621759115908,
        "veAIUSBalance": 0.25429894162420147,
        "stake_start": 0,
        "staked_till_now": 1,
        "stake_completion": 3
    },
    {
        "staked": 0.02,
        "endDate": "2025-01-16",
        "startDate": "2024-11-23",
        "currentDate": "12/2/2024",
        "governancePower": 0.001224387363584532,
        "veAIUSBalance": 0.001475163118131868,
        "stake_start": 0,
        "staked_till_now": 1,
        "stake_completion": 1
    },
    {
        "staked": 0.0000001,
        "endDate": "2025-01-27",
        "startDate": "2024-11-24",
        "currentDate": "12/2/2024",
        "governancePower": 0.01954659436602037,
        "veAIUSBalance": 0.020525958994708996,
        "stake_start": 0,
        "staked_till_now": 1,
        "stake_completion": 4
    }
  ];*/
  const tasks = allStakingData?.allStakes ? allStakingData?.allStakes : [];
  const today = new Date();
  const earliestStart = new Date(
    Math.min(...tasks.map((task) => new Date(task.startDate)))
  );
  const latestEnd = new Date(
    Math.max(...tasks.map((task) => new Date(task.endDate)))
  );

  // Calculate the actual number of months
  const monthDiff =
    (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 +
    latestEnd.getMonth() -
    earliestStart.getMonth();

  // Adjust the end date only if the span is less than 5 months
  const adjustedLatestEnd =
    monthDiff < 8
      ? new Date(new Date(earliestStart).setMonth(earliestStart.getMonth() + 8))
      : latestEnd;

  //const minEndDate = new Date(earliestStart);
  //minEndDate.setMonth(minEndDate.getMonth() + 8);
  //const adjustedLatestEnd = latestEnd > minEndDate ? latestEnd : minEndDate;

  const totalDays = (adjustedLatestEnd - earliestStart) / (1000 * 60 * 60 * 24);
  const months = [];

  const getElapsedAndRemainingPercentages = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const totalDuration = endDate - startDate;
    const elapsedDuration = Math.max(
      0,
      Math.min(today - startDate, totalDuration)
    );
    const remainingDuration = Math.max(0, totalDuration - elapsedDuration);
    return {
      elapsed: (elapsedDuration / totalDuration) * 100,
      remaining: (remainingDuration / totalDuration) * 100,
    };
  };
  const getPositionAndWidth = (start, end) => {
    const startPosition =
      (new Date(start) - earliestStart) / (1000 * 60 * 60 * 24);
    const width = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
    return {
      left: `${(startPosition / totalDays) * 100}%`,
      width: `${(width / totalDays) * 100}%`,
    };
  };
  const generateMonthTimeline = () => {
    //const months = [];
    let currentDate = new Date(earliestStart);
    currentDate.setDate(1); // Start from the first day of the month
    while (currentDate <= adjustedLatestEnd) {
      months.push(new Date(currentDate));
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return months.map((month, index) => {
      const position = (month - earliestStart) / (1000 * 60 * 60 * 24);
      const width =
        ((index === months.length - 1 ? totalDays - position : 30) /
          totalDays) *
        100;
      //console.log(month, index, "MI")
      return (
        <div
          key={month.toISOString()}
          className='month-marker'
          style={{
            left: `${(position / totalDays) * 100 < -6 ? -6 : (position / totalDays) * 100}%`,
            width: `${width}%`,
            color: '#4A28FF',
          }}
        >
          {/*month.toLocaleString('default', { month: 'short', year: 'numeric' })*/}
            { months.length < 5 || index % 3 === 0 ?
                  index == months.length - 1 ? ""
                  : new Intl.DateTimeFormat('en', { year: '2-digit', month: 'short' }).format(month)
              : ""
            }
        </div>
      );
    });
  };

  function getDaysDifference(start, end) {
    start = new Date(start);
    end = new Date(end);

    // Calculate the difference in milliseconds
    const diffInMillis = end - start;

    // Convert milliseconds to days
    const diffInDays = diffInMillis / (1000 * 60 * 60 * 24);
    return diffInDays;
  }

  function convertToUSDate(dateString) {
    const date = new Date(dateString);

    // Get month, day, and year
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    const year = date.getFullYear();

    // Pad month and day with leading zeros if necessary
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');

    // Return the formatted date string
    return `${formattedMonth}/${formattedDay}/${year}`;
  }

  function getMonthsLength() {
    try {
      const gantt = document.getElementsByClassName('gantt-chart')[0];
      if (months.length < 5) {
        gantt.style.width = '70%';
        gatt.style.paddingLeft = '5%';
      } else {
        gantt.style.width = '100%';
      }
      return months.length;
    } catch (err) {
      return 0;
    }
  }
  return (
    <div className='stake-box-shadow stake-box-shadow relative h-full rounded-2xl bg-white-background px-10 pt-8'>
      <h1 className='text-[20px] font-semibold text-purple-text'>Staking</h1>
      <div className='mb-3 mt-6 flex items-center justify-between'>
        <div>
          <h2 className='text-[14px] font-semibold text-aius-tabs-gray'>
            First unlock in
          </h2>
          <h2 className='text-[16px] font-semibold'>
            {allStakingData?.firstUnlockDateMinutes &&
            allStakingData?.firstUnlockDateMinutes > 0
              ? allStakingData?.firstUnlockDateMinutes + ' minutes'
              : allStakingData?.firstUnlockDateHours &&
                  allStakingData?.firstUnlockDateHours > 0
                ? allStakingData?.firstUnlockDateHours + ' hours'
                : allStakingData?.firstUnlockDate
                  ? allStakingData?.firstUnlockDate == 1
                    ? '1 day'
                    : allStakingData?.firstUnlockDate + ' days'
                  : '0 days'}
          </h2>
        </div>
        <div>
          <h2 className='text-[14px] font-semibold text-aius-tabs-gray'>
            Total Staked
          </h2>
          <h2 className='text-[16px] font-semibold'>
            {allStakingData?.totalStaked
              ? allStakingData?.totalStaked?.toFixed(2)
              : '0'}{' '}
            <span className='text-[11px] font-medium'>AIUS</span>
          </h2>
        </div>
        <div className='relative'>
          <h2 className='text-[14px] font-semibold text-aius-tabs-gray'>
            Governance Power
          </h2>
          <div className='flex items-center justify-start gap-1'>
            <h2 className='text-[16px] font-semibold'>
              {allStakingData?.totalGovernancePower
                ? allStakingData?.totalGovernancePower?.toFixed(2)
                : '0'}
            </h2>
            <div
              className='cursor-pointer opacity-30 grayscale-[1] hover:opacity-100 hover:grayscale-0'
              onMouseOver={() => {
                document.getElementById('info').style.display = 'flex';
              }}
              onMouseLeave={() => {
                document.getElementById('info').style.display = 'none';
              }}
            >
              <Image src={info_icon} height={13} width={13} alt='' />
            </div>
          </div>

          <div
            id='info'
            className='stake-box-shadow absolute left-0 top-12 z-40 hidden w-[150px] rounded-xl bg-white-background p-2'
          >
            <h1 className='text-[.6rem] opacity-60'>
              As your stake(s) age, this value decays from the original veAIUS
              balance. To increase this value, extend your stake(s).{' '}
            </h1>
          </div>
        </div>
      </div>

      <div className='pt-2' id='gantt-chart'>
        <div className='gantt-chart'>
          {tasks.map((task, index) => {
            const { elapsed, remaining } = getElapsedAndRemainingPercentages(
              task.startDate,
              task.endDate
            );
            return (
              <div key={index} className={`task-row ${tasks?.length == 1 ? "mb-[80px]" : "mb-[20px]"}`}>
                <div className='task-info'>
                  {/* <span className="task-name">{task.name}</span>
                                    <span className="task-dates">
                                        {new Date(task.startDate).toLocaleDateString()} - {new Date(task.endDate).toLocaleDateString()}
                                    </span> */}
                </div>
                <div className='task-bar-container my-4'>
                  <div
                    className='task-bar'
                    style={getPositionAndWidth(task.startDate, task.endDate)}
                  >
                    <div
                      className='task-progress-elapsed'
                      style={{ width: `${elapsed}%` }}
                    />
                    <div
                      className='task-progress-remaining'
                      style={{ width: `${remaining}%` }}
                    />
                  </div>
                  <div
                    className='absolute bottom-[8px]'
                    style={getPositionAndWidth(task.startDate, task.endDate)}
                  >
                    <h1 className='w-max text-[.65rem]'>
                      <span className='font-semibold opacity-60'>
                        Locked Until
                      </span>{' '}
                      <span className='ml-1 opacity-100'>
                        {convertToUSDate(task?.endDate)}
                      </span>
                    </h1>
                  </div>
                  <div
                    className='absolute top-[8px] flex min-w-[160px] justify-between'
                    style={getPositionAndWidth(task.startDate, task.endDate)}
                  >
                    <h1 className='whitespace-pre text-[.65rem] font-semibold text-purple-text opacity-80'>
                      {task?.staked < 1 ? task?.staked : task?.staked.toFixed(2)} AIUS Staked
                    </h1>
                    { getDaysDifference(task?.startDate, task?.endDate) < 70 ?
                      <span className="text-[.65rem] text-purple-text mx-[5px] mt-[-1.5px]">|</span>
                      : null
                    }
                    <h1
                      className={`whitespace-pre text-[.65rem] font-semibold text-purple-text`}
                    >
                      {task?.initialBalance?.toFixed(2)} veAIUS
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='timeline'>
            {generateMonthTimeline()}
            {console.log(getMonthsLength(), 'gantt chart months length')}
          </div>
          <style jsx>{`
            .gantt-chart {
              padding-top: 10px;
            }
            .timeline {
              position: relative;
              bottom: 0;
              font-size: 0.65rem;
              left: 0;
              right: 0;
              height: 20px;
              display: flex;
            }
            .month-marker {
              height: 100%;
              border-left: 1px solid #ccc;
              padding-left: 5px;
              font-size: 0.8em;
              color: #4a28ff;
            }
            .task-row {
              display: flex;
              align-items: center;
            }
            .task-info {
            }
            .task-name {
              font-weight: bold;
              display: block;
            }
            .task-dates {
              font-size: 0.8em;
              color: #666;
            }
            .task-bar-container {
              flex-grow: 1;
              height: 0.4rem;
              border-radius: 4rem;
              background-color: #fff;
              position: relative;
            }
            .task-bar {
              position: absolute;
              height: 100%;
              border-radius: 4rem;
              display: flex;
            }
            .task-progress-elapsed {
              height: 100%;
              background-color: #4a28ff;
              border-radius: 4rem;
            }
            .task-progress-remaining {
              height: 100%;
              background-color: #eeeeee;
              border-top-right-radius: 4rem;
              border-bottom-right-radius: 4rem;
              position: relative;
              left: -2px;
            }
          `}</style>
        </div>
      </div>
      {/* tasks?.length == 0 ? <div className='flex justify-center items-center'>
                <div className=' bg-[#fff] rounded-2xl w-full h-full flex justify-center items-center'>
                    <h1 className='text-[#4A28FF] text-[20px] font-semibold'>No Stakes Found</h1>
                </div>
            </div> : null */}
    </div>
  );
};
export default CustomGanttChart;
