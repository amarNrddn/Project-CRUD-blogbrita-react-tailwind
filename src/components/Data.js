import { Link } from "react-router-dom"

const Data = ({ datas, title, hendeleDelet }) => {
    return (
        <div>
            <h1>{title}</h1>
            {datas.map((data) => (
                <div className='' key={data.id}>
                    <div className="bg-white my-3 hover:shadow-md py-3 rounded-[5px] border-b-2 border-gray-500 flex justify-between px-4">
                        <Link className="w-full" to={`/detailnews/${data.id}`}>
                            <h2 className='font-bold'>{data.title}</h2>
                            <p>{data.author}</p>
                        </Link>
                        <button
                            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 pt-2"
                            onClick={(() => hendeleDelet(data.id))}>
                            Hapus
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Data