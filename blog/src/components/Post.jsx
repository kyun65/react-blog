import styles from "../index.module.css"
import { useParams } from 'react-router-dom';
import { postItems } from "../data/PostData";

export const Post = () => {

  const { id } = useParams();
  console.log(id)

  const showPost = postItems.find((post) => post.id === Number(id));
  // NUmberに肩を変更

return(
  <div className={styles.detail_container}>
  <div className={styles.detail_title}>{showPost.title}</div>
  <img src={showPost.thumbnailUrl} alt="" />
  <div className={styles.detail_info}>
  <span className={styles.detail_date}>{showPost.createdAt.replace(/-/g, '/').slice( 0, 10 )}</span>
  <div className={styles.detail_cat_wrap}>
  {showPost.categories.map((categorie)=>{
    return(
      <div className={styles.detail_cat} key={categorie}>{categorie}</div>
    )
  })}
  </div>
  </div>
  <p className={styles.detail_content} dangerouslySetInnerHTML={{ __html: showPost.content }} />
  </div>

);



}