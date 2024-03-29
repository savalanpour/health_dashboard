import Head from 'next/head'
import dynamic from 'next/dynamic'
import s from '@/styles/Home.module.css'
import React from "react";
import {useRouter} from "next/router";
import data from "@/data/ample-data.json"
import {Input} from "antd";
const Chart = dynamic(() => import('@/components/Chart/Chart'), {
  ssr: false,
})
const StressChart = dynamic(() => import('@/components/StressChart/StressChart'), {
  ssr: false,
})
const HeartRateChart = dynamic(() => import('@/components/HeartRateChart/HeartRateChart'), {
  ssr: false,
})
const SleepChart = dynamic(() => import('@/components/SleepChart/SleepChart'), {
  ssr: false,
})

const { TextArea } = Input;

export default function Home() {
  const router = useRouter()
  // @ts-ignore
  const userData = data.find(element => element.id === +router.query.id)
  if(!userData) {
    return <div>not found</div>
  }
  console.log("id", router.query.id)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={s.main}>
        <StressChart stress={userData.averageStressLevel} />
        <div className={s.boxChart}>
          <div className={s.userName}>User {userData.id}</div>
          <div className={s.rowCard}>
            <div className={s.card}>
              <img src="/images/steps.png" width={140} className={s.image} />
              <div className={s.description}>
                <div className={s.title}>Step</div>
                <div className={s.count}>{userData.steps}</div>
              </div>
            </div>
            <div className={s.card}>
              <img src="/images/distance.png" width={140} className={s.image} />
              <div className={s.description}>
                <div className={s.title}>Distance In Meters</div>
                <div className={s.count}>{userData.distanceInMeters} m = {userData.distanceInMeters/1000} Km</div>
              </div>
            </div>
            <div className={s.card}>
              <img src="/images/activeKilocalories.png" width={140} className={s.image} />
              <div className={s.description}>
                <div className={s.title}>Active Kilocalories</div>
                <div className={s.count}>{userData.activeKilocalories} kcal</div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.rowChart}>
          <div className={s.itemChart}>
            <HeartRateChart rate={userData.averageHeartRateInBeats} />
          </div>
          <div className={s.itemChart} style={{justifyContent: "flex-end"}}>
            <SleepChart data={userData} />
          </div>
        </div>
        <div className={s.feedbackBox}>
          <div className={s.inputTitle}>Feedback</div>
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={400} className={s.input}/>
        </div>
        <div className={s.feedbackBox}>
          <div className={s.inputTitle}>Suggestion</div>
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={400} className={s.input}/>
        </div>
      </main>
    </>
  )
}
