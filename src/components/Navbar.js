import { Link } from "react-router-dom"

const Navbar = () => {
    return (

        <div className=" flex justify-between bg-white shadow-md py-3 px-2">
            <div className="">
                <h1 className="text-red-400">Tren</h1>
            </div>
            <div className="flex gap-5">
                <Link to='/'>Home</Link>
                <Link to='/createnews'>Buat Berita</Link>
            </div>
        </div>
    )
}

export default Navbar