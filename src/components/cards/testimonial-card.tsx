import { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-md border border-border bg-white p-6">
      <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 6C4.5 8 3 11 3 14.5 3 17.5 5 19 7 19c2.2 0 4-1.8 4-4 0-2-1.4-3.6-3.3-3.9C8.2 9.3 9.6 7.8 12 6.5L7.5 6zm10 0c-3 2-4.5 5-4.5 8.5 0 3 2 4.5 4 4.5 2.2 0 4-1.8 4-4 0-2-1.4-3.6-3.3-3.9 .5-1.8 1.9-3.3 4.3-4.6L17.5 6z" />
      </svg>
      <blockquote className="mt-3 text-text">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.04em] text-secondary">
        {testimonial.role}
      </figcaption>
    </figure>
  );
}
