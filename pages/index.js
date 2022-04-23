import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useLogin from '../hooks/login'

export default function Home() {
  useLogin();
  return (
    <div>
      Home
    </div>
  )
}
