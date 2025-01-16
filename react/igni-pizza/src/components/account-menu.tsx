// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
// import { Building, ChevronDown, LogOut } from "lucide-react";

// import { Button } from "./ui/button";

// export function AccountMenu() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           className="flex select-none items-center gap-2"
//         >
//           Igni Pizza
//           <ChevronDown className="h-4 w-4" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         align="end"
//         className="mt-2 w-56 rounded-md border border-gray-600 shadow-md"
//       >
//         <DropdownMenuLabel className="flex flex-col">
//           <span>Guilherme Padial</span>
//           <span className="text-xs font-normal text-muted-foreground">
//             padial@igni.com
//           </span>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator className="my-1 h-px bg-gray-700" />

//         <DropdownMenuItem className="flex items-center gap-2">
//           <Building className="h-4 w-4" />
//           <span>Perfil da loja</span>
//         </DropdownMenuItem>

//         <DropdownMenuItem className="flex items-center gap-2 text-rose-500 dark:text-rose-400">
//           <LogOut className="h-4 w-4" />
//           <span>Sair</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { Building, ChevronDown, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Igni Pizza
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Guilherme Padial</span>
          <span className="text-xs font-normal text-muted-foreground">
            padial@igni.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
