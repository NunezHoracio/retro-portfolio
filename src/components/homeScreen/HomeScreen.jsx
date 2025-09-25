import pjPic from '../../assets/retro-pj.png'

function HomeScreen({ isGameStarted, setIsGameStarted }) {

    const handleStartGame = () => {
        setIsGameStarted(true);
    };

    return (
        <div className="flex flex-col justify-center homeScreem w-full h-screen flex justify-center items-center">
            <div className="card flex flex-col justify-center items-center bg-gray-800 p-10 rounded-3xl mb-10">
                <img className="w-48 h-48 rounded-full" src={pjPic} alt="" />
                <h1 className="text-4xl bold my-4">
                    Horacio Nuñez
                </h1>
                <h2 className="text-2xl">
                    <ul>
                        <li>Raza: <span className="text-gray-300">Humano</span></li>
                        <li>Clase: <span className="text-gray-300">Desarrollador Web</span></li>
                        <li>Habilidad: <span className="text-gray-300">Frontend</span></li>
                    </ul>
                </h2>
            </div>
            <button onClick={handleStartGame} className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-40 hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer animate-pulse">
                Start
            </button>
        </div>
    );
}

export default HomeScreen;