import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface TypeComponentBasicLink {
  basicLinkName: string;
  basicLinkText?: string;
  basicLinkUrl?: string;
  basicLinkIcon?: keyof typeof dynamicIconImports;
  basicLinkIsExternal: boolean;
  basicLinkIsButton: boolean;
}
