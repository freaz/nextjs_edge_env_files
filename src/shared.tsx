export function Page() {
  const env = process.env.MY_ENV_VAR;
  const publicEnv = process.env.NEXT_PUBLIC_MY_ENV_VAR;
  const dashboardEnv = process.env.MY_ENV_VAR_DASHBOARD;

  return (
    <pre>
      <code>
        ENV: {JSON.stringify(env, null, 2)}
        <br />
        PUBLIC ENV: {JSON.stringify(publicEnv, null, 2)}
        <br />
        DASHBOARD ENV: {JSON.stringify(dashboardEnv, null, 2)}
      </code>
    </pre>
  );
}