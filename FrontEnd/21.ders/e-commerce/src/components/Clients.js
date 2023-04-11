import "../styles/Clients.css";
import client1 from "../assets/images/clients/1.png";
import client2 from "../assets/images/clients/2.png";
import client3 from "../assets/images/clients/3.png";
import client4 from "../assets/images/clients/4.png";
import client5 from "../assets/images/clients/5.png";
import client6 from "../assets/images/clients/6.png";

const Clients = () => {
  return (
    <section className="clients-container">
      <img src={client1} />
      <img src={client2} />
      <img src={client3} />
      <img src={client4} />
      <img src={client5} />
      <img src={client6} />
    </section>
  );
};
export default Clients;
