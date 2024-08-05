import Image from "next/image";
import Link from "next/link";
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
    description:
      "Keep all your important PDF files securely stored and easily accessible from anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience lightning fast responses to all your questions, ensuring you get the information you need, instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description:
      "Our intelligent chatbot remembers your previous conversations, ensuring a seamless and personalized experience every time.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Our interactive PDF viewer allows you to interact with your documents in ways you never thought possible.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Your documents are securely backed up in the cloud, so you never have to worry about losing them.",
    icon: ServerCogIcon,
  },
  {
    name: "Cross-Platform Support",
    description:
      "Access your documents from any device, whether it's your computer, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="pt-10">
      <div className="content-container">
        <div className="inner-content-container">
          <p className="w-fit mx-auto text-accentSecondary">
            Your Interactive Document Companion
          </p>
          <h1 className="text-center">
            Transform Your PDFs into Interactive Conversations
          </h1>
        </div>
        <div className="inner-content-container">
          <p>
            Introducing{" "}
            <span className="font-bold text-accentSecondary">DocuChat</span>
          </p>
        </div>
        <div className="inner-content-container">
          <p className="text-sm my-4">
            Upload your document, and our chatbot will answer questions,
            summarize content, and answer all your questions. You don't even
            need a college degree to use it. DocuChat turns static documents
            into{" "}
            <span>
              dynamic conversations, enhancing productivity 10x, effortlessly.
            </span>
          </p>
        </div>
        <div>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto w-7xl px-6 lg:px-8">
            <Image
              alt="App Screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature, index) => (
              <div className="relative pl-9" key={index}>
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 w-5 text-indigo-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
