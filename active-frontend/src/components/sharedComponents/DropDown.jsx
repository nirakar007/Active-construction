import React from 'react'

function DropDown() {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

    const handleTitleClick = (title) => {
        const routes = {
            Design: "/design",
            Consult: "/consult",
            Planning: "/planning",
            "Survey & Plot": "/surveyplot",
            Construction: "/construction",
            Ongoing: "/workinprogress"
          };
    }
  return (
    <div>
        {isHovered && <DropDown/>}
    </div>
  )
}

export default DropDown