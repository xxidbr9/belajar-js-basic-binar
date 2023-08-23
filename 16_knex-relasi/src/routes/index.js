const { Router } = require("express");
const db = require("../../configs/db.config");

const mainRoutes = Router();

mainRoutes.get("/api/v1/user", async (req, res) => {
  const users = await db.table("users").select("*");
  res.json({ users });
});

mainRoutes.get("/api/v1/user/:user_id/post", async (req, res) => {
  const { user_id } = req.params;
  // const userPosts = await db
  // .select(
  //   "user_posts.id",
  //   "user_posts.description",
  //   "users.nama_lengkap",
  //   "users.profile_picture",
  //   "COUNT(user_post_likes.post_id) AS total_likes"
  // )
  // // .count('active as a')
  // .table("user_posts")
  // .join("users", "users.id", "=", "user_posts.user_id")
  // .leftJoin(
  //   "user_post_likes",
  //   "user_posts.id",
  //   "=",
  //   "user_post_likes.post_id"
  // )
  // .where("user_posts.user_id", user_id)
  // .groupByRaw(
  //   "user_posts.id, user_posts.description, users.nama_lengkap, users.profile_picture"
  // );
  // const userPosts = await db.raw(`
  //   select
  //     "user_posts"."id",
  //     "user_posts"."description",
  //     "users"."nama_lengkap",
  //     "users"."profile_picture",
  //     COUNT(user_post_likes.post_id) AS "total_likes"
  //   from "user_posts"
  //   inner join "users" on "users"."id" = "user_posts"."user_id"
  //   left join "user_post_likes" on "user_posts"."id" = "user_post_likes"."post_id"
  //   where "user_posts"."user_id" = '${user_id}'
  //   group by
  //     "user_posts"."id",
  //     "user_posts"."description",
  //     "users"."nama_lengkap",
  //     "users"."profile_picture"
  // `);
  
  const userPosts = await db
    .select(
      "user_posts.id",
      "user_posts.description",
      "users.nama_lengkap",
      "users.profile_picture",
      db.raw("COUNT(user_post_likes.post_id) AS total_likes")
    )
    .from("user_posts")
    .innerJoin("users", "users.id", "user_posts.user_id")
    .leftJoin("user_post_likes", "user_posts.id", "user_post_likes.post_id")
    .where("user_posts.user_id", user_id)
    .groupBy(
      "user_posts.id",
      "user_posts.description",
      "users.nama_lengkap",
      "users.profile_picture"
    );

  res.json({ userPosts });
});

module.exports = mainRoutes;
