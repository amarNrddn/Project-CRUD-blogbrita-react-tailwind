import Data from './Data'
import UseEffect from './UseFetch'
import { BiSearchAlt } from 'react-icons/bi'

const Home = () => {
    const { data: datas, error, loading, hendeleDelet } = UseEffect("http://localhost:8000/datas")

    return (
        <div>
            <div className="my-3">
                {error && <i>{error}</i>}
                {loading && <p className='text-center'>Loading...</p>}
                {datas && <Data datas={datas} title="# Berita trending" hendeleDelet={hendeleDelet} />}

                {/* memfilter data pada array atau API */}
                {/* <Data data={datas.filter((datas => datas.author === "Compas"))} title="Derik.com"/> */}
            </div>
        </div>
    )
}

export default Home