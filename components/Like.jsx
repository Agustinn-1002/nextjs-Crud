'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import './Like.css'
const Like = () => {
    const [like, setLike] = useState(false)
    return (
        <button onClick={() => setLike(!like)}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="rounded p-0"
            >
                {like ? "💖" : "🤍"}
            </motion.div>

        </button>
    )
}

export default Like