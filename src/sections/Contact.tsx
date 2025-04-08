import MotionDiv from '../components/MotionDiv';
import MotionList from '../components/MotionList';
import ContactItem from '@/components/ContactItem';
import {  faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function contact() {
  return (
    <section className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8" id="contact">
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>
      <MotionDiv>
        <p>
          Feel free to get in touch! You can use the contact information below for any questions, suggestions, or collaboration
          opportunities.
        </p>
      </MotionDiv>
      <MotionDiv delayOffset={0.2}>
        <h1 className="text-[1.5rem] md:text-[2rem] text-white font-golden">Burhan Sağlık</h1>
      </MotionDiv>
      <MotionList delayOffset={0}>
        <ContactItem title="Github" icon={faGithub} bgColor="bg-purple-500" link="https://github.com/burhanSglk" />
        <ContactItem title="Linkedin" icon={faLinkedin} bgColor="bg-orange-500" link="https://www.linkedin.com/in/burhan-sağlık" />
        <ContactItem title="Mail" icon={faGoogle} bgColor="bg-red-500" link="mailto:sglk.burhan@gmail.com" />
      </MotionList>
    </section>
  );
}
