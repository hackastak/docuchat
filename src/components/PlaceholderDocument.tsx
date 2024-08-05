"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


function PlaceholderDocument() {
  const router = useRouter();
  
  const handleClick = () => {
    // Check user tier
    // Check file limit based on user tier
    // If File limit reached, push to upgrade page
    router.push("/dashboard/upload");
  }

  return (
    <div>
      <Button onClick={handleClick}>
        <PlusCircleIcon className="h-16 w-16" />
        <p>Add a Document</p>
      </Button>
    </div>
  );
}

export default PlaceholderDocument;
