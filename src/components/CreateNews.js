import React from 'react';
import { useState } from "react"

const CreateNew = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('CNN')
    const [pending, setPending] = useState(false)

    function hendeleUpload(e) {
        e.preventDefault()

        setPending(true)
        const data = { title, body, author }
        setTimeout(() => {
            fetch('http://localhost:8000/datas', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                console.log('berita baru berhasil')
                setPending(false)
                window.location.replace('/')
            })

        }, 1000)
    }

    return (
        <div className="flex flex-col">
            <h2 className='font-bold'>Buat berita</h2>
            <form className='pt-4'
                onSubmit={hendeleUpload}>
                <label>Judul Berita</label>
                <div className="">
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full outline-none border-2 border-gray-500" />
                </div>
                <div className="pt-2">
                    <label> Conten Berita</label>
                    <div className="">
                        <textarea
                            type="text"
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="w-full outline-none border-2 border-gray-500">
                        </textarea>
                    </div>
                </div>
                <div className="">
                    <label>Penerbit</label>
                    <select className="ml-4"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="CNN">CNN</option>
                        <option value="COMPAS">COMPAS.com</option>
                        <option value="DETIK">Detik.com</option>
                        <option value="oneFutbool">OneFutbool</option>
                    </select>
                </div>
                <div className="pt-4 text-center">
                    {!pending && <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 pt-2" >Upload</button>}

                    {pending && <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 pt-2"
                        disabled>
                        Succes
                    </button>}
                </div>
            </form>
        </div>
    )
}

export default CreateNew