import React from "react";
import "./members.css";

const members = [
  {
    name: "श्री. जयकुमार गोर",
    role: "मा. मंत्री, आदिवासी व कल्याण विभाग",
  },
  {
    name: "श्री. जयकुमार गोर",
    role: "मा. मंत्री, आदिवासी व कल्याण विभाग",
  },
  {
    name: "श्री. जयकुमार गोर",
    role: "मा. मंत्री, आदिवासी व कल्याण विभाग",
  },
  {
    name: "श्री. जयकुमार गोर",
    role: "मा. मंत्री, आदिवासी व कल्याण विभाग",
  },
];

const MembersSection = () => {
  return (
    <div className="members-section">
      <div className="members-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="avatar"
              />
            </div>

            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersSection;