import a1 from "../images/1.jpg";
import a2 from "../images/2.jpg";
import a3 from "../images/3.jpg";
import a4 from "../images/4.jpg";
import v1 from "../videos/1.mp4";
import v2 from "../videos/2.mp4";

let imgs = [a1, a3, a4];

export default function Lessons() {
  return (
    <div className="lessons-page">
        <div className="lessons">
            <video src={v1} controls width="940" height="660" ></video>
            <video src={v2} controls width="940" height="660" ></video>
        </div>
    </div>
  )
}
