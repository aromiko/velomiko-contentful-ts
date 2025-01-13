import { ComponentRegistry } from "@/lib/configurations/component-registry";

export type TypeComponentRegistry =
  (typeof ComponentRegistry)[keyof typeof ComponentRegistry];

export type TypeComponentRegistryLowerCased = Lowercase<TypeComponentRegistry>;
