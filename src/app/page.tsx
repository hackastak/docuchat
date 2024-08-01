import Image from "next/image";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: "Store your PDF Documents",
    description: "Keep all your important PDF files securely stored and easily accessible from anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description: "Experience lightning fast responses to all your questions, ensuring you get the information you need, instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description: "Our intelligent chatbot remembers your previous conversations, ensuring a seamless and personalized experience every time.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description: "Our interactive PDF viewer allows you to interact with your documents in ways you never thought possible.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description: "Your documents are securely backed up in the cloud, so you never have to worry about losing them.",
    icon: ServerCogIcon,
  },
  {
    name: "Cross-Platform Support",
    description: "Access your documents from any device, whether it's your computer, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  }
]

export default function Home() {
  return (
    <main className="pt-10">
      <div className="content-container">
        <div className="">
          <p className="w-fit mx-auto">Your Interactive Document Companion</p>
          <h1 className="text-center">Transform Your PDFs into Interactive Conversations</h1>
        </div>
        <div>
          <p>Introducing <span className="font-bold text-accentSecondary">CHATwPDF</span></p>
        </div>
        <div>
          <p className="text-center text-sm my-4">Upload your document, and our chatbot will answer questions, summarize content,  and answer all your questions. You don't even need a college degree to use it. CHATwPDF turns static documents into <span>dynamic conversations, enhancing productivity 10x, effortlessly.</span></p>

        </div>
        <div>
          <Button>Get Started</Button>
        </div>
        <div>
          {/* Snapshot of the chatbot with document side view */}
        </div>
      </div>
    </main>
  );
}
