import { useState, useEffect } from 'react';
import { Button } from '@lococo/ui/button';

interface Props {
  name: string;
  age: number;
  isActive: boolean;
}

const TestComponent = ({ name, age, isActive }: Props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('effect');
  }, []);

  return (
    <div className="flex items-center justify-center p-4 bg-red-500 text-white hover:bg-red-600">
      <Button onClick={() => setCount(count + 1)} className="mr-2 px-4 py-2">
        Click me
      </Button>
      <span>Count: {count}</span>
    </div>
  );
};

export default TestComponent;
