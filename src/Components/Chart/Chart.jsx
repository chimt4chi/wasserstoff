import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Chart() {
  const percentage = 27;
  const percentage2 = 68;

  return (
    <div>
      <div>
        <div
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            top: "399px",
            left: "60px",
          }}
        >
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#5EFF5A`,
              textColor: "#fff",
              trailColor: "grey",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className="absolute top-[415px] left-[156px]">
          <h1>92,980</h1>
          <h1>Active users</h1>
        </div>
      </div>
      <div>
        <div
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            top: "399px",
            left: "300px",
          }}
        >
          <CircularProgressbar
            value={percentage2}
            text={`${percentage2}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#FFA63F`,
              textColor: "#fff",
              trailColor: "grey",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className="absolute top-[415px] left-[396px] z-10">
          <h1>22,650</h1>
          <h1>New users</h1>
        </div>
      </div>
    </div>
  );
}

export default Chart;
