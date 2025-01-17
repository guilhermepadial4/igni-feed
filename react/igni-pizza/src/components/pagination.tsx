import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "./ui/button";

interface PaginationProps {
  pagIndex: number;
  totalCount: number;
  perPage: number;
}

export function Pagination({ pagIndex, totalCount, perPage }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pagIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronsLeft className="h-2 w-2" />
            <span className="sr-only">Prímeira página</span>
          </Button>

          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronLeft className="h-2 w-2" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronRight className="h-2 w-2" />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button variant="outline" className="h-4 w-4 p-4">
            <ChevronsRight className="h-2 w-2" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
