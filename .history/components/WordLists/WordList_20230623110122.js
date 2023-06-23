import { Children } from "react/cjs/react.production.min";
import Card from "../ui/Card";

function WordList({ Children }) {
  return (
    <Card>
      <Text>{Children}</Text>
    </Card>
  );
}

export default WordList;
