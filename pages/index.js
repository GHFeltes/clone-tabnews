import Image from "next/image";

function Home() {
    return (
        <div>
            <h1>Minha Base!</h1>
            <Image
                src= "/img.jpeg"
                width={500} 
                height={300}
            />
        </div>
    );
}

export default Home;
