import React from 'react';
import './AboutUs.css';
import pic1 from '../../assets/pic1.png'; // Adjust paths as needed
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';
import pic4 from '../../assets/pic4.png';
import FoundersNote from '../FoundersNote/FoundersNote';

function Team() {
  const teamMembers = [
    {
      name: 'Safal Gupta',
      role: 'Co-founder',
      image: pic1,
      bio: ''
    },
    {
      name: 'Piyush Kumar',
      role: 'Co-founder',
      image: pic2,
      bio: ''
    },
    {
      name: 'Anant Vaish',
      role: 'Mentor',
      image: pic3,
      bio: ''
    },
    {
      name: 'Pratyush Pandey',
      role: 'Mentor',
      image: pic4,
      bio: ''
    }
  ];

  return (
    <section >
      <div  className="team-section" >
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-member-image" />
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                {member.bio && <p className="team-member-bio">{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <FoundersNote />
     
    </section>
  );
}

export default Team;