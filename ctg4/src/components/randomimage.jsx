import octa1_easy from "./images/octagon/octa1_easy.png";
import octa4_med from "./images/octagon/octa4_med.png";
import octa8_med from "./images/octagon/octa8_med.png";
import octa17_hard from "./images/octagon/octa17_hard.png";
import rect4_easy from "./images/rectangles/rect4_easy.png";
import rect9_med from "./images/rectangles/rect9_med.png";
import rect12_hard from "./images/rectangles/rect12_hard.png";
import rect18_hard from "./images/rectangles/rect18_hard.png";
import sqaure9_med from "./images/squares/sqaure9_med.png";
import square2_easy from "./images/squares/square2_easy.png";
import square7_med from "./images/squares/square7_med.png";
import square12_hard from "./images/squares/square12_hard.png";
import tri_iso_med from "./images/triangles/tri_iso_med.png";
import tri1_eq_easy from "./images/triangles/tri1_eq_easy.png";
import tri17_right_easy from "./images/triangles/tri17_right_easy.png";

const images = [
    octa1_easy,
    octa4_med,
    octa8_med,
    octa17_hard,
    rect4_easy,
    rect9_med,
    rect12_hard,
    rect18_hard,
    sqaure9_med,
    square2_easy,
    square7_med,
    square12_hard,
    tri_iso_med,
    tri1_eq_easy,
    tri17_right_easy
];

function randomimage() {
    const randomNumber = Math.floor(Math.random() * images.length);
    
    return (
        <image src={images[randomNumber]}width="300" height="250"/>
    )
}

export default randomimage;