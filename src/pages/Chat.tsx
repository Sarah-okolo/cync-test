import { useState, useEffect, useRef } from "react";
import Pusher from "pusher-js";
import { Paperclip, SendHorizontal, Flag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  sender: "user" | "assistant";
  content: string;
  type: "text" | "image" | "video";
  timestamp: string;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pusher = new Pusher("MY_PUSHER_KEY", { // TODO: Get my Pusher key
      cluster: "MY_PUSHER_CLUSTER",
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (data: Message) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !file) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: file ? URL.createObjectURL(file) : input,
      type: file ? (file.type.startsWith("video") ? "video" : "image") : "text",
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setFile(null);

    // Send to backend (Example API request)
    await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <Header />

      <div className="px-10">
        <div className="flex min-h-[90vh] max-w-7xl mx-auto mt-6 mb-32 bg-bgSecondary border-x border-x-primary rounded-2xl shadow-sm ">
          {/* Chat Section */}
          <div className="w-2/3 relative border-r-2 flex flex-col px- overflow-x-hidden">
          {/* <div className="h-1 bg-primary w-full absolute rounded-2xl"></div> */}
            <div className="flex-1 overflow-auto space-y-4 px-9 pt-8 relative">
              {
                false ?
                  messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}>
                      {msg.type === "text" ? (
                        <p className={`px-4 py-3 rounded-lg ${msg.sender === "user" ? "bg-primary text-white" : "bg-gray-200"}`}>{msg.content}</p>
                      ) : msg.type === "image" ? (
                        <img src={msg.content} alt="uploaded" className="w-32 h-32 rounded-lg" />
                      ) : (
                        <video src={msg.content} controls className="w-32 h-32 rounded-lg" />
                      )}
                    </div>
                  ))
                :
                  <div className="absolute inset-0 flex items-center justify-center h-full w-full">
                    <div className="relative bottom-10">
                      <img src="/images/no-chat.svg" alt="message icon" className="opacity-50 mb-4"/>
                      <p className="text-center"><span className="text-primary font-bold block text-2xl mb-1">No messages yet.</span> <span className="block text-[15px] text-faintText">Start the conversation!</span> </p>
                    </div>
                  </div>
              }
              <div ref={chatEndRef} />
            </div>
            <div className="flex items-center gap-2 border-t-2 h-20 mt-4 py-3 px-3">
              <textarea className="flex-1 pl-6 pr-2 py-3 resize-none text-[15px] rounded-lg h-full outline-none bg-transparent" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message here..." />
              <label className="cursor-pointer">
                <input type="file" hidden accept="image/*,video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                <Paperclip size={20} className="mx-4 text-darkGray"/>
              </label>
              <Button size='lg' className="h-full aspect-square" onClick={handleSend}><SendHorizontal className="scale-150"/></Button>
            </div>
          </div>
          
          {/* Profile & Attachments Section */}
          <div className="w-1/3 py-5 px-10">
            <div className="text-center">
              <img src="/images/lawal-img.png" alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
              <h2 className="text-lg font-semibold my-3">Lawal Sodiq</h2>
              <div className="flex justify-center gap-4 mt-2 bg-lightGreen rounded-3xl border border-softGreen p-3">
                <p className="bg-green-100 p-2 rounded-lg text-center">
                  <span className="font-bold text-lg block">{200}</span>
                  <span className="text-xs text-faintText">Jobs taken</span>
                </p>
                <p className="bg-green-100 p-2 rounded-lg text-center">
                  <span className="font-bold text-lg block">{187}</span>
                  <span className="text-xs text-faintText">Completed</span>
                </p>
                <p className="bg-green-100 p-2 rounded-lg text-center">
                  <span className="font-bold text-lg block">{1}k+</span>
                  <span className="text-xs text-faintText">profile visits</span>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Attachment Files</h3>
                <Button size='sm' variant='link' className="text-linkSecondary text-xs">View All</Button>
              </div>
              <div className="w-full">
                {
                  false ?
                    <div className="grid grid-cols-3 gap-2">
                      {messages.filter(m => m.type !== "text").map((msg) => (
                        <div key={msg.id} className="w-16 h-16 bg-black"></div>
                      ))}
                    </div>
                  :
                    <p className="text-center text-faintText mt-3">No attachments yet.</p>
                }
              </div>
            </div>
            <div className="flex justify-center mt-14">
              <Button size='sm' variant='destructive' className="opacity-65 text-white rounded-lg">
                <Flag />Report Abuse
              </Button>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Chat;