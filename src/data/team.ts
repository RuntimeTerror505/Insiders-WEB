export type TeamMember = {
  id: string;
  /** У макеті імена ще не проставлені — стоїть «Name» */
  name: string;
  role: string;
  linkedin: string;
  /** Фото з public/about/team. Без нього рендериться брендове коло */
  photo?: string;
};

export const leadership: TeamMember[] = [
  { id: "ceo", name: "Name", role: "Founder & CEO", linkedin: "#" },
  { id: "coo", name: "Name", role: "COO & Co-founder", linkedin: "#" },
  { id: "hr", name: "Name", role: "Head of HR", linkedin: "#" },
  { id: "account", name: "Name", role: "Head of Account", linkedin: "#" },
  { id: "marketing", name: "Name", role: "Head of Marketing", linkedin: "#" },
  { id: "design", name: "Name", role: "Head of Design", linkedin: "#" },
];
