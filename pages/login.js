import { useRef } from "react"


export default function login() {
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
              alert("Logged in!");
          }
          else
          {
              alert("Error");
          }
    }

  return (
    <div>
         <form>
            <input type="text" ref={usernameRef} required></input>
            <input type="password" ref={passwordRef} required></input>
            <input type="submit" onClick={submitHandler}></input>
        </form>
    </div>
  )
}
