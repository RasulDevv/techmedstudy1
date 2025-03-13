import a1 from "../images/1.jpg";
import a2 from "../images/2.jpg";
import a3 from "../images/3.jpg";
import a4 from "../images/4.jpg";

let imgs = [a1, a3, a4];

export default function Home() {
  return (
    <div className="home-page">
                  {imgs.map((el, i) => (
                <div key={i} className="lesson">
                    <img src={el} alt="picture" />
                </div>
            ))}
    </div>
  )
}
