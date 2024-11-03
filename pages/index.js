import Image from "next/image";

function Home() {
    return (
        <div>
            <h1>Oi Amor, eu e o Neneco amamos você!!</h1>
            <Image
                src="/workspaces/clone-tabnews/public/2B3C6B58-AFD5-4D07-B50E-E603C3BEB601_1_201_a.jpeg"
                width={500} 
                height={300} 
            />
        </div>
    );
}

export default Home;
