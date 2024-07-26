import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLang from "@/hooks/useLang";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

type Props = {};

export default function SwitchTranslation({}: Props) {
  const { changeLang, lang } = useLang();
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-[#175399] hover:bg-[#175399] border-none focus-visible:ring-0"
        >
          <Globe className="w-4 h-4 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("select-lang")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => changeLang("id")}
          className={`${lang === "id" ? "text-primary" : ""}`}
        >
          Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLang("en")}
          className={`${lang === "en" ? "text-primary" : ""}`}
        >
          Inggris
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
