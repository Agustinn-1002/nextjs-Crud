'use client'

import { useState } from "react"
import Like from "@/components/Like"
import Link from "next/link"

const Home = () => {

    const [data, setData] = useState([])
    const [input, setInput] = useState({
        id: 1,
        name: '',
    })

    const newData = (e) => {
        setInput({
            ...input,
            name: e.target.value
        })
    }
    const addData = (e) => {
        e.preventDefault()
        setData(data.concat(input))
        setInput({
            name: '',
            id: input.id + 1
        })
    }
    const deleteData = (id) => {
        setData(data.filter(e=>e.id !== id))
    }
    return (
        <main>
            <form className="flex items-center border-b border-pink-800 py-2" onSubmit={(e) => addData(e)}>
                
                    <input value={input.name} onChange={(e) => newData(e)} className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nueva tarea" aria-label="Full name" />
                    <button onClick={(e) => addData(e)} className="flex-shrink-0 bg-pink-800 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        AGREGAR
                    </button>
                
            </form>
            {data?.map(e =>
                <div key={e.id} className=' hover:scale-110 ease-out duration-300 bg-pink-800 rounded-lg my-5 p-5 flex items-center justify-between'>

                    <h2>{e.id} - {e.name}</h2>
                    <div className="flex w-14 justify-between s">
                        <Like></Like>
                        <button onClick={()=>deleteData(e.id)}>X</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Home