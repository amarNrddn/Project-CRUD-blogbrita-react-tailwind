import { useEffect, useState } from "react"

const UseEffect = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function hendeleDelet(id) {
        const newData = data.filter(datas => datas.id !== id)
        alert('Berita succes di hapus dari beranda ✔')
        setData(newData)
    }

    useEffect(()  => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('not found')
                    }
                    return res.json()
                }).then(data => {
                    setData(data)
                    setLoading(false)
                    setError(null)
                }).catch(err => {
                    setError(err.message);
                    setLoading(false)
                })
        }, 1000)
    }, [url])

    return { data, loading, error, hendeleDelet }
}

export default UseEffect