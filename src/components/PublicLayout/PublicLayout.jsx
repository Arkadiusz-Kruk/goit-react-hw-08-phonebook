import styles from './PublicLayout.module.css';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const PublicLayout = () => {
  const { heading, description, presentation, photo, linkedin, github, info } =
    styles;

  const content = (
    <section className="public">
      <h1 className={heading}>Welcome Phonebook App</h1>
      <p className={description}>
        Phonebook allows you to save, delete and view your phone contacts at any time. Please Sign up or Log in to get started.
      </p>

      
        <div className={info}>
          <p className={description}>
            Hi, my name is Arkadiusz
          </p>
        </div>
    
    </section>
  );
  return content;
};
export default PublicLayout;
