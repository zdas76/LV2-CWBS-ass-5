

const TeamMember = () => {
  const teamMembers = [
    {
      name: "John Doe",
      designation: "CEO",
      description: "John is the visionary behind our company, leading us to success.",
      imageUrl: "https://via.placeholder.com/150",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Jane Smith",
      designation: "CTO",
      description: "Jane leads our tech team, ensuring our platform is cutting-edge.",
      imageUrl: "https://via.placeholder.com/150",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      
    },{
        name: "Jane Smith",
        designation: "CTO",
        description: "Jane leads our tech team, ensuring our platform is cutting-edge.",
        imageUrl: "https://via.placeholder.com/150",
        socialLinks: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        },
        
      },
    // Add more team members as needed
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers?.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-rull h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.designation}</p>
            <p className="mt-4 text-gray-700">{member.description}</p>
            <div className="mt-6 space-x-4">
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-blue-500 text-2xl"></i>
              </a>
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-blue-700 text-2xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
