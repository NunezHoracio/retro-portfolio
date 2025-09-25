import pjPic from '../../assets/retro-pj.png'

function HomeScreen({ setIsGameStarted }) {

    const handleStartGame = () => {
        setIsGameStarted(true);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="card flex flex-col justify-center items-center bg-gray-800 p-10 mb-10 border-2 border-gray-700">
                <img className="w-48 h-48 rounded-full" src={pjPic} alt="" />
                <h1 className="text-4xl bold my-4">
                    Horacio Nuñez
                </h1>
                <h2 className="text-2xl">
                    <p>Raza: <span className="text-gray-300">Humano</span></p>
                    <p>Clase: <span className="text-gray-300">Desarrollador Web</span></p>
                    <p>Habilidad: <span className="text-gray-300">Front-end</span></p>
                </h2>
            </div>
            <button onClick={handleStartGame} className="bg-blue-500 text-white text-2xl py-2 px-4 rounded w-40 hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer animate-pulse">
                Start
            </button>
        </div>
    );
}

export default HomeScreen;