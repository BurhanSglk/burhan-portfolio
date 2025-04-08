import MotionDiv from '../components/MotionDiv';
import Project from '@/components/Project';
export default function Projects() {
  const projects = [
    {
      name: 'Bs Note',
      image: '/bsnote.png',
      githubUrl: 'https://github.com/BurhanSglk/NoteApp',
      projectUrl: 'https://note.burhansaglik.site/'
    },
  ];
  return (
    <section className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8" id="Projects">
      <div className="text-center my-8">
        <MotionDiv delayOffset={0}>
          <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
        </MotionDiv>

        <MotionDiv delayOffset={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* <MotionList delayOffset={0.2}> */}
            {projects.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                image={project.image}
                githubUrl={project.githubUrl}
                projectUrl={project.projectUrl}
              />
            ))}
            {/* </MotionList> */}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
