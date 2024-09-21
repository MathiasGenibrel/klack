export type TailwindColors =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export class TailwindsColors {
  /**
   * Get the border color and text color for a given color
   * @param color - The color to get the border and text color, based on TailwindCSS colors (default config)
   * @returns The border color and text color for the given color. e.g. ["bg-amber-200", "text-amber-300"]
   * @example
   * const [borderColor, textColor] = TailwindsColors.getBorderColorWithTextColor("amber");
   */
  public static getBorderColorWithTextColor(
    color: TailwindColors,
  ): [string, string] {
    switch (color) {
      case "amber":
        return ["border-amber-200", "text-amber-300"];
      case "blue":
        return ["border-blue-200", "text-blue-300"];
      case "cyan":
        return ["border-cyan-200", "text-cyan-300"];
      case "emerald":
        return ["border-emerald-200", "text-emerald-300"];
      case "fuchsia":
        return ["border-fuchsia-200", "text-fuchsia-300"];
      case "gray":
        return ["border-gray-200", "text-gray-300"];
      case "green":
        return ["border-green-200", "text-green-300"];
      case "indigo":
        return ["border-indigo-200", "text-indigo-300"];
      case "lime":
        return ["border-lime-200", "text-lime-300"];
      case "neutral":
        return ["border-neutral-200", "text-neutral-300"];
      case "orange":
        return ["border-orange-200", "text-orange-300"];
      case "pink":
        return ["border-pink-200", "text-pink-300"];
      case "purple":
        return ["border-purple-200", "text-purple-300"];
      case "red":
        return ["border-red-200", "text-red-300"];
      case "rose":
        return ["border-rose-200", "text-rose-300"];
      case "sky":
        return ["border-sky-200", "text-sky-300"];
      case "slate":
        return ["border-slate-200", "text-slate-300"];
      case "stone":
        return ["border-stone-200", "text-stone-300"];
      case "teal":
        return ["border-teal-200", "text-teal-300"];
      case "violet":
        return ["border-violet-200", "text-violet-300"];
      case "yellow":
        return ["border-yellow-200", "text-yellow-300"];
      case "zinc":
        return ["border-zinc-200", "text-zinc-300"];
    }
  }
}
