import { Button } from 'ui';

export default function Web() {
  return (
    <div>
      <h1>Web hello</h1>
      <Button variant="solid">Hello World</Button>
      <Button variant="outline">Hello World</Button>
      <Button variant="solid" colorScheme="red">
        Hello World
      </Button>
    </div>
  );
}
