import React from "react";

const SkillList = ({ skills }: { skills: Array<[string, boolean]> }) => {
  return (
    <>
      {skills.map(([skill, value]) =>
        value ? <p key={skill}>{skill}</p> : null
      )}
    </>
  );
};

export default SkillList;
