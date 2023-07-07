

export default function randomimage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length));
    const changeImage = () => {
        const randomNumber = ;
        setCurrentImageIndex(randomNumber);
    };
    useEffect(() => changeImage(), []);

    return (
        <Image 
            source={images[currentImageIndex]}
            style={{ styles.imageStyle }}
        />
    );
}