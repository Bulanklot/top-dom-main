export type typeModalProps = {
  open?: boolean;
  onOpenChange?(open: boolean): void;
  children?: React.ReactNode;
}