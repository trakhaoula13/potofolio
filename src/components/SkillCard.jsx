import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <span className="badge bg-light text-dark border border-secondary-subtle me-2 mb-2 px-3 py-2 rounded-pill">
      {skill.name}
    </span>
  );
};

export default SkillCard;