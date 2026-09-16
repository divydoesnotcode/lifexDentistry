import { services, type Service } from "@/data/services";

export function ServiceList({
  items = services,
}: {
  items?: Service[];
}) {
  return (
    <ul className="divide-y divide-sage border-y border-sage">
      {items.map((service) => (
        <li
          key={service.title}
          className="grid gap-3 py-8 md:grid-cols-12 md:gap-8"
        >
          <h3 className="font-display text-2xl leading-snug text-pine md:col-span-5">
            {service.title}
          </h3>
          <p className="max-w-[38rem] text-base leading-relaxed text-ink md:col-span-7">
            {service.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
