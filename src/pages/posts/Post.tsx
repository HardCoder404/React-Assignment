import { useEffect } from "react";
import Cards from "../../components/cards"
import useApiStore from "../../store/useApiStore"

const Post = () => {
  
  const {fetchPosts,posts} = useApiStore();
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log("Post: ",posts);
  

  return (
    <div>
      <h1 className="text-2xl font-bold mx-5">Posts</h1>
      <div className="flex overflow-auto hide-scrollbar gap-5">
          {posts.length > 0 && (
            posts.map((post) => (
              <div className="flex">
                  <Cards
                    key={post.id}
                    imageUrl="https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg"
                    title={post.title}
                    description={post.body}
                    userId={post.userId}
                  />
              </div>
            ))
          )}
      </div>
    </div>

  )
}

export default Post