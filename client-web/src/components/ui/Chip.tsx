import React from "react";

export function Chip({ label }: { label: string }) {
  return <span className="chip">{label}</span>;
}

export function Chips({ items }: { items: string[] }) {
  return (
    <div className="tag-list">
      {items.map((item, index) => (
        <Chip key={index} label={item} />
      ))}
    </div>
  );
}
