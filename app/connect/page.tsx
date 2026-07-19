import { ConversationalForm } from "@/components/ConversationalForm"

export const metadata = {
  title: "Connect with Vijender Pal Singh",
  description: "Share your grievances and suggestions.",
}

export default function ConnectPage() {
  return (
    <div className="bg-[var(--page-bg)] min-h-screen pt-20">
      <ConversationalForm />
    </div>
  )
}
