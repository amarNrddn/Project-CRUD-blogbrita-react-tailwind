import { useParams } from "react-router-dom"
import UseFetch from "./UseFetch"

const DetailNews = () => {
    const { id } = useParams()
    const { data: data, error, loading } = UseFetch('http://localhost:8000/datas/' + id)

    function hendeleDelet() {
        fetch('http://localhost:8000/datas/' + data.id, {
            method: "DELETE",
        }).then(() => {
            alert('Berita berhasil di hapus ✅')
            window.location.replace('/')
        })
    }
    return (
        <div>
            {loading && <p className="text-center">Loading...</p>}
            {error && <i>{error}</i>}
            {data && (
                <article className="w-full text-left">
                    <h2 className="font-bold text-[20px] mb-3 pt-5">{data.title}</h2>
                    <p className="mb-5 pl-5 ">{data.body}</p>
                    <p className="flex">berita by :
                        <p className="font-bold ml-2">{data.author}</p>
                    </p>
                    <div className="pt-4 text-center">
                        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 pt-2"
                            onClick={hendeleDelet}>
                            Hapus
                        </button>
                    </div>
                </article>
            )}
        </div>
    )
}

export default DetailNews