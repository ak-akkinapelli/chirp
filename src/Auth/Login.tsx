import styles from './Auth.module.scss';
const Login = () => {
  return (
    <section className={styles.container}>
      <section className={styles.logo_section}></section>
      <section className={styles.form_section}>
        <form>
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='password'
            placeholder='Password'
          />
          <button>Login</button>
        </form>
      </section>
    </section>
  );
};
export default Login;
