import "../styles/Posts.css";

//Icons
import arrowRight from "../assets/icons/posts/arrow-right.svg";
import basket from "../assets/icons/posts/basket.svg";
import calender from "../assets/icons/posts/calender.svg";
import download from "../assets/icons/posts/download.svg";
import favorite from "../assets/icons/posts/favorite.svg";
import outlined from "../assets/icons/posts/outlined.svg";
import show from "../assets/icons/posts/show.svg";
import smooth from "../assets/icons/posts/smooth.svg";
import star from "../assets/icons/posts/star.svg";

//Images
import post1 from "../assets/images/post-1.png";
import post2 from "../assets/images/post-2.png";

const Post = (props) => {
  return (
    <div className="post">
      <div className="image-section">
        <img src={props.image} />
        <div className="sale">Sale</div>
        <div className="actions">
          <div className="icon-container">
            <img src={favorite} />
          </div>
          <div className="icon-container">
            <img src={basket} />
          </div>
          <div className="icon-container">
            <img src={show} />
          </div>
        </div>
      </div>
      <div className="info-section">Info</div>
    </div>
  );
};

const Posts = () => {
  return (
    <section className="posts-container">
      <div className="posts-header">
        <h6>Practice Advice</h6>
        <h2>Featured Posts</h2>
      </div>
      <div className="posts-content">
        <Post image={post1} />
        <Post image={post2} />
      </div>
    </section>
  );
};

export default Posts;
