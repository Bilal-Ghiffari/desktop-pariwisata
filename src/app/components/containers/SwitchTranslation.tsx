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
        <div className="flex justify-center items-center bg-[#175399] rounded-full p-[10px]">
          <Globe className="w-5 h-5 text-white" />
        </div>
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
