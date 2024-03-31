import { createRouter, defineEventHandler, useBase } from "h3";

const router = createRouter();

router.get(
  "/test",
  defineEventHandler(() => {
    console.log(1);
    return {
      status: true,
      message: "Test",
    };
  })
);

export default useBase("/api/user", router.handler);
