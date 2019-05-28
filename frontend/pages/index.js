import Page from '../components/Page';
import Data from '../components/Data';
import Add from '../components/Add';

export default function Home() {
  return (
    <Page>
      <h2>Todo</h2>
      <Add />
      <Data />
    </Page>
  );
}
