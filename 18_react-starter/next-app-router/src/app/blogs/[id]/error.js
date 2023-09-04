"use client";

export default function Error({ error, reset }) {
  console.log({ error });
  if (error.message === "notfound") {
    return (
      <div>
        <h2>Konten tidak ada!!!</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
    );
  }
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
