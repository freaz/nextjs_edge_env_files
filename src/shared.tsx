export function Page() {
  const env = process.env.MY_ENV_VAR;
  const publicEnv = process.env.NEXT_PUBLIC_MY_ENV_VAR;

  return (
    <pre>
      <code>
        ENV: {JSON.stringify(env, null, 2)}
        <br />
        PUBLIC ENV: {JSON.stringify(publicEnv, null, 2)}
      </code>
    </pre>
  );
}