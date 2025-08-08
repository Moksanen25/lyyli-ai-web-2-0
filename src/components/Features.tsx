export default function Features() {
  const items = [
    { title: "Julkaise ilman stressiä", desc: "Lyyli ehdottaa ja tuottaa sisällöt automaattisesti oikeisiin kanaviin." },
    { title: "Ymmärtää tiimisi tarpeet", desc: "Lyyli seuraa viestintää ja tunnistaa mitä kannattaa sanoa ääneen." },
    { title: "Toimii kuin osa tiimiäsi", desc: "Lyyli toimii kuin viestintäkonsultti – mutta nopeammin ja edullisemmin." }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="bg-secondary p-6 rounded-xl shadow-sm border border-accent/20">
            <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 