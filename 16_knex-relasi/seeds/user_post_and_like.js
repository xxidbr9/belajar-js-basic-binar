/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: "78f684a6-b622-440c-8a6c-58c15ca9a8aa",
      nama_lengkap: "Barnando Akbarto",
      email: "barnando13@gmail.com",
      password: "hello-world"
    },
    {
      id: "c82fcafe-6c50-43fc-9f84-356428507cf0",
      nama_lengkap: "Dimas",
      email: "barnando13@gmail.com",
      password: "hello-world"
    },
    {
      id: "17840cf8-50f7-4e8d-af2e-967d3c312a16",
      nama_lengkap: "Ryan",
      email: "barnando13@gmail.com",
      password: "hello-world"
    }
  ]);

  // users posts
  await knex("user_posts").del();
  await knex("user_posts").insert([
    {
      id: "e9748d26-b4e6-49cc-bd89-625b712abcd3",
      description: "ini postingan dimas",
      file_url: "https://example.com/file-video-dimas.mp4",
      user_id: "c82fcafe-6c50-43fc-9f84-356428507cf0"
    },
    {
      id: "1b28406b-7441-4096-b198-db2defed0df3",
      description: "ini postingan dimas 2",
      file_url: "https://example.com/file-video-dimas_2.mp4",
      user_id: "c82fcafe-6c50-43fc-9f84-356428507cf0"
    },
    {
      id: "daf78579-c371-4dc1-bca9-d53467783e1c",
      description: "hello ini ryan",
      file_url: "https://example.com/file-video-ryan.mp4",
      user_id: "17840cf8-50f7-4e8d-af2e-967d3c312a16"
    },
    {
      id: "e4a1ea4a-aa9f-4b72-b89f-2077aaa56f78",
      description: "hello world nando",
      file_url: "https://example.com/file-video-ryan.mp4",
      user_id: "78f684a6-b622-440c-8a6c-58c15ca9a8aa"
    }
  ]);

  // di like oleh
  await knex("user_post_likes").del();
  await knex("user_post_likes").insert([
    {
      id: "653a8801-88a8-430d-a37d-284a57e714e5",
      post_id: "e9748d26-b4e6-49cc-bd89-625b712abcd3",
      user_id: "c82fcafe-6c50-43fc-9f84-356428507cf0"
    },
    {
      id: "6766b511-f401-4b1c-ad27-2846523fe15f",
      post_id: "e9748d26-b4e6-49cc-bd89-625b712abcd3",
      user_id: "17840cf8-50f7-4e8d-af2e-967d3c312a16"
    },
    {
      id: "5f0a9a1e-7d74-461d-a71f-8f1f8f1d1cab",
      post_id: "e9748d26-b4e6-49cc-bd89-625b712abcd3",
      user_id: "78f684a6-b622-440c-8a6c-58c15ca9a8aa"
    }
  ]);
};
