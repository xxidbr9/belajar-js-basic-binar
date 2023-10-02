import { renderHook, act } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import { useCount } from "../useCount";

describe("Testing custom hooks useCount", () => {
  test("should count change", () => {
    const { result } = renderHook(() => useCount());

    // menjalankan function handleAdd di dalam useCount
    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(1);
  });
});
