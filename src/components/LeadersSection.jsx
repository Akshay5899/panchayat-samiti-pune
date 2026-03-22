import "./leaders.css";

function LeadersSection() {

  const leaders = [
    {
      img: "/images/leader1.png",
      name: "श्री. देवेंद्र फडणवीस",
      role: "मा. मुख्यमंत्री,महाराष्ट्र राज्य"
    },
    {
      img: "/images/leader2.png",
      name: "श्रीम.सुनेत्रा अजित पवार",
      role: "मा. उपमुख्यमंत्री,महाराष्ट्र राज्य"
    },
    {
      img: "/images/leader3.png",
      name: "श्री. एकनाथ शिंदे",
      role: "मा. उपमुख्यमंत्री,महाराष्ट्र राज्य"
    },
    {
      img: "/images/leader4.png",
      name: "श्री. जयकुमार गोरे",
      role: "मा. मंत्री, ग्रामविकास व पंचायतराज विभाग"
    },
    {
      img: "/images/leader5.png",
      name: "श्री. योगेश कदम",
      role: "मा. राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग"
    },
    {
      img: "/images/leader6.png",
      name: "श्री. गजानन पाटील (भा.प्र.से)",
      role: "मुख्य कार्यकारी अधिकारी"
    },
  ];

  return (
    <section className="leaders-section">

      <div className="container">

        <div className="row justify-content-center">

          {leaders.map((leader, index) => (
            <div className="col-lg-2 col-md-4 col-6 text-center leader-card" key={index}>

              <img
                src={leader.img}
                alt={leader.name}
                className="leader-img"
              />

              <h6 className="leader-name">{leader.name}</h6>
              <p className="leader-role">{leader.role}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default LeadersSection;