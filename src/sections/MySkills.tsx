import MotionDiv from '../components/MotionDiv';
import MotionList from '../components/MotionList';
import reactIcon from '@/assets/icons/react.png';
import nextjsIcon from '@/assets/icons/next-js.png';
import typescriptIcon from '@/assets/icons/typescript.png';
import javascriptIcon from '@/assets/icons/javascript.png';
import javaIcon from '@/assets/icons/java.png';
import html5Icon from '@/assets/icons/html5.png';
import tailwindcssIcon from '@/assets/icons/tailwindcss.png';
import css from '@/assets/icons/css.png';
import prettierIcon from '@/assets/icons/prettier.png';
import nodejsIcon from '@/assets/icons/nodejs.png';
import mysqlIcon from '@/assets/icons/MySQL.png';
import fiori from '@/assets/icons/fiori.png';
import dockerIcon from '@/assets/icons/docker.png';
import gitIcon from '@/assets/icons/git.png';
import macosIcon from '@/assets/icons/macos.png';
import vscodeIcon from '@/assets/icons/vscode.png';
import postmanIcon from '@/assets/icons/postman.svg';
import MongoDB from '@/assets/icons/MongoDB.png';
import DBeaver from '@/assets/icons/DBeaver.png';
import SkillCard from '../components/card/SkillCard';
export default function skills() {
  const data = [
    {
      title: 'Web Development',
      skills: [
        {
          name: 'React.js',
          icon: reactIcon
        },
        {
          name: 'Next.js',
          icon: nextjsIcon
        },
        // {
        //   name: 'Vue.js',
        //   icon: vueIcon
        // },
        {
          name: 'SapUi5',
          icon: fiori
        },
        {
          name: 'TypeScript',
          icon: typescriptIcon
        },
        {
          name: 'JavaScript',
          icon: javascriptIcon
        },
        {
          name: 'HTML5',
          icon: html5Icon
        },
        {
          name: 'CSS',
          icon: css
        },
        {
          name: 'Tailwind CSS',
          icon: tailwindcssIcon
        },
        {
          name: 'Prettier',
          icon: prettierIcon
        }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        {
          name: 'Java',
          icon: javaIcon
        },
        {
          name: 'Node.js',
          icon: nodejsIcon
        },
        {
          name: 'MongoDB',
          icon: MongoDB
        },
        {
          name: 'MySQL',
          icon: mysqlIcon
        }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        {
          name: 'React Native',
          icon: reactIcon
        }
      ]
    },
    {
      title: 'DevOps',
      skills: [
        {
          name: 'Git',
          icon: gitIcon
        },
        {
          name: 'Docker',
          icon: dockerIcon
        },
      ]
    },
    {
      title: 'Languages',
      skills: [
        {
          name: 'TypeScript',
          icon: typescriptIcon
        },
        {
          name: 'JavaScript',
          icon: javascriptIcon
        },
      ]
    },
    {
      title: 'Tools & Environment',
      skills: [
        {
          name: 'macOS',
          icon: macosIcon
        },
        {
          name: 'VS Code',
          icon: vscodeIcon
        },
        {
          name: 'DBeaver',
          icon: DBeaver
        },
        {
          name: 'Postman',
          icon: postmanIcon
        }
      ]
    },
  ];

  return (
    <section id="skills" className="flex w-full flex-col items-center text-center">
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
