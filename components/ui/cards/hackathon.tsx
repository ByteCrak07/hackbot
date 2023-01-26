import { FC } from "react";
import { Card } from "flowbite-react";

const HackathonCard: FC = () => (
  <div className="max-w-sm">
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Hackathon 1
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        numquam quidem impedit, consequuntur commodi voluptatibus quae qui a
      </p>
    </Card>
  </div>
);

export default HackathonCard;
