import axios from "axios";

const deletePost = async (postId) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log("Post deleted successfully");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

export default deletePost;
