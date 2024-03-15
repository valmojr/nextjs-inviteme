export default function FetchFailedComponent(props: {
  error: Error;
  reset: () => void;
}) {
  return <h1>error</h1>;
}
