"use cliente"

import { useState } from "react"
import { loginUser } from "@/lib/auth"

export default function Login(){
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(<>
    <form>
        <input type="text" placeholder=""></input>
    </form>
    </>)
}