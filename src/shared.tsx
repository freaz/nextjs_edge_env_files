export function Page() {
  const env = process.env.MY_ENV_VAR;

  return (
    <pre>
      <code>
        ENV: {JSON.stringify(env, null, 2)}
      </code>
    </pre>
  );
}