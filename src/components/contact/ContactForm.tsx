"use client";

export function ContactForm() {
  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We will contact you shortly.");
      }}
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border-2 border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border-2 border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border-2 border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="border-2 border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary/90"
      >
        Send request
      </button>
    </form>
  );
}
