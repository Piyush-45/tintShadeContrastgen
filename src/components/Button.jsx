

import { Button } from 'flowbite-react';

export default function ButComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group outline>
        <Button color="gray" className='mt-2 border-2  p-2 rounded-lg '>Explore more</Button>
      </Button.Group>

    </div>
  );
}
