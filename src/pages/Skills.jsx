import React from 'react';
import { Code2, Ruler, Cpu, Brain } from 'lucide-react';
import skillsData from '../data/skills';
import SkillCard from '../components/SkillCard';

// Mapping des icônes en fonction de la clé "icon" dans les données
const ICONS = { code: Code2, ruler: Ruler, cpu: Cpu, brain: Brain };

const Skills = () => {
  return (
    <div className="container py-5">
      <h2 className="border-start border-4 border-info ps-3 mb-4"> Compétance </h2>
      <div className="row g-4">
        {skillsData.map((group) => {
          const Icon = ICONS[group.icon] || Code2; // fallback si icône non trouvée
          return (
            <div key={group.category} className="col-lg-4">
              <div className="skill-group h-100">
                <div className="skill-group-header mb-3">
                  <Icon size={22} className="text-info me-2" />
                  <h5 className="mb-0 d-inline-block">{group.category}</h5>
                </div>
                <div className="d-flex flex-wrap">
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;