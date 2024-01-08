import Head from 'next/head'
import s from '@/styles/Home.module.css'
import React from "react";
import data from "@/data/ample-data.json"
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={s.main}>
        <div className={s.explainBox}>
          <div style={{fontWeight: "bold"}}>Dear Nursing Team,</div>
          <div>
            <p className={s.paragraph}>
            I would like to request your expertise for an important project we are working on. Our goal is to analyze and provide feedback on individuals' stress levels, utilizing a range of health metrics. To facilitate this, I will provide you with detailed health profiles for 20 different users. Each profile includes key metrics such as average stress level, daily step count, distance traveled, calorie intake, heart rate, and sleep patterns.
            </p>
            <p className={s.paragraph}>
          Your role will be to thoroughly review these profiles and offer your professional feedback and suggestions. For each user's profile, we would greatly appreciate it if you first assess the user's current health and stress status based on the provided data. Then, please provide specific suggestions for improvements or changes that the user could implement, based on their unique health information.
            </p>
            <p className={s.paragraph}>
          Your nursing expertise is invaluable in interpreting these data points and offering personalized advice. Your feedback and suggestions are crucial in guiding these individuals to better manage their stress and enhance their overall health.
            </p>
            <p className={s.paragraph}>
              We would like you to structure your response with one paragraph explaining your assessment of the user's current health and stress status, and a second paragraph offering suggestions related to their stress management, considering the health criteria provided.
            </p>
          </div>
        </div>
        <div className={s.rowCard}>
          {data.map(item => {
            return (
              <Link href={`/dashboard/${item.id}`} style={{flex: 1}}>
                <div className={s.card}>
                  <img src="/images/user-svgrepo-com.svg" width={140} className={s.image} />
                  <div className={s.description}>
                    <div className={s.title}>user {item.id}</div>
                    <div className={s.count}>Stress: {item.averageStressLevel}</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}
