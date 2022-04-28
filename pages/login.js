import { useRef } from "react";
import useLogin from "../hooks/login";
import styles from "./css/login.module.css"
import { useRouter } from "next/dist/client/router";


export default function Login() {
  if (typeof window !== "undefined" && localStorage.getItem("token")) 
  {
    //redirect to 
  }
    let usernameRef = useRef();
    let passwordRef = useRef();

    const submitHandler = async(e) =>
    {
        e.preventDefault();
        let data = {
            username:usernameRef.current.value,
            password:passwordRef.current.value,
        }
        const response = await fetch("/api/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });

          const output = await response.text();
          console.log(JSON.parse(output));
          const parsedData = JSON.parse(output)
          if(parsedData.success)
          {
              localStorage.setItem("token",parsedData.token);
              location.reload();
          }
          else
          {
              alert("Error");
          }
    }

  return (
    <div className={styles.background}>
      <div className={styles.logo}></div>
      <div className={styles.card}>
        <h1>Sign in</h1>
        <small> Login to your account</small>
      <form>
            <input type="text" ref={usernameRef} placeholder="Username" required></input>
            <input type="password" ref={passwordRef} placeholder="Password" required></input>
            <input type="submit" className={styles.submit} value="Sign in" onClick={submitHandler}></input>
        </form>
      </div>
    </div>
  )
}
