import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://a-static.mlcdn.com.br/450x450/miniatura-batmovel-e-figura-batman-1989-jada-1-24-jada-toys/comprecarshop/12755174407/8f6fe6f7824454ae58b49a50234a76a1.jpeg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
