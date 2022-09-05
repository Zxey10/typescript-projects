import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { getPosts } from "../redux/thunks/postThunk";
import { useAppDispatch } from "../redux/store";

const Posts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts({}));
  }, [dispatch]);

  const { posts, err, loading } = useSelector(
    (state: RootState) => state.posts
  );


  return (
    <Fragment>
      <div>Posts</div>
      <ul>
        {posts?.map((post) => (
          <li key={Math.random()}>{post.title}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Posts;
