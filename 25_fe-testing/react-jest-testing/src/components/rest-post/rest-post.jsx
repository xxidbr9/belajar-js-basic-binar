import React, { useEffect, useState } from "react";
import restClient from "../../utils/libs/restClient";

const RestPost = () => {
  const [post, setPost] = useState({});

  const callApi = async () => {
    const resp = await restClient("/posts/1");
    setPost(resp.data);
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <div data-testid='user-id'>{post.userId || ""}</div>
    </div>
  );
};

export default RestPost;
