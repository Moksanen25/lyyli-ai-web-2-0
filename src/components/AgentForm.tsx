"use client"
import { useState } from "react"

export default function AgentForm() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResponse("")

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input })
    })

    const data = await res.json()
    setResponse(data.result)
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Kysy Lyyliltä:</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Mitä haluat kysyä?"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        {loading ? "Kysytään..." : "Kysy"}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-secondary rounded-md border border-accent/20">
          <p className="text-gray-800 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </form>
  )
} 