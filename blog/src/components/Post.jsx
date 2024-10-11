import { useParams } from "react-router-dom";
import { postItems } from "../data/Post-data";
import styles from '../index.module.css'

export const Post = () => {

const { id } = useParams(); //分割代入
console.log(id)

const showPost = postItems.find((post)=>{
  const numberId = Number(id);
  return (numberId === post.id);

});

if (!showPost) return <div>記事が見つかりませんでした</div>

return (
  <>
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
  </>
)

}