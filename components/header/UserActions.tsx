import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconWrapper } from "@/components/header/IconWrapper";
import { Search, User, Moon, Sun } from "lucide-react";

interface UserActionsProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  mounted: boolean;
}

export function UserActions({ theme, setTheme, mounted }: UserActionsProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" aria-label="Search">
        <IconWrapper>
          <Search className="h-5 w-5" />
        </IconWrapper>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
            aria-label="User menu"
          >
            <IconWrapper>
              <User className="h-5 w-5" />
            </IconWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {mounted && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden md:inline-flex"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <IconWrapper>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </IconWrapper>
        </Button>
      )}
    </div>
  );
}
