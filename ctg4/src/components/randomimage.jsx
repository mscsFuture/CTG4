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
import "../randomimage.css"

const octagon = [
    octa1_easy,
    octa4_med,
    octa8_med,
    octa17_hard,
];

const rectangle = [
    rect4_easy,
    rect9_med,
    rect12_hard,
    rect18_hard,
];

const square = [
    sqaure9_med,
    square2_easy,
    square7_med,
    square12_hard,
];

const triangle = [
    tri_iso_med,
    tri1_eq_easy,
    tri17_right_easy
];
var image;
function randomimage(props) {
    if(props.shape == "octagon"){
    image =   octagon[Math.floor(Math.random() * octagon.length)];
        return (
            <img src={image}width="300" height="250"/>


        )


    }
    else if(props.shape == "rectangle"){
    image =   rectangle[Math.floor(Math.random() * rectangle.length)];

    return (
        <img src={image}width="300" height="250"/>


    )



    }
    else if(props.shape == "square"){
    image =   square[Math.floor(Math.random() * square.length)];
    return (
        <img src={image}width="300" height="250"/>


    )


    }
    else if(props.shape == "triangle"){
    image =   triangle[Math.floor(Math.random() * triangle.length)];
    return (
        <img src={image}width="300" height="250"/>


    )


    }
    
    return (
        <div>
            <h1>Something went wrong</h1>
        </div>
    )
}

export default randomimage;