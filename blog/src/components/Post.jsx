import { useParams } from 'react-router-dom';
import { postItem } from '../data/Post-data.js'
import styles from '../index.module.css'


export const Post = () => {

  const { id } = useParams();
  console.log(id)
  const showPost = postItem.find((post)=>{
    const numberId = Number(post.id);
    return(numberId === post.id);
  });


  return(
<>
    <div className={styles.hoge}>
      <p>{showPost.content}</p>


    </div>
    </>
  );
}