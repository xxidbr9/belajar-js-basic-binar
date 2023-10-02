import { beforeAll, test, jest, expect, afterAll } from "@jest/globals";
import { createServer } from "@mswjs/http-middleware";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import RestPost from ".";

const json = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

export const handlers = [
  rest.get("http://localhost:8080/posts/1", (req, res, ctx) => {
    return res(ctx.json(json));
  })
];

const server = setupServer(...handlers);

describe("rest-post.jsx test", () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  test("should render post", async () => {
    const { getByTestId } = render(<RestPost />);

    await waitFor(() => {
      const element = getByTestId("user-id");
      expect(element).toHaveTextContent("1");
    });
  });
});
