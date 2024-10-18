import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-2">
          I’ll cover how you can write and manage
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JS projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/screen-blog-d1a57.appspot.com/o/Screenshot%202024-10-15%20220239.png?alt=media&token=a3927a8a-150a-4475-a78a-5cf0a647b7b1" />
      </div>
    </div>
  );
};

export default CallToAction;
