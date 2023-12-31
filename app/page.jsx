'use client'

import { useState } from "react"
import Like from "@/components/Like"
import { motion } from "framer-motion"

const Home = () => {
    const [vewData, setVewData] = useState(undefined)
    const [editInput, setEditInput] = useState(false)
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
        if (data.length >= 12 && window.innerWidth <= 1700) return alert('No se Puede Añadir mas de 12 Notas')
        if (data.length >= 16) return alert('No se Puede Añadir mas de 16 Notas')
        setData(data.concat(input))
        setInput({
            name: '',
            id: input.id + 1
        })
    }
    const deleteData = (id) => {
        setData(data.filter(e => e.id !== id))
    }

    const inputEditData = (value) => {
        setVewData(value)
        setEditInput(true)
    }

    const submitEditData = () => {
        let editData = data.map(e => (e.id === vewData.id ? vewData : e))
        console.log(editData);
        setData(editData)
        setEditInput(false)
    }
    return (
        <main className="flex flex-col justify-center items-center w-full">

            <div className={`${editInput ? 'inline' : 'hidden'} absolute z-50  flex justify-center items-center`}>
                <div className=" bg-pink-800 rounded-lg p-5 z-40 text-white">
                    <h2>Editar: </h2>
                    <h2 className="">{vewData?.id} - {vewData?.name}</h2>
                    <input type="text" value={vewData?.name} className="text-black" onChange={(e) => setVewData({ ...vewData, name: e.target.value })} />
                    <div>
                        <button className="bg-yellow-200 text-gray-800 px-2 py-1 rounded cursor-pointer" onClick={() => submitEditData()}>Editar</button>
                        <button className="bg-red-400 text-white px-2 py-1  rounded cursor-pointer">Cancelar</button>
                    </div>
                </div>
                <div className="absolute backdrop-blur-sm bg-black/50 w-screen h-screen" onClick={() => setEditInput(false)}></div>
            </div>
            <form className="flex items-center border-b border-pink-800 py-2" onSubmit={(e) => addData(e)}>

                <input value={input.name} onChange={(e) => newData(e)} className="text-white appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nueva tarea" aria-label="Full name" />
                <button onClick={(e) => addData(e)} className="flex-shrink-0 bg-pink-800 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    AGREGAR
                </button>

            </form>
            <div className="lg:grid lg:grid-rows-4 lg:grid-flow-col lg:gap-x-5 ">
                {data?.length ? data.map(e =>
                    <div key={e.id} className='w-96 hover:scale-105 ease-out duration-300 bg-pink-800 rounded-lg my-5 p-5 flex items-center justify-between'>
                        <div className="">
                            <h2 className="text-white">{e.id} - {e.name}</h2>
                            <Like></Like>
                        </div>
                        <div className="flex w-20 justify-between">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-red-400 text-white px-2 py-1  rounded cursor-pointer"
                                onClick={() => deleteData(e.id)}>
                                X
                            </motion.div>
                            <motion.div
                                onClick={() => inputEditData(e)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-yellow-200 text-gray-800 px-2 py-1 rounded cursor-pointer">
                                Edit
                            </motion.div>
                        </div>
                    </div>
                ) :
                    <div className='mt-16 bg-pink-800 rounded-lg p-5'>
                        <div>
                            <h2 className="text-white">No Hay Tareas</h2>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}

export default Home