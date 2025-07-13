import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import weddingInvite from "../../assets/weddingInvitation.png";
import church from "../../assets/MG_9987.jpg";
import photos from "../../assets/photography.jpg";
import grove from "../../assets/241076685_10158714095737705_3736745650087871756_n.jpg"
import "./Wedding.scss";
import RSVPForm from "../RSVPForm";

// const timelineData = [
//   {
//     time: "3:00 PM",
//     imageUrl: church,
//     description: "Wedding Service",
//   },
//   {
//     time: "4:00 PM",
//     imageUrl: photos,
//     description: "Photos and Intermission",
//   },
//   {
//     time: "6:00 PM",
//     imageUrl: grove,
//     description: "Wedding Reception at the Grove Tavern",
//   },
// ];

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
    <div className="outer">
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
          <div className="dateAb">
            <p className="dateNumber">16</p>
          </div>
          <h3>at 3:00pm</h3>
        </div>
        <h3 style={{marginBlock: "20px"}}>AUGUST</h3>
        <h3>
          St. John's Lutheran Church, Tea Tree Gully
        </h3>
        <section 
        style={{
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
        <h3>Wedding Timeline</h3>
        <div>
          <h4>3:00pm - Wedding Ceremony</h4>
        </div>
        <div>
          <h4>4:00pm - Photography and Intermission</h4>
        </div>
        <div>
          <h4>6:00pm - Wedding Reception</h4>
          <p style={{}}>Come and join us for a celebration dinner for our newfound marriage at the Grove Tavern - Cashbar available.</p>
        </div>
        <div>
        </div>
        </section>
      <RSVPForm names={names} />
      </div>
    </div>
  );
}
