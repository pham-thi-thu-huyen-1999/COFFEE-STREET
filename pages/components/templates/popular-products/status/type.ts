export interface TItem {
  name: string;
  checkID: string;
  id: string;
  onCheck: (id: string) => void;
}
