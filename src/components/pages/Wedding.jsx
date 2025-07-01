import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import weddingInvite from "../../assets/weddingInvitation.png";
import church from "../../assets/MG_9987.jpg";
import photos from "../../assets/photography.jpg";
import grove from "../../assets/241076685_10158714095737705_3736745650087871756_n.jpg"
import "./Wedding.scss";
import RSVPForm from "../RSVPForm";

const timelineData = [
  {
    time: "3:00 PM",
    imageUrl: church,
    description: "Wedding Service",
  },
  {
    time: "4:00 PM",
    imageUrl: photos,
    description: "Photos and Intermission",
  },
  {
    time: "6:00 PM",
    imageUrl: grove,
    description: "Wedding Reception at the Grove Tavern",
  },
];

export default function Wedding() {
  const [names, setNames] = useState([]);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null); // store selected item index or null

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const namesParam = query.get("names");

    if (!namesParam) {
      navigate("/404", { replace: true });
      return;
    }

    try {
      const parsedNames = JSON.parse(namesParam);
      if (Array.isArray(parsedNames) && parsedNames.length > 0) {
        setNames(parsedNames);
      } else {
        navigate("/404", { replace: true });
      }
    } catch (err) {
      console.error("Failed to parse names:", err);
      navigate("/404", { replace: true });
    }
  }, [navigate]);

  function formatNames(names) {
    if (names.length === 1) return names[0];
    if (names.length === 2) return `${names[0]} & ${names[1]}`;

    const allButLast = names.slice(0, -1).join(", ");
    const last = names[names.length - 1];
    return `${allButLast} & ${last}`;
  }

  return (
    <div className="wedding">
      {/* <img
        className="weddingImg"
        src={weddingInvite}
        alt="Wedding Invitation"
      /> */}
      {names.length > 0 && (
        <div className="guestNames">
          <h1>Dear {formatNames(names)}</h1>
          <p>You're invited the wedding of</p>
        </div>
      )}
      <div className="couple">
        <h2>Lachlan</h2>
        <h2>&</h2>
        <h2>Lidya</h2>
      </div>
      <div className="dateFlex">
        <h3>Saturday</h3>
        <p className="dateNumber">16</p>
        <h3>at 3:00pm</h3>
      </div>
      <h3>AUGUST</h3>
      <h3>
        St. John's Lutheran Church, Tea Tree Gully
      </h3>
    <div>
      <h2>Wedding Timeline</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",           // Make it flex container
          gap: "20px",               // Spacing between items horizontally
          overflowX: "auto",         // Optional: scroll if too wide
          whiteSpace: "nowrap",      // Prevent wrapping to next line
          justifyContent: "center",
        }}
      >
        {timelineData.map((item, index) => (
          <li key={index} style={{ margin: 0 }}>
            <button
              onClick={() => setSelected(index)}
              className="timeline-button"
              style={{
                cursor: "pointer",
                padding: "8px 16px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #333",
                backgroundColor: "#eee",
                whiteSpace: "normal",  // Allow button text to wrap if needed
              }}
            >
              {item.time}
            </button>
          </li>
        ))}
      </ul>
      {/* Popup */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="popup-overlay"
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside popup
            className="popup-content"
          >
            <h3>{timelineData[selected].description}</h3>
            <img
              src={timelineData[selected].imageUrl}
              alt={timelineData[selected].description}
              style={{ maxWidth: "100%", borderRadius: "8px", height: "270px", width: "300px", marginInline: "auto" }}
            />
            <br />
            <button
              onClick={() => setSelected(null)}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    <RSVPForm names={names} />
    </div>
  );
}
