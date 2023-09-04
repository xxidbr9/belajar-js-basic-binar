import React from "react";

const fetchDetail = async id => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await resp.json();
};

const BlogDetail = async ({ params }) => {
  if (params.id === "1") throw new Error("gagal bung");
  if (params.id === "99") throw new Error("notfound");

  const data = await fetchDetail(params.id);
  return (
    <div>
      <h1>Hallo ini blog detail page {params.id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default BlogDetail;
