import styles from './PublicLayout.module.css';

const PublicLayout = () => {
  const { heading, description} =
    styles;

  const content = (
    <section className="public">
      <h1 className={heading}>Welcome Phonebook App</h1>
      <p className={description}>
        Phonebook allows you to save, delete and view your phone contacts at any time. Please Sign up or Log in to get started.
      </p>

    </section>
  );
  return content;
};
export default PublicLayout;
