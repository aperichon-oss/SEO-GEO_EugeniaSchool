import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center text-sm mb-6 overflow-x-auto whitespace-nowrap">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {isLast || !item.href ? (
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="text-secondary hover:text-[#8B2346] transition-colors text-xs uppercase tracking-widest font-medium">
                    {item.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
